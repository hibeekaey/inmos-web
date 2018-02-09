import {Injectable} from '@angular/core';

@Injectable()
export class Preferences {

  get isLoggedIn(): Boolean {
    const loginStatus: string = localStorage.getItem('login_status');

    return loginStatus === 'true';
  }

  setLoginStatus(status: string) {
    localStorage.setItem('login_status', status);
  }
}
