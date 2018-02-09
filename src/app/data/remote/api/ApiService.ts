import {Observable} from 'rxjs/observable';
import {Injectable} from '@angular/core';
import {Http, RequestMethod, RequestOptions, Headers} from '@angular/http';

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
    return this.sendPost(
      `${this.serverUrl}/auth/login`,
      { store_id: storeId, password: password});
  }

  /**
   * Used to send a post request
   * @param url
   * @param params
   */
  private sendPost(url: string, params: any): Observable<any> {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Post });

    return this.http.post(`${url}`, params, options)
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
