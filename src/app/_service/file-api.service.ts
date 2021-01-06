import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { FileModel } from '../models/file.model';
import { from, Observable,  } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileApiService {
  public uploadProgress$: Observable<number>;
  public downloadUrl$: Observable<string>;
  public uploadTask: AngularFireUploadTask;

  constructor(private storage: AngularFireStorage) { }

  public pushFileToStorage(fileToUpload: FileModel): any {
    const mediaFolderPath = new Date().getTime() + '_' + fileToUpload.name;
    const { uploadProgress$, downloadUrl$ } = this.uploadFileAndGetMetadata(
      mediaFolderPath,
      fileToUpload.file
    );
    this.uploadProgress$ = uploadProgress$;
    this.downloadUrl$ = downloadUrl$;
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
      uploadProgress$: this.uploadTask.percentageChanges(),
      downloadUrl$: this.getDownloadUrl$(filePath)
    };
  }

  private getDownloadUrl$(
    path: string,
  ): Observable<string> {
    return from(this.uploadTask).pipe(
      switchMap((_) => this.storage.ref(path).getDownloadURL()),
    );
  }
}
