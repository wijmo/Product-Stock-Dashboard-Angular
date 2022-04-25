import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdjustmentsService {
  currentDate = new Date();
  adjustmentList = [
    {
      id: 1,
      date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 1)).toDateString().slice(4),
      reference: 'AD_1111',
      warehouse: 'Warehouse 2',
      totalProducts: '6',
      details: [
        { product: 'earphones', code: Math.round(Math.random() * 100000000), stock: 60, quantity: 55.00, type: 'Addition' },
        { product: 'Macbook Pro', code: Math.round(Math.random() * 100000000), stock: 36, quantity: 10.00, type: 'Addition' },
        { product: 'sunglasses', code: Math.round(Math.random() * 100000000), stock: 22, quantity: 10.00, type: 'Addition' },
        { product: 'unpaired gray', code: Math.round(Math.random() * 100000000), stock: 75, quantity: 50.00, type: 'Addition' },
        { product: 'StrawBerry', code: Math.round(Math.random() * 100000000), stock: 63, quantity: 40.00, type: 'Addition' },
        { product: 'Orange', code: Math.round(Math.random() * 100000000), stock: 57, quantity: 40.00, type: 'Addition' },
      ]
    },
    {
      id: 2,
      date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 2)).toDateString().slice(4),
      reference: 'AD_1112',
      warehouse: 'Warehouse 1',
      totalProducts: '1',
      details: [
        { product: 'Pinapple', code: Math.round(Math.random() * 100000000), stock: 57, quantity: 40.00, type: 'Addition' },
      ]
    },
    {
      id: 3,
      date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 3)).toDateString().slice(4),
      reference: 'AD_1113',
      warehouse: 'Warehouse 1',
      totalProducts: '6',
      details: [
        { product: 'earphones', code: Math.round(Math.random() * 100000000), stock: 60, quantity: 55.00, type: 'Addition' },
        { product: 'Macbook Pro', code: Math.round(Math.random() * 100000000), stock: 36, quantity: 10.00, type: 'Addition' },
        { product: 'sunglasses', code: Math.round(Math.random() * 100000000), stock: 22, quantity: 10.00, type: 'Addition' },
        { product: 'unpaired gray', code: Math.round(Math.random() * 100000000), stock: 75, quantity: 50.00, type: 'Addition' },
        { product: 'StrawBerry', code: Math.round(Math.random() * 100000000), stock: 63, quantity: 40.00, type: 'Addition' },
        { product: 'Orange', code: Math.round(Math.random() * 100000000), stock: 57, quantity: 40.00, type: 'Addition' },
      ]
    },
    {
      id: 4,
      date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 4)).toDateString().slice(4),
      reference: 'AD_1114',
      warehouse: 'Warehouse 1',
      totalProducts: '3',
      details: [
        { product: 'earphones', code: Math.round(Math.random() * 100000000), stock: 63, quantity: 55.00, type: 'Addition' },
        { product: 'unpaired gray', code: Math.round(Math.random() * 100000000), stock: 79, quantity: 50.00, type: 'Addition' },
        { product: 'Orange', code: Math.round(Math.random() * 100000000), stock: 42, quantity: 40.00, type: 'Addition' },
      ]
    },
  ];

  constructor() { }

  getAdjustmentList() {
    return this.adjustmentList;
  }

  getAdjustmentDetails(val: number) {
    return this.adjustmentList[val-1].details;
  }

  saveAdjustment(val: number, items: []) {
    this.adjustmentList[val-1].details = items;
    this.adjustmentList[val-1].totalProducts = items.length.toString();
  }

  deleteAdjustment(ref: string) {
    var val = 0;
    for(var i = 0; i < this.adjustmentList.length; i++) {
      if(this.adjustmentList[i].reference == ref) {
        this.adjustmentList.splice(i, 1);
        val = i;
      }
    }
    for(var i = val; i < this.adjustmentList.length; i++) {
      this.adjustmentList[i].id = this.adjustmentList[i].id - 1;
    }
  }

  deleteEditAdjustment(val: number, row: number) {
    this.adjustmentList[val-1].details.splice(row, 1);
  }

  addAdjustment(item: any) {
    var referenceNumber = parseInt(this.adjustmentList[this.adjustmentList.length-1].reference.slice(-1)) + 1;
    item.reference = 'AD_111' + referenceNumber.toString();
    this.adjustmentList.push(item);
  }
}
