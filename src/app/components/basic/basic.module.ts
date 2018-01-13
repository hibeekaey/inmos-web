import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './basic.component';
import {RouterModule} from '@angular/router';
import {BasicRoutes} from './basic.routing';
import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import { ButtonComponent } from './button/button.component';
import { TypographyComponent } from './typography/typography.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BasicRoutes),
    SharedModule
  ],
  declarations: [
    BasicComponent,
    BreadcrumbComponent,
    ButtonComponent,
    TypographyComponent
  ]
})
export class BasicModule { }
