import { Component, OnInit, ViewChild } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';
import { ActivatedRoute, Router } from '@angular/router';

import * as wjInput from '@grapecity/wijmo.input';

@Component({
  selector: 'app-expenses-edit',
  templateUrl: './expenses-edit.component.html',
  styleUrls: ['./expenses-edit.component.css']
})
export class ExpensesEditComponent implements OnInit {
  // Gets the controls to retrieve user-entered data
  @ViewChild('expenseCalendar') expenseCalender: wjInput.InputDate;
  @ViewChild('warehouse') warehouse: wjInput.ComboBox;
  @ViewChild('expenseCategory') expenseCategory: wjInput.ComboBox;
  @ViewChild('amount') amount: wjInput.InputNumber;
  @ViewChild('details') details: wjInput.InputMask;
  routeId: any;
  expense: any;

  // Arrays to populate controls
  warehouses = ['Warehouse 1', 'Warehouse 2'];
  expenseCategories = ['Employee Benefits', 'Petrol', 'Office Expenses & Postage', 'Meals & Entertainment', 'Other'];

  // Retrieves data from service based on route id
  constructor(private expensesService: ExpensesService, private router: Router, private route: ActivatedRoute) {
    this.routeId = Number(this.route.snapshot.paramMap.get('expenseId'));
    this.expense = expensesService.getExpense(this.routeId - 1);
  }

  ngOnInit(): void {
  }

  // Saves user-entered values and routes back to expenses page
  submitExpenseEdit() {
    var editedExpense = { date: this.expenseCalender.value.toDateString().slice(4), details: this.details.value, warehouse: this.warehouse.selectedValue, category: this.expenseCategory.selectedValue, amount: this.amount.value }
    this.expensesService.setExpense(editedExpense, this.routeId);
    this.router.navigate(['expenses']);
  }

}
