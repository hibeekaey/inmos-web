import {Routes} from '@angular/router';
import {NotificationsComponent} from './notifications/notifications.component';

export const AdvanceRoutes: Routes = [
    {
      path: '',
      component: NotificationsComponent,
      data: {
        breadcrumb: 'Notifications',
        status: true
      }
    }
]
