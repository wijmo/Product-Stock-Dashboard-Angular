import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuotationsService } from 'src/app/services/quotations.service';

import * as wjCore from '@grapecity/wijmo';
import * as wjGrid from '@grapecity/wijmo.grid';

@Component({
  selector: 'app-quotation-details',
  templateUrl: './quotation-details.component.html',
  styleUrls: ['./quotation-details.component.css']
})
export class QuotationDetailsComponent implements OnInit {
  routeId: any;
  quote: any;
  quotation: wjCore.CollectionView;

  constructor(private route: ActivatedRoute, private quotationService: QuotationsService, private router: Router) {
    this.routeId = Number(this.route.snapshot.paramMap.get('quotationId'));
    this.quotation = new wjCore.CollectionView(quotationService.getQuotationDetails(this.routeId));
  }

  ngOnInit(): void {
    this.quote = this.quotationService.getQuotation(this.routeId);
  }

  initGrid(grid: wjGrid.FlexGrid) {
    grid.columnFooters.rows.push(new wjGrid.GroupRow());
  }

  closeQuote() {
    this.router.navigate(['quotations']);
  }

}
