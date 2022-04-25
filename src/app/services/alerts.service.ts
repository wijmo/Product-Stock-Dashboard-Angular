import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  alertsData = [
    { code: Math.round(Math.random() * 100000), product: 'Banana', warehouse: 'Warehouse 2', quantity: 10, alertQuantity: 10 },
    { code: Math.round(Math.random() * 100000), product: 'Orange', warehouse: 'Warehouse 1', quantity: 35, alertQuantity: 50 },
    { code: Math.round(Math.random() * 100000), product: 'Orange', warehouse: 'Warehouse 2', quantity: 20, alertQuantity: 50 },
    { code: Math.round(Math.random() * 100000), product: 'Macbook Pro', warehouse: 'Warehouse 1', quantity: 2, alertQuantity: 20 }
  ]

  constructor() { }

  getAlertsData() {
    return this.alertsData;
  }
}
