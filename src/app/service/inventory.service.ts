import {Injectable} from '@angular/core';
import {ApiService} from '../data/remote/api/ApiService';
import {Observable} from 'rxjs/Observable';
import {AddStockVO} from '../data/remote/vo/AddStockVO';
import {SellItemVO} from '../data/remote/vo/SellItemVO';
import {SupplyItemVO} from '../data/remote/vo/SupplyItemVO';
import {UpdateStockItemVO} from '../data/remote/vo/UpdateStockItemVO';

@Injectable()
export class InventoryService {

  constructor(private service: ApiService) {}

  retrieveStock(): Observable<any> {
    return this.service.listStock();
  }

  addStockItem(stockItem: AddStockVO): Observable<any> {
    return this.service.createStockItem(stockItem.stockName, stockItem.category);
  }

  sellItem(item: SellItemVO): Observable<any> {
    return this.service.sellItem(item.stockId, item.quantity, item.sellingPrice);
  }

  supplyItem(item: SupplyItemVO): Observable<any> {
    return this.service.supplyItem(item.stockId, item.vendorId, item.quantity, item.costPrice);
  }

  removeItem(stockId: string): Observable<any> {
    return this.service.removeStockItem(stockId);
  }

  updateItem(stockItem: UpdateStockItemVO): Observable<any> {
    return this.service.updateStockItem(stockItem.stockId, stockItem.stockName, stockItem.category);
  }
}
