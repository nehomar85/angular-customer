import { Component, VERSION } from '@angular/core';
import { Customer } from '../../model/Modelos';

@Component({
  selector: 'my-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent {
  // Variable usada para capturar datos del formulario.
  customer: Customer = new Customer();

  // Variable usada para almacenar los customers capturados desde el input.
  customers: Customer[] = [];

  // Se agrega (push) el nuevo Customer en el arreglo (json)
  guardar() {
    var newCustomer = JSON.parse(JSON.stringify(this.customer));
    this.customers.push(newCustomer);
    this.customer = new Customer();
  }
}
