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
    NgbModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
