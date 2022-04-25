import { Component, OnInit, ViewChild } from '@angular/core';
import { Selector } from '@grapecity/wijmo.grid.selector';
import { ProductsService } from '../services/products.service';

import * as wjCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';
import * as wjGridXlsx from '@grapecity/wijmo.grid.xlsx';
import * as wjPdf from '@grapecity/wijmo.pdf';
import * as wjGridPdf from '@grapecity/wijmo.grid.pdf';
import * as wjInput from '@grapecity/wijmo.input';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @ViewChild('productGrid', { static: true }) productGrid: wjGrid.FlexGrid;
  productList: wjCore.CollectionView;
  selector: any;
  selectedItems: any[] = [];
  includeColumnHeader = true;
  customContent = false;

  // Formats grid for PDF
  scaleMode = wjGridPdf.ScaleMode.ActualSize;
  orientation = wjPdf.PdfPageOrientation.Portrait;
  exportMode = wjGridPdf.ExportMode.All;

  // Gets data from service
  constructor(private productsService: ProductsService) {
    this.productList = new wjCore.CollectionView(productsService.getProductList(), {
      pageSize: 10
    });
  }

  ngOnInit(): void {
  }

  // Adds selector column to grid
  initProductGrid(grid: wjGrid.FlexGrid) {
    this.selector = new Selector(grid, {
      itemChecked: () => {
        this.selectedItems = grid.rows.filter(r => r.isSelected);
      }
    });
    grid.selectionMode = wjGrid.SelectionMode.Row;
  }

  // Saves grid to Excel
  saveExcel() {
    wjGridXlsx.FlexGridXlsxConverter.saveAsync(this.productGrid, {
      includeColumnHeaders: this.includeColumnHeader,
      includeStyles: false
    },
    'Products.xlsx');
  }

  // Saves selected rows to Excel
  saveSelection() {
    var selectedGridItems = [];
    for(var i = 0; i < this.productGrid.selectedRows.length; i++) {
      selectedGridItems.push(this.productGrid.selectedRows[i].dataItem);
    }
    var selectedGrid = new wjGrid.FlexGrid('#hiddenGrid', {
      itemsSource: selectedGridItems,
      columnLayout: this.productGrid.columnLayout
    });
    wjGridXlsx.FlexGridXlsxConverter.saveAsync(selectedGrid, {
      includeColumnHeaders: this.includeColumnHeader,
      includeStyles: false
    },
    'ProductsSelection.xlsx');
    selectedGrid.dispose();
  }

  // Saves grid to PDF
  savePDF() {
    wjGridPdf.FlexGridPdfConverter.export(this.productGrid, 'Products.pdf', {
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

  // Loads Excel file
  load() {
    let fileInput = <HTMLInputElement>document.getElementById('importFile');
    if(fileInput.files[0]) {
      wjGridXlsx.FlexGridXlsxConverter.loadAsync(this.productGrid, fileInput.files[0], { includeColumnHeaders: true });
    }
  }

  // Deletes row from grid
  delete() {
    console.log(this.productGrid.selectedItems);
    this.productsService.deleteProduct(this.productGrid.selectedItems[0].name);
    this.productList.sourceCollection = this.productsService.getProductList();
    this.productList.refresh();
  }

}
