import { Component, OnInit, ViewChild } from '@angular/core';
import { Selector } from '@grapecity/wijmo.grid.selector';
import { QuotationsService } from '../services/quotations.service';

import * as wjCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';
import * as wjGridXlsx from '@grapecity/wijmo.grid.xlsx';
import * as wjPdf from '@grapecity/wijmo.pdf';
import * as wjGridPdf from '@grapecity/wijmo.grid.pdf';

@Component({
  selector: 'app-quotations',
  templateUrl: './quotations.component.html',
  styleUrls: ['./quotations.component.css']
})
export class QuotationsComponent implements OnInit {
  @ViewChild('quotationGrid', { static: true }) quotationGrid: wjGrid.FlexGrid;
  quotationList: wjCore.CollectionView;
  selector: any;
  selectedItems: any[] = [];
  includeColumnHeader = true;
  customContent = false;
  scaleMode = wjGridPdf.ScaleMode.ActualSize;
  orientation = wjPdf.PdfPageOrientation.Portrait;
  exportMode = wjGridPdf.ExportMode.All;

  menuItems = ['1', '2', '3'];

  constructor(private quotationsService: QuotationsService) {
    this.quotationList = new wjCore.CollectionView(quotationsService.getQuotationsList(), {
      pageSize: 10
    });
  }

  ngOnInit(): void {
  }

  initQuotationGrid(grid: wjGrid.FlexGrid) {
    this.selector = new Selector(grid, {
      itemChecked: () => {
        this.selectedItems = grid.rows.filter(r => r.isSelected);
      }
    });
    grid.selectionMode = wjGrid.SelectionMode.Row;
  }

  saveExcel() {
    wjGridXlsx.FlexGridXlsxConverter.saveAsync(this.quotationGrid, {
      includeColumnHeaders: this.includeColumnHeader,
      includeStyles: false
    },
    'Quotations.xlsx');
  }

  // Saves selected rows to Excel
  saveSelection() {
    var selectedGridItems = [];
    for(var i = 0; i < this.quotationGrid.selectedRows.length; i++) {
      selectedGridItems.push(this.quotationGrid.selectedRows[i].dataItem);
    }
    var selectedGrid = new wjGrid.FlexGrid('#hiddenGrid', {
      itemsSource: selectedGridItems,
      columnLayout: this.quotationGrid.columnLayout
    });
    wjGridXlsx.FlexGridXlsxConverter.saveAsync(selectedGrid, {
      includeColumnHeaders: this.includeColumnHeader,
      includeStyles: false
    },
    'QuotationsSelection.xlsx');
    selectedGrid.dispose();
  }

  savePDF() {
    wjGridPdf.FlexGridPdfConverter.export(this.quotationGrid, 'Quotations.pdf', {
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

  delete() {
    this.quotationsService.deleteQuotation(this.quotationGrid.selectedItems[0].reference);
    this.quotationList.sourceCollection = this.quotationsService.getQuotationsList();
    this.quotationList.refresh();
  }

}
