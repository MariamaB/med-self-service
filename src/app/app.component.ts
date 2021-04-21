import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('content') content: ElementRef;
  title = 'Medical Self-Services';
  projects = true;
  innovation = true;
  pool = true;
  subCanvas = true;

  headline = 'Medical Self-Services';

  mediaSub: Subscription;
  deviceXs: boolean;

  constructor(public mediaObserver: MediaObserver) {}

  ngOnInit(): void {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      }
    );
  }

  public switchToTbc() {
    this.projects = !this.projects;
    // this.headline = 'Trust-Build-Canvas';
  }

  public createPDF() {
    console.log('Save as PDF...', window.innerWidth + '/' + window.innerHeight);
    const element = document.getElementById('main-content');

    const doc = new jsPDF('landscape', 'px', 'a1');
    doc.html(element, {
      callback: function (pdf) {
        pdf.save();
      },
      // x: 10,
      // y: 10,
    });
  }
  ngOnDestroy(): void {
    this.mediaSub.unsubscribe();
  }
}
