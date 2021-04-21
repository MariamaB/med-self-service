import { QuestionnaireComponent } from './components/trust-build-Service/questionnaire-view/questionnaire-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TustBuildCanvasViewComponent } from './components/trust-build-Service/tust-build-canvas-view/tust-build-canvas-view.component';
import { DigaCanvasComponent } from './components/fast-track-checker/diga-canvas/diga-canvas.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DigasOverviewComponent } from './components/fast-track-checker/digas-overview/digas-overview.component';
export const firebaseConfig = {
  apiKey: 'AIzaSyApAfqbc2EJyGj5Uyl-fKOcXTP5PCVKgEw',
  authDomain: 'diga-cfe3d.firebaseapp.com',
  databaseURL: 'https://diga-cfe3d-default-rtdb.firebaseio.com',
  projectId: 'diga-cfe3d',
  storageBucket: 'diga-cfe3d.appspot.com',
  messagingSenderId: '402828897555',
  appId: '1:402828897555:web:08ce11a9b05b4f84a67ee6',
};
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    QuestionnaireComponent,
    TustBuildCanvasViewComponent,
    DigaCanvasComponent,
    DigasOverviewComponent,
    // ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig, 'DiGA'),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
  ],
  // entryComponents: [ErrorComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
