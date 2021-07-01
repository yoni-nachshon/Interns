import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  fileDetailsList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    this.fileDetailsList = this.firebase.list('fileDetails');
  }
  insertImageDetails(formValues) {

    this.fileDetailsList.push(formValues);
  }

  
}

