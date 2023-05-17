import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  encryptData(value: any) {
    return AES.encrypt(JSON.stringify(value), 'ekZero').toString();
  }
  decryptData(value: string | null) {
    if (value != null && value != '') {
      const bytes = AES.decrypt(value.toString(), 'ekZero');
      return JSON.parse(bytes.toString(enc.Utf8));
    }
    else {
      return value;
    }
  }

  getItem(key: string) {
    return this.decryptData(localStorage.getItem(key));
  }

  setItem(key: string, value: string) {
    value = this.encryptData(value);
    localStorage.setItem(key, value);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  removeAll() {
    localStorage.clear();
  }

}
