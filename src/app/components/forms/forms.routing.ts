import {Routes} from '@angular/router';
import {BasicElementsComponent} from './basic-elements/basic-elements.component';

export const FormsRoutes: Routes = [
  {
    path: '',
    component: BasicElementsComponent,
    data: {
      breadcrumb: 'Form Components',
      status: true
    }
  }
]
