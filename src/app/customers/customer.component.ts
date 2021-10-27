import { Component, VERSION, AfterViewInit, OnDestroy } from '@angular/core';
import { Customer } from '../../model/Modelo';
import { Storage } from '../../model/Storage';

@Component({
  selector: 'my-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements AfterViewInit, OnDestroy {
  constructor(private storage: Storage) {}

  // Variable usada para capturar el customer.
  customer: Customer = new Customer();

  // Variable usada para almacenar el customer capturado.
  customers: Customer[] = [];

  ngAfterViewInit() {
    this.customer = JSON.parse(this.storage.getLocalStorage('Customer'));
    this.customers = JSON.parse(this.storage.getLocalStorage('Customers'));
  }

  ngOnDestroy() {
    this.storage.setLocalStorage('Customer', JSON.stringify(this.customer));
    this.storage.setLocalStorage('Customers', JSON.stringify(this.customers));
  }

  guardar() {
    debugger;
    var newCustomer = JSON.parse(JSON.stringify(this.customer));
    this.customers.push(newCustomer);
    this.customer = new Customer();
  }
}
