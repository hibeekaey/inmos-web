import {NgModule} from '@angular/core';
import {InventoryComponent} from './inventory.component';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AdminShellComponent} from './admin-shell.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule} from '@angular/router';
import {TitleComponent} from '../../layouts/admin/title/title.component';
import {InventoryService} from '../../service/inventory.service';
import {VendorComponent} from './vendor.component';
import {VendorService} from '../../service/vendor.service';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    SharedModule,
    RouterModule
  ],
  declarations: [
    InventoryComponent,
    VendorComponent
  ],
  providers: [
    InventoryService,
    VendorService
  ]
})
export class AdminModule {

}
