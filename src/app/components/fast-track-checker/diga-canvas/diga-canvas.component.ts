import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { canvas, digaEmpty, digaMockdata } from './canvas';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-diga-canvas',
  templateUrl: './diga-canvas.component.html',
  styleUrls: ['./diga-canvas.component.scss'],
})
export class DigaCanvasComponent implements OnInit, OnDestroy {
  lengthFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]);
  icd10FormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]);
  languageFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(1),
  ]);
  canvas = canvas;
  onUpdate = false;
  onEdit = true;
  diga: any;

  digaData$: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {}
  ngOnInit() {
    if (history.state.data) {
      this.diga = history.state.data;
      this.onUpdate = true;
    } else {
      this.diga = digaEmpty;
      this.onUpdate = false;
    }
    history.state.data = {};
  }
  ngOnDestroy(): void {
    // console.log('My diga', JSON.stringify(this.diga, null, 2));
  }
  public onSave() {
    if (this.onEdit) {
      this.onEdit = false;
      if (!this.onUpdate) {
        this.onUpdate = true;
        this.diga.id = uuidv4();
        console.log('create canvas id:', this.diga.id);
        this.firestore.collection('data').doc(this.diga.id).set(this.diga);
      } else {
        this.onUpdate = false;
        this.firestore.collection('data').doc(this.diga.id).update(this.diga);
      }
    } else {
      this.onEdit = true;
    }
    // this.onEdit = !this.onEdit;
  }
  public add(): void {
    console.log('new Language');
    // console.log('new Language', this.val);
    // this.languages.push(this.val);
  }
}
