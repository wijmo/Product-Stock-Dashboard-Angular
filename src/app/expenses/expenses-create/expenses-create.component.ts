import { Component, OnInit, ViewChild } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { ActivatedRoute, Router } from '@angular/router';

import * as wjInput from '@grapecity/wijmo.input';

@Component({
  selector: 'app-expenses-create',
  templateUrl: './expenses-create.component.html',
  styleUrls: ['./expenses-create.component.css']
})
export class ExpensesCreateComponent implements OnInit {
  // Gets the controls to retrieve user-entered data
  @ViewChild('expenseCalendar') expenseCalender: wjInput.InputDate;
  @ViewChild('warehouse') warehouse: wjInput.ComboBox;
  @ViewChild('expenseCategory') expenseCategory: wjInput.ComboBox;
  @ViewChild('amount') amount: wjInput.InputNumber;
  @ViewChild('details') details: wjInput.InputMask;

  // Arrays to populate controls
  warehouses = ['Warehouse 1', 'Warehouse 2'];
  expenseCategories = ['Employee Benefits', 'Petrol', 'Office Expenses & Postage', 'Meals & Entertainment', 'Other'];

  constructor(private expensesService: ExpensesService, private router: Router) {}

  ngOnInit(): void {
  }

  // Saves user-entered data and routes back to expenses
  submitExpenseSave() {
    var newExpense = { id: 0, date: this.expenseCalender.value.toDateString().slice(4), reference: '', details: this.details.value, warehouse: this.warehouse.selectedValue, category: this.expenseCategory.selectedValue, amount: this.amount.value }
    this.expensesService.createExpense(newExpense);
    this.router.navigate(['expenses']);
  }

  cancel() {
    this.router.navigate(['expenses']);
  }

}
