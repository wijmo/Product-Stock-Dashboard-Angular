import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productList = [
    { 
      id: 1, 
      name: 'Pinapple', 
      code: Math.round(Math.random() * 100000000), 
      category: 'Fruits', 
      brand: 'N/D', 
      cost: 15.00, 
      price: 20.00, 
      productUnit: 'kg',
      saleUnit: 'kg',
      purchaseUnit: 'kg',
      quantity: 50, 
      tax: 0.00, 
      stockAlert: 10,
      barcode: 'Code 128',
      taxType: 'Exclusive',
      warehouseOne: 20, 
      warehouseTwo: 30
    },
    { 
      id: 2,
      name: 'Orange',
      code: Math.round(Math.random() * 100000000),
      category: 'Fruits', brand: 'N/D',
      cost: 20.00,
      price: 23.00,
      productUnit: 'pc',
      saleUnit: 'pc',
      purchaseUnit: 'pc',
      quantity: 94,
      tax: 0.01,
      stockAlert: 50,
      barcode: 'Code 128',
      taxType: 'Exclusive',
      warehouseOne: 43,
      warehouseTwo: 51
    },
    {
      id: 3,
      name: 'Strawberry',
      code: Math.round(Math.random() * 100000000),
      category: 'Fruits',
      brand: 'N/D',
      cost: 7.00,
      price: 10.00,
      productUnit: 'kg',
      saleUnit: 'kg',
      purchaseUnit: 'kg',
      quantity: 102,
      tax: 0.03,
      stockAlert: 30,
      barcode: 'Code 128',
      taxType: 'Inclusive',
      warehouseOne: 55,
      warehouseTwo: 47
    },
    {
      id: 4,
      name: 'Unpaired Gray',
      code: Math.round(Math.random() * 100000000),
      category: 'Shoes',
      brand: 'Adidas',
      cost: 20.00,
      price: 25.00,
      productUnit: 'pc',
      saleUnit: 'pc',
      purchaseUnit: 'pc',
      quantity: 102,
      tax: 0.02,
      stockAlert: 25,
      barcode: 'Code 128',
      taxType: 'Inclusive',
      warehouseOne: 40,
      warehouseTwo: 62
    },
    {
      id: 5,
      name: 'Sunglasses',
      code: Math.round(Math.random() * 100000000),
      category: 'Accessories',
      brand: 'N/D',
      cost: 25.00,
      price: 34.00,
      productUnit: 'pc',
      saleUnit: 'pc',
      purchaseUnit: 'pc',
      quantity: 92,
      tax: 0.01,
      stockAlert: 60,
      barcode: 'Code 128',
      taxType: 'Inclusive',
      warehouseOne: 20,
      warehouseTwo: 72
    },
    {
      id: 6,
      name: 'Banana',
      code: Math.round(Math.random() * 100000000),
      category: 'Fruits',
      brand: 'N/D',
      cost: 4.00,
      price: 7.00,
      productUnit: 'kg',
      saleUnit: 'kg',
      purchaseUnit: 'kg',
      quantity: 60,
      tax: 0.00,
      stockAlert: 20,
      barcode: 'Code 128',
      taxType: 'Exclusive',
      warehouseOne: 10,
      warehouseTwo: 50
    },
    {
      id: 7,
      name: 'Macbook Pro',
      code: Math.round(Math.random() * 100000000),
      category: 'Computers',
      brand: 'Apple',
      cost: 900.00,
      price: 1500.00,
      productUnit: 'pc',
      saleUnit: 'pc',
      purchaseUnit: 'pc',
      quantity: 41,
      tax: 0.03,
      stockAlert: 40,
      barcode: 'Code 128',
      taxType: 'Exclusive',
      warehouseOne: 15,
      warehouseTwo: 26
    },
    {
      id: 8,
      name: 'Earphones',
      code: Math.round(Math.random() * 100000000),
      category: 'Computers',
      brand: 'N/D',
      cost: 26.00,
      price: 34.00,
      productUnit: 'pc',
      saleUnit: 'pc',
      purchaseUnit: 'pc',
      quantity: 101,
      tax: 0.01,
      stockAlert: 80,
      barcode: 'Code 128',
      taxType: 'Exclusive',
      warehouseOne: 43,
      warehouseTwo: 58
    },
    {
      id: 9,
      name: 'Lemon',
      code: Math.round(Math.random() * 100000000),
      category: 'Fruits',
      brand: 'N/D',
      cost: 15.00,
      price: 20.00,
      productUnit: 'kg',
      saleUnit: 'kg',
      purchaseUnit: 'kg',
      quantity: 64,
      tax: 0.02,
      stockAlert: 50,
      barcode: 'Code 128',
      taxType: 'Inclusive',
      warehouseOne: 24,
      warehouseTwo: 40
    },
    {
      id: 10,
      name: 'Avocados',
      code: Math.round(Math.random() * 100000000),
      category: 'Fruits',
      brand: 'N/D',
      cost: 13.00,
      price: 15.00,
      productUnit: 'kg',
      saleUnit: 'kg',
      purchaseUnit: 'kg',
      quantity: 100,
      tax: 0.04,
      stockAlert: 50,
      barcode: 'Code 128',
      taxType: 'Exclusive',
      warehouseOne: 67,
      warehouseTwo: 33
    }
  ];
  categoryList = ['Fruits', 'Shoes', 'Accessories', 'Computers'];
  brandList = ['N/D', 'Adidas', 'Apple'];
  barcodeList = ['Code 128', 'Code 39', 'EAN8', 'EAN13', 'UPC'];
  unitList = ['kg', 'm', 'pc'];
  taxTypeList = ['Exclusive', 'Inclusive'];

  constructor() { }

  getProductList() {
    return this.productList;
  }

  getCategoryList() {
    return this.categoryList;
  }

  getBrandList() {
    return this.brandList;
  }

  getBarcodeList() {
    return this.barcodeList;
  }

  getUnitList() {
    return this.unitList;
  }
  
  getTaxTypeList() {
    return this.taxTypeList;
  }

  getProduct(val: number) {
    for(var i = 0; i < this.productList.length; i++) {
      if(this.productList[i].id == val) {
        return this.productList[i];
      }
    }
    return this.productList[0];
  }

  saveNewProduct(val: any) {
    this.productList.push(val);
  }

  updateProduct(id: number, val: any) {
    this.productList[id - 1] = val;
  }

  deleteProduct(name: string) {
    for(var i = 0; i < this.productList.length; i++) {
      if(this.productList[i].name == name) {
        this.productList.splice(i, 1);
      }
    }
  }
}
