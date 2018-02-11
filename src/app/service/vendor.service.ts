import {Injectable} from '@angular/core';
import {ApiService} from '../data/remote/api/ApiService';
import {Observable} from 'rxjs/Observable';
import {VendorVO} from '../data/remote/vo/VendorVO';

@Injectable()
export class VendorService {

  constructor(private service: ApiService) {}

  retrieveVendors(): Observable<any> {
    return this.service.listVendors();
  }

  createVendor(vendor: VendorVO): Observable<any> {
    return this.service.createVendor(vendor.vendorName, vendor.email, vendor.phone);
  }

  deleteVendor(vendorId: string): Observable<any> {
    return this.service.removeVendor(vendorId);
  }

  updateVendor(vendor: VendorVO): Observable<any> {
    return this.service.updateVendor(vendor.vendorId, vendor.vendorName, vendor.email, vendor.phone);
  }
}
