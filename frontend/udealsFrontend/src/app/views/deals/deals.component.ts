import { Component, OnInit } from '@angular/core';
import { UdealsService } from '../../modules/udeals/udeals.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
  deals: any[] = [ ];

  constructor(private _apiSvc: UdealsService) {
    _apiSvc.getDeals().subscribe(x => {
      this.deals = x;
    });

  }
  ngOnInit() {
  }

}
