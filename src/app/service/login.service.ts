import {Injectable} from '@angular/core';
import {ApiService} from '../data/remote/api/ApiService';
import {LoginVO} from '../data/remote/vo/LoginVO';
import {Scheduler} from 'rxjs/Rx';
import {OnLoginListener} from '../listener/login.listener';

@Injectable()
export class LoginService {

  constructor(private service: ApiService) {}

  attemptLogin(credentials: LoginVO, listener: OnLoginListener) {
    this.service.loginUser(credentials.storeId, credentials.password)
      .subscribeOn(Scheduler.async)
      .subscribe(res => {
        console.log(res);
        listener.onLoginSuccess();

      }, error => {
        console.log(error);
        listener.onLoginError();
      });
  }
}
