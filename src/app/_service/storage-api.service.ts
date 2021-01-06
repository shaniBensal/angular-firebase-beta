import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { FileDetails } from '../models/file-details.model';
import { UtilService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class StorageApiService {
  private collectionName: string = 'file-list';

  constructor(private fireService: AngularFirestore, private utilService: UtilService) { }

  public getList(): any {
    return this.fireService.collection(this.collectionName).snapshotChanges().pipe(map(data => {
      if (!!data.length) {
        let itemList = data.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data() as {}
          } as FileDetails
        });
        return itemList;
      }
    }
    ));
  }

  public getItemById(itemId): Observable<any> {
    return this.fireService.collection(this.collectionName).doc(itemId).get().pipe(map(res => {
      const item = res.data() as FileDetails;
      return item;
    })
    )
  };

  public updateItemById(updatedItem: FileDetails) {
    return this.fireService.collection(this.collectionName).doc(updatedItem.id).update(updatedItem);
  }

  public deleteItemById(itemId: string) {
    return this.fireService.collection(this.collectionName).doc(itemId).delete();
  }

  public createNewItem(item: FileDetails) {
    return this.fireService.collection(this.collectionName).add(item).then((docRef) => {
      let itemWhithId: FileDetails = item;
      itemWhithId.id = docRef.id;
      this.updateItemById(itemWhithId);
    })
      .catch((error) => {
        console.error("Error finding document: ", error);
      });
  }
}
