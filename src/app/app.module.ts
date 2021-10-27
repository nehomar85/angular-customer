import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomerComponent } from './customers/customer.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: 'customers', component: CustomerComponent },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [AppComponent, HelloComponent, CustomerComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
