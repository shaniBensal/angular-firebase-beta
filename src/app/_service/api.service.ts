import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { switchMap } from 'rxjs/operators';
import { FileModel } from '../models/file.model';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private basePath = '/files';
  public downloadUrl$: Observable<string>;
  public uploadProgress$: Observable<number>;

  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase) { }

  public pushFileToStorage(fileToUpload: FileModel): any {
    const mediaFolderPath = new Date().getTime() + '_' + fileToUpload.name;

    const { uploadProgress$ } = this.uploadFileAndGetMetadata(
      mediaFolderPath,
      fileToUpload.file
    );

    this.uploadProgress$ = uploadProgress$;
  }

  private uploadFileAndGetMetadata(
    filePath: string,
    fileToUpload: File,
  ): any {
    const uploadTask: AngularFireUploadTask = this.storage.upload(
      filePath,
      fileToUpload,
    );
    return {
      uploadProgress$: uploadTask.percentageChanges(),
      downloadUrl$: this.getDownloadUrl$(uploadTask, filePath),
    };
  }

  private getDownloadUrl$(
    uploadTask: AngularFireUploadTask,
    path: string,
  ): Observable<string> {
    return from(uploadTask).pipe(
      switchMap((_) => this.storage.ref(path).getDownloadURL()),
    );
  }

  getFiles(numberItems): AngularFireList<FileModel> {
    return this.db.list(this.basePath, ref =>
      ref.limitToLast(numberItems));
  }

  // deleteFile(fileUpload: FileModel): void {
  //   this.deleteFileDatabase(fileUpload.key)
  //     .then(() => {
  //       // const storageRef = this.storage.ref(this.basePath);
  // //   storageRef.child(name).delete();
  //     })
  //     .catch(error => console.log(error));
  // }

  // private deleteFileDatabase(key: string): Promise<void> {
  //   return this.db.list(this.basePath).remove(key);
  // }
}
