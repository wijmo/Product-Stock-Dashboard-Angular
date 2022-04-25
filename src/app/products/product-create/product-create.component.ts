import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

import * as wjInput from '@grapecity/wijmo.input';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  @ViewChild('name') name: wjInput.InputMask;
  @ViewChild('code') code: wjInput.InputNumber;
  @ViewChild('category') category: wjInput.ComboBox;
  @ViewChild('brand') brand: wjInput.ComboBox;
  @ViewChild('barcode') barcode: wjInput.ComboBox;
  @ViewChild('cost') cost: wjInput.InputNumber;
  @ViewChild('price') price: wjInput.InputNumber;
  @ViewChild('productUnit') productUnit: wjInput.ComboBox;
  @ViewChild('saleUnit') saleUnit: wjInput.ComboBox;
  @ViewChild('purchaseUnit') purchaseUnit: wjInput.ComboBox;
  @ViewChild('stockAlert') stockAlert: wjInput.InputNumber;
  @ViewChild('tax') tax: wjInput.InputNumber;
  @ViewChild('taxTypeSelection') taxTypeSelection: wjInput.ComboBox;

  categories: any;
  brands: any;
  barcodes: any;
  units: any;
  taxType: any;
  productListLength: any;

  constructor(private router: Router, private productsServive: ProductsService) { }

  ngOnInit(): void {
    this.categories = this.productsServive.getCategoryList();
    this.brands = this.productsServive.getBrandList();
    this.barcodes = this.productsServive.getBarcodeList();
    this.units = this.productsServive.getUnitList();
    this.taxType = this.productsServive.getTaxTypeList();
    this.productListLength = this.productsServive.getProductList().length;
  }

  saveNewProduct() {
    var newProduct = {
      id: this.productListLength + 1,
      name: this.name.value,
      code: this.code.value,
      category: this.category.selectedValue,
      brand: this.brand.selectedValue,
      barcode: this.barcode.selectedValue,
      quantity: Math.round(Math.random() * 10),
      cost: this.cost.value,
      price: this.price.value,
      productUnit: this.productUnit.selectedValue,
      saleUnit: this.saleUnit.selectedValue,
      purchaseUnit: this.purchaseUnit.selectedValue,
      stockAlert: this.stockAlert.value,
      tax: this.tax.value,
      taxType: this.taxTypeSelection.selectedValue,
      warehouseOne: Math.round(Math.random() * 10),
      warehouseTwo: Math.round(Math.random() * 10),
    };
    this.productsServive.saveNewProduct(newProduct);
    this.router.navigate(['products']);
  }

  cancel() {
    this.router.navigate(['products']);
  }

}
