import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-digas-overview',
  templateUrl: './digas-overview.component.html',
  styleUrls: ['./digas-overview.component.scss'],
})
export class DigasOverviewComponent implements OnInit {
  digas: any;

  digaData$: Observable<any[]>;
  constructor(private firestore: AngularFirestore) {}
  ngOnInit() {
    this.digaData$ = this.firestore.collection('data').valueChanges();
    this.digaData$.subscribe((data) => {
      // console.log('firestore data', JSON.stringify(data, null, 2));
      this.digas = data;
    });
  }
}
