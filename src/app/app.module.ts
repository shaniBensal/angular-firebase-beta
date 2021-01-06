import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadHeaderComponent } from './components/upload-header/upload-header.component';
import { UploadItemComponent } from './components/upload-item/upload-item.component';
import { UploadWindowComponent } from './components/upload-window/upload-window.component';
import { UploadedFileListComponent } from './components/uploaded-file-list/uploaded-file-list.component';
import { MainComponent } from './pages/main/main.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from './icons.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { FileApiService } from './_service/file-api.service';
import { StorageApiService } from './_service/storage-api.service';
import { UtilService } from './_service/utils.service';

@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    MainComponent,
    UploadHeaderComponent,
    UploadItemComponent,
    UploadWindowComponent,
    UploadedFileListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    IconsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FileApiService, UtilService, StorageApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
