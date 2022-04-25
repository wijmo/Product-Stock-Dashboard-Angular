import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuotationsService {
  currentDate = new Date();
  quotationsList = [
    { 
      id: 1,
      date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 1)).toDateString().slice(4), 
      reference: 'QT_1111', 
      customer: 'Iseabal Dupey', 
      phone: '171-647-3251',
      email: 'idupey0@ask.com',
      company: 'Bernhard, Bosco and Emard',
      warehouse: 'Warehouse 1', 
      status: 'Sent', 
      grandTotal: 313,
      details: [
        { itemizedCost: 'Service Fee', quantity: 1, unitPrice: 50, amount: 50 },
        { itemizedCost: 'Lemon', quantity: 4, unitPrice: 20, amount: 80 },
        { itemizedCost: 'Banana', quantity: 9, unitPrice: 7, amount: 63 },
        { itemizedCost: 'Strawberry', quantity: 12, unitPrice: 10, amount: 120 },
      ]
    },
    { 
      id: 2,
      date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 2)).toDateString().slice(4), 
      reference: 'QT_1112', 
      customer: 'Caye Vedeniktov', 
      phone: '618-715-2550',
      email: 'cvedeniktov2@e-recht24.de',
      company: 'Crona-Schaden',
      warehouse: 'Warehouse 1', 
      status: 'Pending', 
      grandTotal: 538,
      details: [
        { itemizedCost: 'Service Fee', quantity: 1, unitPrice: 50, amount: 50 },
        { itemizedCost: 'Unpaired Gray', quantity: 10, unitPrice: 25, amount: 250 },
        { itemizedCost: 'Sunglasses', quantity: 7, unitPrice: 34, amount: 238 }
      ]
    },
    { 
      id: 3,
      date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 3)).toDateString().slice(4), 
      reference: 'QT_1113', 
      customer: 'Denny Scriver',
      phone: '814-779-9718',
      email: 'dscriver3@sogou.com', 
      company: 'Mayert Inc',
      warehouse: 'Warehouse 2', 
      status: 'Sent', 
      grandTotal: 3050,
      details: [
        { itemizedCost: 'Service Fee', quantity: 1, unitPrice: 50, amount: 50 },
        { itemizedCost: 'Macbook Pro', quantity: 2, unitPrice: 1500, amount: 3000 },
      ]
    },
    { 
      id: 4,
      date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 2)).toDateString().slice(4), 
      reference: 'QT_1114', 
      customer: 'Viola Aked',
      phone: '337-985-8665',
      email: 'vaked5@tamu.edu', 
      company: 'Cassin Group',
      warehouse: 'Warehouse 2', 
      status: 'Pending', 
      grandTotal: 560,
      details: [
        { itemizedCost: 'Service Fee', quantity: 1, unitPrice: 50, amount: 50 },
        { itemizedCost: 'Earphones', quantity: 5, unitPrice: 34, amount: 170 },
        { itemizedCost: 'Sunglasses', quantity: 10, unitPrice: 34, amount: 340 }
      ]
    },
    { 
      id: 5,
      date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 3)).toDateString().slice(4), 
      reference: 'QT_1115', 
      customer: 'Valaree Hosten',
      phone: '222-920-9287',
      email: 'vhosten6@elpais.com', 
      company: 'Lang Inc',
      warehouse: 'Warehouse 1', 
      status: 'Sent', 
      grandTotal: 1012,
      details: [
        { itemizedCost: 'Service Fee', quantity: 1, unitPrice: 50, amount: 50 },
        { itemizedCost: 'Pinapple', quantity: 5, unitPrice: 20, amount: 100 },
        { itemizedCost: 'Orange', quantity: 14, unitPrice: 23, amount: 322},
        { itemizedCost: 'Lemon', quantity: 12, unitPrice: 20, amount: 240 },
        { itemizedCost: 'Avocado', quantity: 20, unitPrice: 15, amount: 300 }
      ]
    }
  ];

  constructor() { }

  getQuotationsList() {
    return this.quotationsList;
  }

  deleteQuotation(ref: string) {
    for(var i = 0; i < this.quotationsList.length; i++) {
      if(this.quotationsList[i].reference == ref) {
        this.quotationsList.splice(i, 1);
      }
    }
  }

  getQuotation(val: number) {
    for(var i = 0; i < this.quotationsList.length; i++) {
      if(this.quotationsList[i].id == val) {
        return this.quotationsList[i];
      }
    }
    return this.quotationsList[0];
  }

  getQuotationDetails(val: number) {
    for(var i = 0; i < this.quotationsList.length; i++) {
      if(this.quotationsList[i].id == val) {
        return this.quotationsList[i].details;
      }
    }
    return this.quotationsList[0].details;
  }

  addQuote(item: any) {
    var referenceNumber = parseInt(this.quotationsList[this.quotationsList.length-1].reference.slice(-1)) + 1;
    item.reference = 'QT_111' + referenceNumber.toString();
    this.quotationsList.push(item);
  }
}
