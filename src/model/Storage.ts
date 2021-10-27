import { Customer } from './Modelos';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Storage {
  customer: Customer = {
    Nombre: '',
  };

  customers: Customer[] = [];

  setLocalStorage(key: string, data: any): void {
    localStorage.setItem(key, data);
  }

  getLocalStorage(key: string) {
    debugger;
    return localStorage.getItem(key);
  }
}
