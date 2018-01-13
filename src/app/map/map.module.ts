import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { GoogleComponent } from './google/google.component';
import {RouterModule} from '@angular/router';
import {MapRoutes} from './map.routing';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MapRoutes),
    SharedModule
  ],
  declarations: [MapComponent, GoogleComponent]
})
export class MapModule { }
