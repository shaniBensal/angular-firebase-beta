import { Injectable } from "@angular/core";
import { FileDetails } from "../models/file-details.model";

@Injectable({
  providedIn: 'root'
})

export class UtilService {
  public sortList(isAsc: boolean, list: FileDetails[]): FileDetails[] {
    if(!!isAsc){
      return list.sort((a,b) => (a.name > b.name ? 1 : -1));
    } else {
      return list.sort((a,b) => (a.name > b.name ? -1 : 1));
    }
  }

  public arrangeData(itemList: FileDetails[]): any {
    let arr = [...itemList];
    let sortedList = {};
    while (arr.length > 0) {
      let key = arr[0].fileType;
      let filteredArr = arr.filter(item => { if (item.fileType == key) return item });
      sortedList[arr[0].fileType] = filteredArr;
      arr = arr.filter(item => item.fileType !== key);
    }
    return sortedList;
  }
}
