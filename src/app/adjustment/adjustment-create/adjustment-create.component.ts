import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { AdjustmentsService } from 'src/app/services/adjustments.service';
import { Router } from '@angular/router';

import * as wjCore from '@grapecity/wijmo';
import * as wjInput from '@grapecity/wijmo.input';
import * as wjGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-adjustment-create',
  templateUrl: './adjustment-create.component.html',
  styleUrls: ['./adjustment-create.component.css']
})
export class AdjustmentCreateComponent implements OnInit {
  // Gets controls to retrieve user-entered data
  @ViewChild('adjustmentGrid') adjustmentGrid: wjGrid.FlexGrid;
  @ViewChild('adjustmentDate') adjustmentDate: wjInput.InputDate;
  @ViewChild('product') product: wjInput.AutoComplete;
  @ViewChild('warehouse') warehouse: wjInput.ComboBox;
  warehouses = ['Warehouse 1', 'Warehouse 2'];
  products: wjCore.CollectionView;
  adjustments: any;
  adjustmentData = new wjCore.CollectionView();

  // Gets data from service
  constructor(private productsService: ProductsService, private adjustmentsService: AdjustmentsService, private router: Router) {
    this.products = new wjCore.CollectionView(productsService.getProductList(), {});
    this.adjustments = adjustmentsService.getAdjustmentList();
  }

  ngOnInit(): void {
  }

  // Adds items to grid
  addNewItem() {
    var newItem = { product: this.product.selectedItem.name, code: this.product.selectedItem.code, stock: Math.round(Math.random() * 100), quantity: this.product.selectedItem.quantity, type: 'Addition' };
    this.adjustmentData.sourceCollection.push(newItem);
    this.adjustmentData.refresh();
    for(var i = 0; i < this.adjustmentGrid.columns.length; i++) {
      this.adjustmentGrid.columns[i].width = '*';
    }
    this.adjustmentGrid.columns[2].visible = false;
    this.adjustmentGrid.columns[1].format = 'g';
    this.warehouse.isReadOnly = true;
  }

  // Saves new adjustment to service and routes back to adjustments
  saveAdjustment() {
    var adjustmentDetails = [];
    for(var i = 0; i < this.adjustmentData.items.length; i++) {
      adjustmentDetails.push(this.adjustmentData.items[i]);
    }
    var newAdjustment = { id: this.adjustments.length + 1, date: this.adjustmentDate.value.toDateString().slice(4), reference: '', warehouse: this.warehouse.selectedValue, totalProducts: this.adjustmentData.items.length, details: adjustmentDetails };
    this.adjustmentsService.addAdjustment(newAdjustment);
    this.router.navigate(['adjustment']);
  }

  cancel() {
    this.router.navigate(['adjustment']);
  }

}
