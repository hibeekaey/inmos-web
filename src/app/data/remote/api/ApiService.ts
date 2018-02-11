import {Observable} from 'rxjs/observable';
import {Injectable} from '@angular/core';
import {Http, RequestMethod, RequestOptions, Headers} from '@angular/http';

@Injectable()
export class ApiService {

  constructor(private http: Http) {
    this.serverUrl = 'http://localhost:4000';
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
