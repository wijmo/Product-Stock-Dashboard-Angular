import { Component, OnInit, ViewChild } from '@angular/core';
import { Selector } from '@grapecity/wijmo.grid.selector';
import { ExpensesService } from '../services/expenses.service';

import * as wjCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';
import * as wjGridXlsx from '@grapecity/wijmo.grid.xlsx';
import * as wjPdf from '@grapecity/wijmo.pdf';
import * as wjGridPdf from '@grapecity/wijmo.grid.pdf';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  @ViewChild('expenseGrid', { static: true }) expenseGrid: wjGrid.FlexGrid;
  expenseList: wjCore.CollectionView;
  selector: any;
  selectedItems: any[] = [];
  includeColumnHeader = true;
  customContent = false;

  // Formats the PDF
  scaleMode = wjGridPdf.ScaleMode.ActualSize;
  orientation = wjPdf.PdfPageOrientation.Portrait;
  exportMode = wjGridPdf.ExportMode.All;

  // Gets data from the service
  constructor(private expensesServices: ExpensesService) {
    this.expenseList = new wjCore.CollectionView(expensesServices.getExpenseList(), {
      pageSize: 10
    });
  }

  ngOnInit(): void {
  }

  // Adds the selector column to the grid
  initExpenseGrid(grid: wjGrid.FlexGrid) {
    this.selector = new Selector(grid, {
      itemChecked: () => {
        this.selectedItems = grid.rows.filter(r => r.isSelected);
      }
    });
    grid.selectionMode = wjGrid.SelectionMode.Row;
  }

  // Saves grid to Excel file
  saveExcel() {
    wjGridXlsx.FlexGridXlsxConverter.saveAsync(this.expenseGrid, {
      includeColumnHeaders: this.includeColumnHeader,
      includeStyles: false
    },
    'Expenses.xlsx');
  }

  // Saves selected rows to Excel
  saveSelection() {
    var selectedGridItems = [];
    for(var i = 0; i < this.expenseGrid.selectedRows.length; i++) {
      selectedGridItems.push(this.expenseGrid.selectedRows[i].dataItem);
    }
    var selectedGrid = new wjGrid.FlexGrid('#hiddenGrid', {
      itemsSource: selectedGridItems,
      columnLayout: this.expenseGrid.columnLayout
    });
    wjGridXlsx.FlexGridXlsxConverter.saveAsync(selectedGrid, {
      includeColumnHeaders: this.includeColumnHeader,
      includeStyles: false
    },
    'ExpensesSelection.xlsx');
    selectedGrid.dispose();
  }

  // Saves grid to PDF
  savePDF() {
    wjGridPdf.FlexGridPdfConverter.export(this.expenseGrid, 'Expenses.pdf', {
      maxPages: 10,
      exportMode: this.exportMode,
      scaleMode: this.scaleMode,
      documentOptions: {
        pageSettings: {
          layout: this.orientation
        },
        header: {
          declarative: {
            text: '\t&[Page]\\&[Pages]'
          }
        },
        footer: {
          declarative: {
            text: '\t&[Page]\\&[Pages]'
          }
        }
      },
      styles: {
        cellStyle: {
          backgroundColor: '#ffffff',
          borderColor: '#c6c6c6'
        },
        altCellStyle: {
          backgroundColor: '#f9f9f9'
        },
        groupCellStyle: {
          backgroundColor: '#dddddd'
        },
        headerCellStyle: {
          backgroundColor: '#eaeaea'
        }
      }
    });
  }

  // Deletes an expense from the grid and refreshes
  deleteExpense() {
    this.expensesServices.deleteExpense(this.expenseGrid.selectedItems[0].reference);
    this.expenseList.sourceCollection = this.expensesServices.getExpenseList();
    this.expenseList.refresh();
  }

}
