import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';
import {LoginService} from '../../service/login.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class LoginModule {}
