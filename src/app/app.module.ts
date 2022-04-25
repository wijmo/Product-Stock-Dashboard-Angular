import '../license';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AdjustmentComponent } from './adjustment/adjustment.component';
import { TransferComponent } from './transfer/transfer.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { QuotationsComponent } from './quotations/quotations.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { AdjustmentEditComponent } from './adjustment/adjustment-edit/adjustment-edit.component';
import { TransferEditComponent } from './transfer/transfer-edit/transfer-edit.component';
import { ExpensesEditComponent } from './expenses/expenses-edit/expenses-edit.component';

import { WjGridModule } from '@grapecity/wijmo.angular2.grid';
import { WjChartModule } from '@grapecity/wijmo.angular2.chart';
import { WjChartAnimationModule } from '@grapecity/wijmo.angular2.chart.animation';
import { WjGridSearchModule } from '@grapecity/wijmo.angular2.grid.search';
import { WjGridFilterModule } from '@grapecity/wijmo.angular2.grid.filter';
import { WjInputModule } from '@grapecity/wijmo.angular2.input';
import { WjBarcodeCommonModule } from '@grapecity/wijmo.angular2.barcode.common';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { AdjustmentCreateComponent } from './adjustment/adjustment-create/adjustment-create.component';
import { TransferCreateComponent } from './transfer/transfer-create/transfer-create.component';
import { ExpensesCreateComponent } from './expenses/expenses-create/expenses-create.component';
import { QuotationDetailsComponent } from './quotations/quotation-details/quotation-details.component';
import { QuotationCreateComponent } from './quotations/quotation-create/quotation-create.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductsComponent,
    AdjustmentComponent,
    TransferComponent,
    ExpensesComponent,
    QuotationsComponent,
    NotificationsComponent,
    ProfileComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    AdjustmentEditComponent,
    TransferEditComponent,
    ExpensesEditComponent,
    ProductCreateComponent,
    AdjustmentCreateComponent,
    TransferCreateComponent,
    ExpensesCreateComponent,
    QuotationDetailsComponent,
    QuotationCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WjGridModule,
    WjChartModule,
    WjChartAnimationModule,
    WjGridSearchModule,
    WjGridFilterModule,
    WjInputModule,
    WjBarcodeCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
