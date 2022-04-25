import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../services/alerts.service';

import * as wjCore from '@grapecity/wijmo';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  notificationList: wjCore.CollectionView;

  constructor(private alertsService: AlertsService) {
    this.notificationList = new wjCore.CollectionView(alertsService.getAlertsData(), {});
  }

  ngOnInit(): void {
  }

}
