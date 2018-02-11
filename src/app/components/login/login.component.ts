import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {OnLoginListener} from '../../listener/login.listener';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.template.html',
  styleUrls: ['../../../assets/css/forms.css']
})
export class LoginComponent implements OnLoginListener {

  constructor(private router: Router, private loginService: LoginService) {}

  formData: LoginVO = new LoginVO();

  submitForm() {
    console.log(this.formData.storeId, this.formData.password);
    this.loginService.attemptLogin(this.formData, this);
  }

  onLoginSuccess() {
    this.router.navigate(['/ims']);
    console.log('Login successful');
  }

  onLoginError() {
    console.log('An error occured while login in');
  }

}

class LoginVO {
  storeId: string;
  password: string;
}

