import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InventoryService} from '../../service/inventory.service';
import {Scheduler} from 'rxjs/Rx';
import {AddStockVO} from '../../data/remote/vo/AddStockVO';
import {AnonymousSubscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {SellItemVO} from '../../data/remote/vo/SellItemVO';
import {SupplyItemVO} from '../../data/remote/vo/SupplyItemVO';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.template.html',
  styleUrls: ['../../../assets/css/forms.css']
})
export class InventoryComponent implements OnInit {

  constructor(private inventoryService: InventoryService, private router: Router) {
    this.newStockItem = new AddStockVO();
    this.sellingItem = new SellItemVO();
    this.supplyItem = new SupplyItemVO();
  }

  selectedItem: any = null;
  newStockItem: AddStockVO;
  sellingItem: SellItemVO;
  supplyItem: SupplyItemVO;
  stockItems: Array<any> = [];
  timerSubscription: AnonymousSubscription;

  ngOnInit() {
    this.refreshData();
    this.subscribeToData();
  }

  onSubmit() {
    this.inventoryService.addStockItem(this.newStockItem)
      .subscribeOn(Scheduler.asap)
      .observeOn(Scheduler.asap)
      .subscribe(() => {
        this.newStockItem.stockName = null;
        this.newStockItem.category = null;

        this.refreshData();
      }, error => console.log(error));
  }

  subscribeToData() {
    this.timerSubscription = Observable.timer(2000)
      .subscribe(() => this.refreshData());
  }

  refreshData() {
    this.inventoryService.retrieveStock()
      .subscribe(res => {
        res = res.json();
        console.log(res);

        this.stockItems = [];

        res.data.forEach(item => {
          this.stockItems.push(item);
        });

      }, error => console.log(error));
  }

  productButtonsDisabled() {
    return this.selectedItem == null;
  }

  setSelectedItem(item: any) {
    this.selectedItem = item;
    this.sellingItem.stockId = item.stock_id;
    this.supplyItem.stockId = item.stock_id;
    console.log('Item set');
  }

  isSelected(item: any): boolean {
    return this.selectedItem === item;
  }

  submitSellItemForm() {
    this.inventoryService.sellItem(this.sellingItem)
      .subscribe(res => {
        res = res.json();
        console.log(res);

        this.displayTransactionCompletionMessage();
      }, error => console.log(error));
  }

  submitSupplyItemForm() {
    this.inventoryService.supplyItem(this.supplyItem)
      .subscribe(res => {
        res = res.json();
        console.log(res);

        this.displaySupplyCompletionMessage();
      }, error => console.log(error));
  }

  removeItem(stockId: string) {
    this.inventoryService.removeItem(stockId)
      .subscribe(() => {
        this.refreshData();
        this.displayRemoveCompletionMessage();
      }, error => console.log(error));
  }

  displayTransactionCompletionMessage() {
    alert('Item sold');
  }

  displaySupplyCompletionMessage() {
    alert('Supply action completed');
  }

  displayRemoveCompletionMessage() {
    alert('Item successfully deleted');
  }
}
