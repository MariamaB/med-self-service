import { Component, OnDestroy, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { canvas } from './canvas';
@Component({
  selector: 'app-diga-canvas',
  templateUrl: './diga-canvas.component.html',
  styleUrls: ['./diga-canvas.component.scss'],
})
export class DigaCanvasComponent implements OnInit, OnDestroy {
  formControl = new FormControl('', [
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

  onEdit = false;
  diga: any;

  digaData$: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {}
  ngOnInit() {
    this.digaData$ = this.firestore.collection('data').valueChanges();
    this.digaData$.subscribe((x) => {
      console.log('firestore data', JSON.stringify(x, null, 2));
      this.diga = x[0];
    });
  }
  ngOnDestroy(): void {
    console.log('My diga', JSON.stringify(this.diga, null, 2));
  }
  public onSave() {
    // firestore.collection('data').add(this.diga);
  }
  public add(): void {
    console.log('new Language');
    // console.log('new Language', this.val);
    // this.languages.push(this.val);
  }
}
