import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

import * as wjInput from '@grapecity/wijmo.input';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
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
  @ViewChild('warehouseOne') warehouseOne: wjInput.InputNumber;
  @ViewChild('warehouseTwo') warehouseTwo: wjInput.InputNumber;
  @ViewChild('taxTypeSelection') taxTypeSelection: wjInput.ComboBox;
  
  routeId: any;
  product: any;
  categories: any;
  brands: any;
  barcodes: any;
  units: any;
  taxType: any;

  constructor(private route: ActivatedRoute, private router: Router, private productsServive: ProductsService) { }

  ngOnInit(): void {
    this.routeId = Number(this.route.snapshot.paramMap.get('productId'));
    this.product = this.productsServive.getProduct(this.routeId);
    this.categories = this.productsServive.getCategoryList();
    this.brands = this.productsServive.getBrandList();
    this.barcodes = this.productsServive.getBarcodeList();
    this.units = this.productsServive.getUnitList();
    this.taxType = this.productsServive.getTaxTypeList();
  }

  updateProduct() {
    var updateProduct = {
      id: this.product.id,
      name: this.name.value,
      code: this.code.value,
      category: this.category.selectedValue,
      brand: this.brand.selectedValue,
      barcode: this.barcode.selectedValue,
      cost: this.cost.value,
      price: this.price.value,
      productUnit: this.productUnit.selectedValue,
      saleUnit: this.saleUnit.selectedValue,
      purchaseUnit: this.purchaseUnit.selectedValue,
      stockAlert: this.stockAlert.value,
      tax: this.tax.value,
      quantity: this.warehouseOne.value + this.warehouseTwo.value,
      taxType: this.taxTypeSelection.selectedValue,
      warehouseOne: this.warehouseOne.value,
      warehouseTwo: this.warehouseTwo.value,
    };
    this.productsServive.updateProduct(this.routeId, updateProduct);
    this.router.navigate(['products']);
  }

}
