import { Component, OnInit } from '@angular/core';
import { UdealsService } from '../../modules/udeals/udeals.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
  deals: any[] = [ ];
  _apiSVC: UdealsService;

  constructor(private _apiSvc: UdealsService) {
    this._apiSVC = _apiSvc;
    _apiSvc.getDeals().subscribe(x => {
      this.deals = x;
    });

  }
  ngOnInit() {
  }


  postDeal() {
    var dealJSON = 
    "{ offer: " + document.getElementById("offer") + 
    ", details: { name: " + document.getElementById("name") + 
    ", address: " + document.getElementById("address") +
    ", day: " + document.getElementById("day") +
    ", time: " + document.getElementById("time") +
    ", description: " + document.getElementById("description") +
    ", deliver: " + document.getElementById("deliver") +
    ", link: " + document.getElementById("link") +
    ", recurring: " + document.getElementById("recurring") +
    "}}";

    this._apiSVC.postDeals().subscribe(y => {
    });
  }

}
