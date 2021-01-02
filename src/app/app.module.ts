import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadHeaderComponent } from './components/upload-header/upload-header.component';
import { UploadItemComponent } from './components/upload-item/upload-item.component';
import { UploadListComponent } from './components/upload-list/upload-list.component';
import { ApiService } from './_service/api.service';
import { UploadWindowComponent } from './components/upload-window/upload-window.component';
import { MainComponent } from './pages/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from './icons.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2CTrSgnxBimB3NK8mxclcaXK7bfnIXLc",
  authDomain: "beta-77952.firebaseapp.com",
  projectId: "beta-77952",
  storageBucket: "beta-77952.appspot.com",
  messagingSenderId: "584449357416",
  appId: "1:584449357416:web:85e6982b8d65cc07f4addd",
  measurementId: "G-27SDWH3G0E"
};

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    MainComponent,
    UploadHeaderComponent,
    UploadItemComponent,
    UploadListComponent,
    UploadWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    IconsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
