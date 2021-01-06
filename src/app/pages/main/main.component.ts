import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';
import { FileDetails } from '../../models/file-details.model';
import { FileModel } from '../../models/file.model';
import { StorageApiService } from '../../_service/storage-api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy {
  public showUploadWindow: boolean = false;
  public selectedFiles: File[] = [];
  public uploadFiles: FileModel[] = [];
  private isAlive: boolean = true;
  public uploadedList: Observable<FileDetails[]>;

  constructor(private storageService: StorageApiService) { }

  ngOnInit(): void {
    this.uploadedList = this.storageService.getList();
  }

  selectFile(event): void {
    this.selectedFiles = event.target.files;
  }

  upload(): void {
    if (this.selectedFiles.length > 0) {
      this.showUploadWindow = true;
      let arr: FileModel[] = [];
      Object.values(this.selectedFiles).map(item => {
        let fileModel: FileModel = {
          file: item,
          name: item.name,
        }
        arr.push(fileModel);
      });
      this.uploadFiles = arr;
    }
  }

  public clearList(): void {
    this.selectedFiles =[];
    this.uploadFiles = [];
    this.showUploadWindow = false;
  }

  public removeItem(itemId: string): void{
    this.storageService.deleteItemById(itemId);
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }
}
