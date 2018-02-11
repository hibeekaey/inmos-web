import {Component, OnInit} from '@angular/core';
import {VendorService} from '../../service/vendor.service';
import {Scheduler} from 'rxjs/Rx';
import {VendorVO} from '../../data/remote/vo/VendorVO';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.template.html',
  styleUrls: ['../../../assets/css/forms.css']
})
export class VendorComponent implements OnInit {

  constructor(private vendorService: VendorService) {
    this.vendors = [];
    this.newVendor = new VendorVO();
    this.updateItem = new VendorVO();
  }

  newVendor: VendorVO;
  updateItem: VendorVO;
  vendors: Array<VendorVO>;
  selectedVendor: VendorVO;

  ngOnInit(): void {
    this.refreshData();
  }

  onSubmit() {
    this.vendorService.createVendor(this.newVendor)
      .subscribe(() => {
        this.newVendor = new VendorVO();

        alert('Vendor successfully created');
        this.refreshData();
      }, error => console.log(error));
  }

  refreshData() {
    this.vendorService.retrieveVendors()
      .subscribeOn(Scheduler.async)
      .subscribe(res => {
        res = res.json();
        const data = res.data;
        this.vendors = [];

        console.log(res);

        data.forEach(vendorObject => {
          const vendor = new VendorVO();
          vendor.vendorName = vendorObject.vendor_name;
          vendor.vendorId = vendorObject.vendor_id;
          vendor.contact = vendorObject.contact;
          this.vendors.push(vendor);
        });

      }, error => console.log(error));
  }

  setSelectedVendor(vendor) {
    this.selectedVendor = vendor;
  }

  isSelected(vendor): boolean {
    return this.selectedVendor === vendor;
  }

  actionsDisabled() {
    return this.selectedVendor == null;
  }

  updateVendor(vendor: VendorVO) {
    this.vendorService.updateVendor(vendor)
      .subscribeOn(Scheduler.async)
      .subscribe(() => {
        this.showVendorUpdateSuccess();
      }, error => console.log(error));
  }

  removeVendor(vendorId: string) {
    this.vendorService.deleteVendor(vendorId)
      .subscribeOn(Scheduler.async)
      .subscribe(() => {
        this.showVendorDeleteSuccess();
        this.refreshData();
      }, error => console.log(error));
  }

  showVendorDeleteSuccess() {
    alert('Vendor successfully deleted');
  }

  showVendorUpdateSuccess() {
    alert('Vendor successfully updated');
  }
}
