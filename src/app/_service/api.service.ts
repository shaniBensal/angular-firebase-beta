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

  constructor(private fireStorage: AngularFireStorage, private db: AngularFireDatabase) { }

  public pushFileToStorage(selectedFile: FileModel): Observable<number> {
    const { name } = selectedFile;
    const filePath = `${new Date().getTime()}_${name}`;
    const uploadTask: AngularFireUploadTask = this.fireStorage.upload(
      filePath,
      selectedFile,
    );
    this.getDownloadUrl$(uploadTask, filePath);
    return uploadTask.percentageChanges()
  }

  public getDownloadUrl$(uploadTask: AngularFireUploadTask, path: string): Observable<string> {
    return from(uploadTask).pipe(
      switchMap((_) => this.fireStorage.ref(path).getDownloadURL()),
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
