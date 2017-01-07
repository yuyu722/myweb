import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Customer } from "../models/customer";

@Injectable()
export class CustomerService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private customersUrl = 'api/customers'; // URL to web api

  constructor(private http: Http) {}

  getCustomers(): Promise<Customer[]>
  {
    /*
    const customers: Customer[] =
      [
        { id: 1, name: 'Customer A', phone_number: '8006670001', address: '', created: '2017-01-01', wechat_id: '' },
        { id: 1, name: 'Customer B', phone_number: '8006670002', address: '', created: '2017-01-01', wechat_id: '' },
        { id: 1, name: 'Customer C', phone_number: '8006670003', address: '', created: '2017-01-01', wechat_id: '' },
        { id: 1, name: 'Customer D', phone_number: '8006670004', address: '', created: '2017-01-01', wechat_id: '' },
        { id: 1, name: 'Customer E', phone_number: '8006670005', address: '', created: '2017-01-01', wechat_id: '' },
        { id: 1, name: 'Customer F', phone_number: '8006670006', address: '', created: '2017-01-01', wechat_id: '' },
        { id: 1, name: 'Customer G', phone_number: '8006670007', address: '', created: '2017-01-01', wechat_id: '' },
        { id: 1, name: 'Customer H', phone_number: '8006670008', address: '', created: '2017-01-01', wechat_id: '' },
        { id: 1, name: 'Customer I', phone_number: '8006670009', address: '', created: '2017-01-01', wechat_id: '' },
        { id: 1, name: 'Customer J', phone_number: '8006670010', address: '', created: '2017-01-01', wechat_id: '' },
        { id: 1, name: 'Customer K', phone_number: '8006670011', address: '', created: '2017-01-01', wechat_id: '' },
        { id: 1, name: 'Customer L', phone_number: '8006670012', address: '', created: '2017-01-01', wechat_id: '' },
        { id: 1, name: 'Customer M', phone_number: '8006670013', address: '', created: '2017-01-01', wechat_id: '' },
        { id: 1, name: 'Customer N', phone_number: '8006670014', address: '', created: '2017-01-01', wechat_id: '' },
        { id: 1, name: 'Customer O', phone_number: '8006670015', address: '', created: '2017-01-01', wechat_id: '' },
        { id: 1, name: 'Customer P', phone_number: '8006670016', address: '', created: '2017-01-01', wechat_id: '' }
      ]
    return Promise.resolve(customers);
    */
    return this.http.get(this.customersUrl)
      .toPromise()
      .then(response => response.json().data as Customer[])
      .catch(this.handleError);
  }

  getCustomer(id: number): Promise<Customer>
  {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Customer)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
