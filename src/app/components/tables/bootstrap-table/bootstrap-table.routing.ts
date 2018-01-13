import {Routes} from '@angular/router';
import {BasicComponent} from './basic/basic.component';

export const BootstrapTableRoutes: Routes = [
  {
    path: '',
    component: BasicComponent,
    data: {
      breadcrumb: 'Basic Table',
      status: true
    }
  }
]
