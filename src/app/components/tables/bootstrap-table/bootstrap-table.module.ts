import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

import {BootstrapTableRoutes} from './bootstrap-table.routing';
import { BootstrapTableComponent } from './bootstrap-table.component';
import { BasicComponent } from './basic/basic.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BootstrapTableRoutes),
    SharedModule
  ],
  declarations: [BootstrapTableComponent, BasicComponent]
})
export class BootstrapTableModule { }
