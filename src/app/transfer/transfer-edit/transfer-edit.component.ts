import { Component, OnInit, ViewChild } from '@angular/core';
import { TransferService } from 'src/app/services/transfer.service';
import { ActivatedRoute, Router } from '@angular/router';

import * as wjCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-transfer-edit',
  templateUrl: './transfer-edit.component.html',
  styleUrls: ['./transfer-edit.component.css']
})
export class TransferEditComponent implements OnInit {
  @ViewChild('transferGrid') transferGrid: wjGrid.FlexGrid;
  transferEditList: wjCore.CollectionView;
  routeId: any;

  // Gets data from service based on route id
  constructor(private transfersService: TransferService, private router: Router, private route: ActivatedRoute) {
    this.routeId = Number(this.route.snapshot.paramMap.get('transferId'));
    this.transferEditList = new wjCore.CollectionView(transfersService.getTransferDetails(this.routeId), {});
  }

  ngOnInit(): void {
  }

  // Saves data and routes back to adjustment page
  save() {
    this.transfersService.saveTransfer(this.routeId, this.transferEditList.sourceCollection);
    this.router.navigate(['transfer']);
  }

  // Deletes row from transfer table
  deleteRow() {
    this.transfersService.deleteEditTransfer(this.routeId, this.transferGrid.selection.row);
    this.transferEditList.sourceCollection = this.transfersService.getTransferDetails(this.routeId);
    this.transferEditList.refresh();
  }

}
