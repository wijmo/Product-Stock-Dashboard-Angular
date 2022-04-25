import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  currentDate = new Date();
  transferList = [
    { 
      id: 1,
      date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 1)).toDateString().slice(4),
      reference: 'TR_1111',
      fromWarehouse: 'Warehouse 2',
      toWarehouse: 'Warehouse 1',
      items: '10',
      grandTotal: 15000,
      status: 'Completed',
      details: [
        { product: 'Macbook Pro', code: Math.round(Math.random() * 100000000), quantity: 10.00, subtotal: 15000 }
      ]
    },
    {
      id: 2,
      date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 2)).toDateString().slice(4),
      reference: 'TR_1112',
      fromWarehouse: 'Warehouse 1',
      toWarehouse: 'Warehouse 2',
      items: '2',
      grandTotal: 52,
      status: 'Completed',
      details: [
        { product: 'Unpaired Gray', code: Math.round(Math.random() * 100000000), quantity: 1.00, subtotal: 22 },
        { product: 'Earphones', code: Math.round(Math.random() * 100000000), quantity: 1.00, subtotal: 30 }
      ]
    },
    {
      id: 3,
      date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 3)).toDateString().slice(4),
      reference: 'TR_1113',
      fromWarehouse: 'Warehouse 1',
      toWarehouse: 'Warehouse 2',
      items: '31',
      grandTotal: 568,
      status: 'Completed',
      details: [
        { product: 'Sunglasses', code: Math.round(Math.random() * 100000000), quantity: 6.00, subtotal: 168 },
        { product: 'Pinapple', code: Math.round(Math.random() * 100000000), quantity: 25.00, subtotal: 400 }
      ]
    },
    {
      id: 4,
      date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 4)).toDateString().slice(4),
      reference: 'TR_1114',
      fromWarehouse: 'Warehouse 2',
      toWarehouse: 'Warehouse 1',
      items: '45',
      grandTotal: 860,
      status: 'Incomplete',
      details: [
        { product: 'Lemon', code: Math.round(Math.random() * 100000000), quantity: 30.00, subtotal: 540 },
        { product: 'Strawberry', code: Math.round(Math.random() * 100000000), quantity: 5.00, subtotal: 40 },
        { product: 'Sunglasses', code: Math.round(Math.random() * 100000000), quantity: 10.00, subtotal: 280 }
      ]
    },
    {
      id: 5,
      date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 4)).toDateString().slice(4),
      reference: 'TR_1115',
      fromWarehouse: 'Warehouse 2',
      toWarehouse: 'Warehouse 1',
      items: '67',
      grandTotal: 783,
      status: 'Completed',
      details: [
        { product: 'Avocado', code: Math.round(Math.random() * 100000000), quantity: 50.00, subtotal: 600 },
        { product: 'Banana', code: Math.round(Math.random() * 100000000), quantity: 10.00, subtotal: 50 },
        { product: 'Orange', code: Math.round(Math.random() * 100000000), quantity: 7.00, subtotal: 133 }
      ]
    }
  ];

  constructor() { }

  getTransferList() {
    return this.transferList;
  }

  getTransferDetails(val: number) {
    return this.transferList[val-1].details;
  }

  saveTransfer(val: number, items: []) {
    var newTotal = 0, newItems = 0;
    this.transferList[val-1].details = items;
    for(var i = 0; i < this.transferList[val-1].details.length; i++) {
      newTotal += this.transferList[val-1].details[i].subtotal;
      newItems += this.transferList[val-1].details[i].quantity;
    }
    this.transferList[val-1].grandTotal = newTotal;
    this.transferList[val-1].items = newItems.toString();
  }

  deleteTransfer(ref: string) {
    var val = 0;
    for(var i = 0; i < this.transferList.length; i++) {
      if(this.transferList[i].reference == ref) {
        this.transferList.splice(i, 1);
        val = i;
      }
    }
    for(var i = val; i < this.transferList.length; i++) {
      this.transferList[i].id = this.transferList[i].id - 1;
    }
  }

  deleteEditTransfer(val: number, row: number) {
    this.transferList[val-1].details.splice(row, 1);
  }

  addTransfer(item: any) {
    var referenceNumber = parseInt(this.transferList[this.transferList.length-1].reference.slice(-1)) + 1;
    item.reference = 'TR_111' + referenceNumber.toString();
    this.transferList.push(item);
  }
}
