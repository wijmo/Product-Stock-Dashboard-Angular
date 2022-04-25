import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {
  currentDate = new Date();
  expenseList = [
    { id: 1, date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 1)).toDateString().slice(4), reference: 'EXP_1111', details: 'Petrol', amount: 50, category: 'Petrol', warehouse: 'Warehouse 1' },
    { id: 2, date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 2)).toDateString().slice(4), reference: 'EXP_1112', details: 'Office Supplies', category: 'Office Expenses & Postage', amount: 200, warehouse: 'Warehouse 1' },
    { id: 3, date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 3)).toDateString().slice(4), reference: 'EXP_1113', details: 'Petrol', category: 'Petrol', amount: 100, warehouse: 'Warehouse 2' },
  ];

  constructor() { }

  getExpenseList() {
    return this.expenseList;
  }

  getExpense(val: number) {
    return this.expenseList[val];
  }

  setExpense(expense: any, val: number) {
    console.log(expense);
    console.log(val);
    this.expenseList[val-1].date = expense.date;
    this.expenseList[val-1].amount = expense.amount;
    this.expenseList[val-1].category = expense.category;
    this.expenseList[val-1].warehouse = expense.warehouse
    this.expenseList[val-1].details = expense.details
  }

  createExpense(expense: any) {
    var referenceNumber = parseInt(this.expenseList[this.expenseList.length-1].reference.slice(-1)) + 1;
    expense.reference = 'EXP_111' + referenceNumber.toString();
    expense.id = this.expenseList.length + 1;
    this.expenseList.push(expense);
  }

  deleteExpense(ref: string) {
    for(var i = 0; i < this.expenseList.length; i++) {
      if(this.expenseList[i].reference == ref) {
        this.expenseList.splice(i, 1);
      }
    }
  }
}
