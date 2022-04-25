import { Component, OnInit, ViewChild } from '@angular/core';

import * as wjCore from '@grapecity/wijmo';
import * as wjInput from '@grapecity/wijmo.input';
import * as wjGrid from '@grapecity/wijmo.grid';
import { ProductsService } from 'src/app/services/products.service';
import { QuotationsService } from 'src/app/services/quotations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotation-create',
  templateUrl: './quotation-create.component.html',
  styleUrls: ['./quotation-create.component.css']
})
export class QuotationCreateComponent implements OnInit {
  @ViewChild('quoteGrid') transferGrid: wjGrid.FlexGrid;
  @ViewChild('customer') customer: wjInput.InputMask;
  @ViewChild('phone') phone: wjInput.InputMask;
  @ViewChild('email') email: wjInput.InputMask;
  @ViewChild('company') company: wjInput.InputMask;
  @ViewChild('warehouse') warehouse: wjInput.ComboBox;
  @ViewChild('status') status: wjInput.ComboBox;
  @ViewChild('product') product: wjInput.ComboBox;
  @ViewChild('quantity') quantity: wjInput.InputNumber;
  data = [
    { itemizedCost: 'Service Fee', quantity: 1, unitPrice: 50, amount: 50 }
  ];
  quoteData = new wjCore.CollectionView(this.data);

  warehouses = ['Warehouse 1', 'Warehouse 2'];
  statuses = ['Sent', 'Pending', 'Complete'];
  products: any[];
  quotations: any[];
  currentDate = new Date();

  constructor(private productsService: ProductsService, private quotationsService: QuotationsService, private router: Router) {
    this.products = productsService.getProductList();
    this.quotations = quotationsService.getQuotationsList();
  }

  ngOnInit(): void {
  }

  addNewItem() {
    var newItem = { itemizedCost: this.product.selectedItem.name, quantity: this.quantity.value, unitPrice: this.getUnitPrice(this.product.selectedItem.name), amount: this.getTotalValue(this.product.selectedItem.name)}
    this.quoteData.items.push(newItem);
    this.quoteData.refresh();
  }

  getUnitPrice(name: string) {
    for(var i = 0; i < this.products.length; i++) {
      if(name == this.products[i].name) {
        return this.products[i].price;
      }
    }
    return 0;
  }

  getTotalValue(name: string) {
    for(var i = 0; i < this.products.length; i++) {
      if(name == this.products[i].name) {
        return this.quantity.value * this.products[i].price;
      }
    }
    return 0;
  }

  getGrandTotal(item: any) {
    var grandTotal = 0;
    for(var i = 0; i < item.length; i++) {
      grandTotal += item[i].amount;
    }
    return grandTotal;
  }

  saveQuote() {
    var quoteDetails = this.quoteData.items;
    var newQuote = {
      id: this.quotations.length + 1,
      date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 2)).toDateString().slice(4),
      reference: '',
      customer: this.customer.value,
      phone: this.phone.value,
      email: this.email.value,
      company: this.company.value,
      warehouse: this.warehouse.selectedValue,
      status: this.status.selectedValue,
      grandTotal: this.getGrandTotal(quoteDetails),
      details: quoteDetails
    }
    this.quotationsService.addQuote(newQuote);
    this.router.navigate(['quotations']);
  }

  cancel() {
    this.router.navigate(['quotations']);
  }

}
