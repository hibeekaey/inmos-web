import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { MenuItems } from './menu-items/menu-items';
import { AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective } from './accordion';
import { ToggleFullscreenDirective } from './fullscreen/toggle-fullscreen.directive';
import {CardRefreshDirective} from './card/card-refresh.directive';
import {CardToggleDirective} from './card/card-toggle.directive';
import { CardComponent } from './card/card.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ParentRemoveDirective} from './elements/parent-remove.directive';
import {PaginationModule} from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SpinnerComponent} from '../spinner/spinner.component';
import {ScrollModule} from '../scroll/scroll.module';
import {ToastyModule} from 'ng2-toasty';
import {SimpleNotificationsModule} from 'angular2-notifications';
import {ClickOutsideModule} from 'ng-click-outside';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      NgbModule.forRoot(),
      PaginationModule.forRoot(),
      ScrollModule,
      ToastyModule.forRoot(),
      SimpleNotificationsModule.forRoot(),
      ClickOutsideModule
  ],
  declarations: [
      AccordionAnchorDirective,
      AccordionLinkDirective,
      AccordionDirective,
      ToggleFullscreenDirective,
      CardRefreshDirective,
      CardToggleDirective,
      ParentRemoveDirective,
      CardComponent,
      SpinnerComponent
  ],
  exports: [
      AccordionAnchorDirective,
      AccordionLinkDirective,
      AccordionDirective,
      ToggleFullscreenDirective,
      CardRefreshDirective,
      CardToggleDirective,
      ParentRemoveDirective,
      CardComponent,
      SpinnerComponent,
      NgbModule,
      PaginationModule,
      FormsModule,
      ReactiveFormsModule,
      ScrollModule,
      ToastyModule,
      SimpleNotificationsModule,
      ClickOutsideModule
  ],
  providers: [
      MenuItems
  ]
})
export class SharedModule { }
