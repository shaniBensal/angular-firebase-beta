import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, map } from 'rxjs/operators';
import { FileModel } from 'src/app/models/file.model';
import { ApiService } from 'src/app/_service/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public showUploadWindow: boolean = false;
  selectedFiles: File[] = [];
  public uploadFiles: FileModel[] = [];

  constructor(private storage: AngularFireStorage, private apiService: ApiService) { }

  ngOnInit(): void {
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles.length > 0) {
      this.showUploadWindow = true;
      let arr = [];
      Object.values(this.selectedFiles).map(item => {
        let fileModel: FileModel = {
          url: '',
          file: item,
          name: item.name,
          key: ''
        }
        fileModel.percentage = this.apiService.pushFileToStorage(fileModel);
        arr.push(fileModel);
      });
      this.selectedFiles = arr;
    }
  }
}
