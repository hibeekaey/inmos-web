import {Routes} from '@angular/router';
import {GoogleComponent} from './google/google.component';

export const MapRoutes: Routes = [
    {
        path: '',
        component: GoogleComponent,
        data: {
            breadcrumb: 'Map',
            status: false
        }
    }
]
