import {Observable} from 'rxjs/observable';
import {Injectable} from '@angular/core';
import {Http, RequestMethod, RequestOptions, Headers} from '@angular/http';
import {VendorVO} from '../vo/VendorVO';

@Injectable()
export class ApiService {

  constructor(private http: Http) {
    this.serverUrl = 'https://inmos-api.herokuapp.com';
  }

  serverUrl: String;

  /**
   * Used to login a user
   * @param {String} storeId
   * @param {String} password
   * @returns {Observable<any>}
   */
  loginUser(storeId: String, password: String): Observable<any> {
    console.log(storeId, password);

    return this.sendPost(
      `${this.serverUrl}/auth/login`,
      { store_id: storeId, password: password});
  }

  listStock(): Observable<any> {
    return this.sendGet(`${this.serverUrl}/stock/all`, {});
  }

  updateStockItem(stockId: string, stockName: string, category: string) {
    return this.http.put(`${this.serverUrl}/stock/${stockId}`, {
      stock_name: stockName,
      category: category
    }, {withCredentials: true });
  }

  listVendors(): Observable<any> {
    return this.sendGet(`${this.serverUrl}/vendor/list`, {});
  }

  supplyVendor(vendorId: string, stockId: string, quantity: number, costPrice: number): Observable<any> {
    return this.sendPost(`${this.serverUrl}/stock/supply`, {
      vendor_id: vendorId,
      stock_id: stockId,
      quantity: quantity,
      cost_price: costPrice
    });
  }

  /**
   * Used to create a new stock item
   * @param {string} name - name of item to be created
   * @param {string} category - item category
   * @returns {Observable<any>}
   */
  createStockItem(name: string, category: string): Observable<any> {
    return this.sendPost(`${this.serverUrl}/stock/new`,
      { stock_name: name, category: category});
  }

  sellItem(stockId: string, quantity: number, sellingPrice: number): Observable<any> {
    return this.sendPost(`${this.serverUrl}/stock/sell`, {
      stock_id: stockId, quantity: quantity, selling_price: sellingPrice});
  }

  supplyItem(stockId: string, vendorId: string, quantity: number, costPrice: number): Observable<any> {
    return this.sendPost(`${this.serverUrl}/stock/supply`, {
      stock_id: stockId, vendor_id: vendorId, quantity: quantity, cost_price: costPrice});
  }

  removeStockItem(stockId: string): Observable<any> {
    return this.http.delete(`${this.serverUrl}/stock/${stockId}`, { withCredentials: true });
  }

  createVendor(vendorName: string, email: string, phone: string): Observable<any> {
    return this.sendPost(`${this.serverUrl}/vendor/new`, {
      vendor_name: vendorName,
      contact: {
        email: [email],
        phone: [phone]
      }
    });
  }

  removeVendor(vendorId: string): Observable<any> {
    return this.http.delete(`${this.serverUrl}/vendor/${vendorId}`, { withCredentials: true });
  }

  updateVendor(vendorId: string, vendorName: string, email: string, phone: string): Observable<any> {
    return this.http.put(`${this.serverUrl}/vendor/${vendorId}`, {
      vendor_name: vendorName,
      contact: {
        email: [email],
        phone: [phone]
      }
    }, { withCredentials: true });
  }

  /**
   * Used to send a post request
   * @param url
   * @param params
   */
  private sendPost(url: string, params: any): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers, withCredentials: true });
    console.log(params);

    return this.http.post(url, params, { withCredentials: true })
      .catch(this.handleError);
  }

  /**
   * Used to send a get request
   * @param url
   * @param queryParams - query string parameters
   */
  private sendGet(url: string, queryParams: {[key: string]: string}): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    let query = '';
    let count = 0;

    for (const key in queryParams) {
      count += 1;
      query += `${key}=${queryParams[key]}`;

      if (count < Object.keys(queryParams).length) {
        query += '&';
      }
    }

    return this.http.get(`${url}?${query}`, { withCredentials: true })
      .catch(this.handleError);
  }

  /**
   * Used to handle errors occurring during code retrievals
   * @param error
   * @return {any}
   */
  private handleError(error: Response | any) {
    console.log(error.json());
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }
}
