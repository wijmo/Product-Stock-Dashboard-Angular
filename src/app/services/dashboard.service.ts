import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  currentDate = new Date();
  weeklySalesData = [
    { date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 1)).toDateString().slice(4), sale: 1736, purchase: 2243 },
    { date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 2)).toDateString().slice(4), sale: 1680, purchase: 2586 },
    { date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 3)).toDateString().slice(4), sale: 1838, purchase: 3027 },
    { date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 4)).toDateString().slice(4), sale: 2648, purchase: 2640 },
    { date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 5)).toDateString().slice(4), sale: 6052, purchase: 1350 }
  ];
  topProductsData = [
    { product: 'tablets', amount: 4321, quantity: 6, total: 9000 },
    { product: 'earbuds', amount: 2337, quantity: 39, total: 1326 },
    { product: 'adapters', amount: 1247, quantity: 67, total: 2278 },
    { product: 'chargers', amount: 1139, quantity: 81, total: 1100 },
    { product: 'flashdrives', amount: 996, quantity: 55, total: 567 },
  ];
  stockAlertData = [
    { code: 71087180, product: 'Avocat', warehouse: 'Warehouse 1', quantity: 0, alertQuantity: 10 },
    { code: 70171027, product: 'Banana', warehouse: 'Warehouse 2', quantity: 10, alertQuantity: 10 },
    { code: 80256894, product: 'Orange', warehouse: 'Warehouse 1', quantity: 46, alertQuantity: 50 },
    { code: 80256894, product: 'Orange', warehouse: 'Warehouse 2', quantity: 47, alertQuantity: 50 },
  ];
  topCustomersData = [
    { customer: 'Fred Rasmussen', sales: 1 },
    { customer: 'Phyliss Polite', sales: 1 },
    { customer: 'Beverly Huber', sales: 1 },
    { customer: 'Thomas Martin', sales: 2 },
    { customer: 'Walk-in Customers', sales: 4 },
  ];
  paymentsData = [
    { date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 1)).toDateString().slice(4), sent: 640, received: 0 },
    { date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 2)).toDateString().slice(4), sent: 2270, received: 0 },
    { date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 3)).toDateString().slice(4), sent: 1000, received: 1736 },
    { date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 4)).toDateString().slice(4), sent: 3066, received: 1000 },
    { date: new Date(this.currentDate.setDate(this.currentDate.getDate() - this.currentDate.getDay() + 5)).toDateString().slice(4), sent: 2000, received: 1792 },
  ];
  recentSalesData = [
    { references: 'SL_1119', customer: 'Walk-in Customer', status: 'Completed', grandTotal: 1600.00, paid: 1600.00, due: 0.00, paymentStatus: 'Paid' },
    { references: 'SL_1118', customer: 'Walk-in Customer', status: 'Completed', grandTotal: 74.00, paid: 74.00, due: 0.00, paymentStatus: 'Paid' },
    { references: 'SL_1117', customer: 'Thomas Martin', status: 'Pending', grandTotal: 1736.00, paid: 1736.00, due: 0.00, paymentStatus: 'Paid' },
    { references: 'SL_1116', customer: 'Walk-in Customer', status: 'Completed', grandTotal: 1650.00, paid: 1000.00, due: 650.00, paymentStatus: 'Partial' },
    { references: 'SL_1115', customer: 'Fred Rasmussen', status: 'Ordered', grandTotal: 1874.80, paid: 0.00, due: 1874.80, paymentStatus: 'Unpaid' },
  ];

  constructor() { }

  getWeeklySalesData() {
    return this.weeklySalesData;
  }

  getTopProductsData() {
    return this.topProductsData;
  }

  getStockAlertData() {
    return this.stockAlertData;
  }

  getTopCustomersData() {
    return this.topCustomersData;
  }

  getPaymentsData() {
    return this.paymentsData;
  }

  getRecentSalesData() {
    return this.recentSalesData;
  }
}
