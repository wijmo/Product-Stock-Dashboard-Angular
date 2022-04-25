import { Component, OnInit, ViewChild } from '@angular/core';
import { Selector } from '@grapecity/wijmo.grid.selector';
import { TransferService } from '../services/transfer.service';

import * as wjCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';
import * as wjGridXlsx from '@grapecity/wijmo.grid.xlsx';
import * as wjPdf from '@grapecity/wijmo.pdf';
import * as wjGridPdf from '@grapecity/wijmo.grid.pdf';
import * as wjInput from '@grapecity/wijmo.input';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  @ViewChild('transferGrid', { static: true }) transferGrid: wjGrid.FlexGrid;
  @ViewChild('transferPopup', { static: true }) transferPopup: wjInput.Popup;
  transferList: wjCore.CollectionView;
  transferDetail: wjCore.CollectionView = new wjCore.CollectionView();
  selector: any;
  selectedItems: any[] = [];
  includeColumnHeader = true;
  customContent = false;

  // Formats grid for PDF
  scaleMode = wjGridPdf.ScaleMode.ActualSize;
  orientation = wjPdf.PdfPageOrientation.Portrait;
  exportMode = wjGridPdf.ExportMode.All;

  // Retrieves data from service
  constructor(private transferService: TransferService) {
    this.transferList = new wjCore.CollectionView(transferService.getTransferList(), {
      pageSize: 10
    });
  }

  ngOnInit(): void {
  }

  // Creates the selector column
  initTransferGrid(grid: wjGrid.FlexGrid) {
    this.selector = new Selector(grid, {
      itemChecked: () => {
        this.selectedItems = grid.rows.filter(r => r.isSelected);
      }
    });
    grid.selectionMode = wjGrid.SelectionMode.Row;
  }

  // Saves grid to Excel
  saveExcel() {
    wjGridXlsx.FlexGridXlsxConverter.saveAsync(this.transferGrid, {
      includeColumnHeaders: this.includeColumnHeader,
      includeStyles: false
    },
    'Transfer.xlsx');
  }

  // Saves selected rows to Excel
  saveSelection() {
    var selectedGridItems = [];
    for(var i = 0; i < this.transferGrid.selectedRows.length; i++) {
      selectedGridItems.push(this.transferGrid.selectedRows[i].dataItem);
    }
    var selectedGrid = new wjGrid.FlexGrid('#hiddenGrid', {
      itemsSource: selectedGridItems,
      columnLayout: this.transferGrid.columnLayout
    });
    wjGridXlsx.FlexGridXlsxConverter.saveAsync(selectedGrid, {
      includeColumnHeaders: this.includeColumnHeader,
      includeStyles: false
    },
    'TransfersSelection.xlsx');
    selectedGrid.dispose();
  }

  // Saves grid to PDF
  savePDF() {
    wjGridPdf.FlexGridPdfConverter.export(this.transferGrid, 'Transfers.pdf', {
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

  // Displays popup with transfer data
  displayTransfer() {
    this.transferDetail.sourceCollection = this.transferList.items[this.transferGrid.selection.row].details
    this.transferPopup.show();
  }

  // Deletes row and refreshes grid
  deleteTransfer() {
    this.transferService.deleteTransfer(this.transferGrid.selectedItems[0].reference);
    this.transferList.sourceCollection = this.transferService.getTransferList()
    this.transferList.refresh();
  }

}
