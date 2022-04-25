import { Component, OnInit, ViewChild } from '@angular/core';
import { AdjustmentsService } from 'src/app/services/adjustments.service';
import { ActivatedRoute, Router } from '@angular/router';

import * as wjCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-adjustment-edit',
  templateUrl: './adjustment-edit.component.html',
  styleUrls: ['./adjustment-edit.component.css']
})
export class AdjustmentEditComponent implements OnInit {
  @ViewChild('adjustmentGrid') adjustmentGrid: wjGrid.FlexGrid;
  adjustmentEditList: wjCore.CollectionView;
  routeId: any;

  // Gets data from service based on route id
  constructor(private adjustmentsService: AdjustmentsService, private router: Router, private route: ActivatedRoute) {
    this.routeId = Number(this.route.snapshot.paramMap.get('adjustmentId'));
    this.adjustmentEditList = new wjCore.CollectionView(adjustmentsService.getAdjustmentDetails(this.routeId), {});
  }

  ngOnInit(): void {
  }

  // Saves changes and routes back to adjustment page
  save() {
    this.adjustmentsService.saveAdjustment(this.routeId, this.adjustmentEditList.sourceCollection);
    this.router.navigate(['adjustment']);
  }

  // Deletes row of data from service
  deleteRow() {
    this.adjustmentsService.deleteEditAdjustment(this.routeId, this.adjustmentGrid.selection.row);
    this.adjustmentEditList.sourceCollection = this.adjustmentsService.getAdjustmentDetails(this.routeId);
    this.adjustmentEditList.refresh();
  }

}
