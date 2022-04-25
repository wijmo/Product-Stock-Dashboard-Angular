import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';

import * as wjCore from '@grapecity/wijmo';
import * as wjChart from '@grapecity/wijmo.chart';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  revenue = '$3458.00';
  purchases = '$1160.00'
  salesReturn = '$140.00';
  profit = '$946.00';
  date = new Date();
  monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  topCustomers = 'Top 5 Customers (' +  this.monthNames[this.date.getMonth()] + ')';
  salesChartData: wjCore.CollectionView;
  topProductsData: wjCore.CollectionView;
  stockAlertData: wjCore.CollectionView;
  topCustomerData: wjCore.CollectionView;
  paymentData: wjCore.CollectionView;
  recentSalesData: wjCore.CollectionView;

  constructor(private dashboardService: DashboardService) {
    this.salesChartData = new wjCore.CollectionView(dashboardService.getWeeklySalesData(), {});
    this.topProductsData = new wjCore.CollectionView(dashboardService.getTopProductsData(), {});
    this.stockAlertData = new wjCore.CollectionView(dashboardService.getStockAlertData(), {});
    this.topCustomerData = new wjCore.CollectionView(dashboardService.getTopCustomersData(), {});
    this.paymentData = new wjCore.CollectionView(dashboardService.getPaymentsData(), {});
    this.recentSalesData = new wjCore.CollectionView(dashboardService.getRecentSalesData(), {});
  }

  ngOnInit(): void {
    console.log(this.dashboardService.getWeeklySalesData());
  }

  weeklyChartInit(weeklyChart: wjChart.FlexChart) {
    weeklyChart.palette = ['#4eb3d3', '#0868ac'];
    weeklyChart.axisX.labelAngle = -45;
  }

  topProductsInit(topProductChart: wjChart.FlexPie) {
    topProductChart.palette = ['#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac'];
  }

  topCustomersInit(topCustomerChart: wjChart.FlexPie) {
    topCustomerChart.palette = ['#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac'];
  }

  paymentsInit(paymentsChart: wjChart.FlexChart) {
    paymentsChart.palette = ['#4eb3d3', '#0868ac'];
  }

}
