import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdjustmentCreateComponent } from './adjustment/adjustment-create/adjustment-create.component';
import { AdjustmentEditComponent } from './adjustment/adjustment-edit/adjustment-edit.component';
import { AdjustmentComponent } from './adjustment/adjustment.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpensesCreateComponent } from './expenses/expenses-create/expenses-create.component';
import { ExpensesEditComponent } from './expenses/expenses-edit/expenses-edit.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProductCreateComponent } from './products/product-create/product-create.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { QuotationCreateComponent } from './quotations/quotation-create/quotation-create.component';
import { QuotationDetailsComponent } from './quotations/quotation-details/quotation-details.component';
import { QuotationsComponent } from './quotations/quotations.component';
import { TransferCreateComponent } from './transfer/transfer-create/transfer-create.component';
import { TransferEditComponent } from './transfer/transfer-edit/transfer-edit.component';
import { TransferComponent } from './transfer/transfer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/create', component: ProductCreateComponent },
  { path: 'products/details/:productId', component: ProductDetailsComponent },
  { path: 'products/edit/:productId', component: ProductEditComponent },
  { path: 'adjustment', component: AdjustmentComponent },
  { path: 'adjustment/create', component: AdjustmentCreateComponent },
  { path: 'adjustment/edit/:adjustmentId', component: AdjustmentEditComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'transfer/create', component: TransferCreateComponent },
  { path: 'transfer/edit/:transferId', component: TransferEditComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'expenses/create', component: ExpensesCreateComponent },
  { path: 'expenses/edit/:expenseId', component: ExpensesEditComponent },
  { path: 'quotations', component: QuotationsComponent },
  { path: 'quotations/create', component: QuotationCreateComponent },
  { path: 'quotations/details/:quotationId', component: QuotationDetailsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
