import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { TransferService } from 'src/app/services/transfer.service';
import { Router } from '@angular/router';

import * as wjCore from '@grapecity/wijmo';
import * as wjInput from '@grapecity/wijmo.input';
import * as wjGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-transfer-create',
  templateUrl: './transfer-create.component.html',
  styleUrls: ['./transfer-create.component.css']
})
export class TransferCreateComponent implements OnInit {
  // Gets controls to retrieve data
  @ViewChild('transferGrid') transferGrid: wjGrid.FlexGrid;
  @ViewChild('transferDate') transferDate: wjInput.InputDate;
  @ViewChild('product') product: wjInput.AutoComplete;
  @ViewChild('warehouseFrom') warehouseFrom: wjInput.ComboBox;
  @ViewChild('warehouseTo') warehouseTo: wjInput.ComboBox;
  @ViewChild('quantity') quantity: wjInput.InputNumber;
  warehouses = ['Warehouse 1', 'Warehouse 2'];
  products: wjCore.CollectionView;
  transfers: any;
  transferData = new wjCore.CollectionView();

  // Gets data from service
  constructor(private productsService: ProductsService, private transfersService: TransferService, private router: Router) {
    this.products = new wjCore.CollectionView(productsService.getProductList(), {});
    this.transfers = transfersService.getTransferList();
  }

  ngOnInit(): void {
  }

  // Adds item to transfer grid based on user-entered values
  addNewItem() {
    var newItem = { product: this.product.selectedItem.name, code: this.product.selectedItem.code, quantity: this.quantity.value, subtotal: this.quantity.value * this.product.selectedItem.price };
    this.transferData.sourceCollection.push(newItem);
    this.transferData.refresh();
    for(var i = 0; i < this.transferGrid.columns.length; i++) {
      this.transferGrid.columns[i].width = '*';
    }
    this.transferGrid.columns[3].format = 'c2'
    this.transferGrid.columns[1].format = 'g';
    this.warehouseFrom.isReadOnly = true;
    this.warehouseTo.isReadOnly = true;
  }

  // Saves transfer data
  saveTransfer() {
    var transferDetails = [];
    var total = 0;
    for(var i = 0; i < this.transferData.items.length; i++) {
      transferDetails.push(this.transferData.items[i]);
      total += this.transferData.items[i].subtotal;
    }
    var newTransfer = { id: this.transfers.length + 1, date: this.transferDate.value.toDateString().slice(4), reference: '', fromWarehouse: this.warehouseFrom.selectedValue, toWarehouse: this.warehouseTo.selectedValue, items: this.transferData.items.length, grandTotal: total, status: 'Incomplete', details: transferDetails };
    this.transfersService.addTransfer(newTransfer);
    this.router.navigate(['transfer']);
  }

  cancel() {
    this.router.navigate(['transfer']);
  }

}
