import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { FileModel } from '../models/file.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public uploadProgress$: Observable<number>;
  public uploadTask: AngularFireUploadTask;

  constructor(private storage: AngularFireStorage) { }

  public pushFileToStorage(fileToUpload: FileModel): any {
    const mediaFolderPath = new Date().getTime() + '_' + fileToUpload.name;
    const { uploadProgress$ } = this.uploadFileAndGetMetadata(
      mediaFolderPath,
      fileToUpload.file
    );
    this.uploadProgress$ = uploadProgress$;
  }

  public cancelUpload(): void {
    this.uploadTask.cancel();
  }

  private uploadFileAndGetMetadata(
    filePath: string,
    fileToUpload: File,
  ): any {
    this.uploadTask = this.storage.upload(
      filePath,
      fileToUpload,
    );
    return {
      uploadProgress$: this.uploadTask.percentageChanges()
    };
  }
}
