import { Component, OnInit, ViewChild } from '@angular/core';
import { Selector } from '@grapecity/wijmo.grid.selector';
import { AdjustmentsService } from '../services/adjustments.service';

import * as wjCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';
import * as wjGridXlsx from '@grapecity/wijmo.grid.xlsx';
import * as wjPdf from '@grapecity/wijmo.pdf';
import * as wjGridPdf from '@grapecity/wijmo.grid.pdf';
import * as wjInput from '@grapecity/wijmo.input';

@Component({
  selector: 'app-adjustment',
  templateUrl: './adjustment.component.html',
  styleUrls: ['./adjustment.component.css']
})
export class AdjustmentComponent implements OnInit {
  @ViewChild('adjustmentGrid', { static: true }) adjustmentGrid: wjGrid.FlexGrid;
  @ViewChild('adjustmentPopup', { static: true }) adjustmentPopup: wjInput.Popup;
  adjustmentList: wjCore.CollectionView;
  adjustmentDetail: wjCore.CollectionView = new wjCore.CollectionView();
  selector: any;
  selectedItems: any[] = [];
  includeColumnHeader = true;
  customContent = false;

  // Formats grid for PDF
  scaleMode = wjGridPdf.ScaleMode.ActualSize;
  orientation = wjPdf.PdfPageOrientation.Portrait;
  exportMode = wjGridPdf.ExportMode.All;

  // Gets data from service
  constructor(private adjustmentsService: AdjustmentsService) {
    this.adjustmentList = new wjCore.CollectionView(adjustmentsService.getAdjustmentList(), {
      pageSize: 10
    });
  }

  ngOnInit(): void {
  }

  // Creates selector column
  initAdjustmentGrid(grid: wjGrid.FlexGrid) {
    this.selector = new Selector(grid, {
      itemChecked: () => {
        this.selectedItems = grid.rows.filter(r => r.isSelected);
      }
    });
    grid.selectionMode = wjGrid.SelectionMode.Row;
  }

  // Saves grid to Excel
  saveExcel() {
    wjGridXlsx.FlexGridXlsxConverter.saveAsync(this.adjustmentGrid, {
      includeColumnHeaders: this.includeColumnHeader,
      includeStyles: false
    },
    'Adjustments.xlsx');
  }

  // Saves selected rows to Excel
  saveSelection() {
    var selectedGridItems = [];
    for(var i = 0; i < this.adjustmentGrid.selectedRows.length; i++) {
      selectedGridItems.push(this.adjustmentGrid.selectedRows[i].dataItem);
    }
    var selectedGrid = new wjGrid.FlexGrid('#hiddenGrid', {
      itemsSource: selectedGridItems,
      columnLayout: this.adjustmentGrid.columnLayout
    });
    wjGridXlsx.FlexGridXlsxConverter.saveAsync(selectedGrid, {
      includeColumnHeaders: this.includeColumnHeader,
      includeStyles: false
    },
    'AdjustmentsSelection.xlsx');
    selectedGrid.dispose();
  }

  // Saves grid to PDF
  savePDF() {
    wjGridPdf.FlexGridPdfConverter.export(this.adjustmentGrid, 'Adjustments.pdf', {
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

  // Displays adjustment popup
  displayAdjustment() {
    this.adjustmentDetail.sourceCollection = this.adjustmentList.items[this.adjustmentGrid.selection.row].details
    this.adjustmentPopup.show();
  }

  // Deletes data from service and refreshes grid
  deleteAdjustment() {
    this.adjustmentsService.deleteAdjustment(this.adjustmentGrid.selectedItems[0].reference);
    this.adjustmentList.sourceCollection = this.adjustmentsService.getAdjustmentList()
    this.adjustmentList.refresh();
  }

}
