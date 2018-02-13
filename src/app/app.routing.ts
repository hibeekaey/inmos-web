import {Routes} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth/auth-layout.component';
import {LoginComponent} from './components/login/login.component';
import {AdminShellComponent} from './components/admin/admin-shell.component';
import {InventoryComponent} from './components/admin/inventory.component';
import {VendorComponent} from './components/admin/vendor.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'admin',
    component: AdminShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'inventory',
        pathMatch: 'full'
      },
      {
        path: 'inventory',
        component: InventoryComponent,
        pathMatch: 'full'
      },
      {
        path: 'vendors',
        component: VendorComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
  path: 'template',
  component: AdminLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    }, {
      path: 'basic',
      loadChildren: './components/basic/basic.module#BasicModule'
    }, {
      path: 'advance',
      loadChildren: './components/advance/advance.module#AdvanceModule'
    }, {
      path: 'forms',
      loadChildren: './components/forms/forms.module#FormsModule'
    }, {
      path: 'bootstrap-table',
      loadChildren: './components/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
    }, {
      path: 'map',
      loadChildren: './map/map.module#MapModule',
    }, {
      path: 'simple-page',
      loadChildren: './simple-page/simple-page.module#SimplePageModule'
    }
  ]
},  {
  path: '**',
  redirectTo: 'error/404'
}];

// {
//   path: '',
//     component: AuthLayoutComponent,
//   children: [
//   {
//     path: 'authentication',
//     loadChildren: './authentication/authentication.module#AuthenticationModule'
//   }
// ]
// },
