import { Component, OnInit } from '@angular/core';
import { UdealsService } from '../../modules/udeals/udeals.service';

@Component({
  selector: 'app-deal-description',
  templateUrl: './deal-description.component.html',
  styleUrls: ['./deal-description.component.css']
})
export class DealDescriptionComponent implements OnInit {
  _apiSVC: UdealsService;
  dealID: String = (window.location.href).substr(28);
  dealJSON: any;

  constructor(private _apiSvc: UdealsService) { 
        _apiSvc.findDeal(this.dealID).subscribe(y => {
          this.dealJSON = y; 

          
          (<HTMLInputElement>document.getElementById("offer")).value = y.offer; 
          (<HTMLInputElement>document.getElementById("name")).value = y.details.name;
          (<HTMLInputElement>document.getElementById("address")).value = y.details.address;
          (<HTMLInputElement>document.getElementById("day")).value = y.details.day;
          (<HTMLInputElement>document.getElementById("time")).value = y.details.time;
          (<HTMLInputElement>document.getElementById("description")).value = y.details.description;
          (<HTMLInputElement>document.getElementById("deliver")).value = y.details.deliver;
          (<HTMLInputElement>document.getElementById("link")).value = y.details.link;
          (<HTMLInputElement>document.getElementById("recurring")).value = y.details.recurring;
          (<HTMLInputElement>document.getElementById("tags")).value = y.details.tags;
        });
  }

  ngOnInit() {
  }


  
  putDeal() {
    var dealJSON = 
    '{ "offer" : "' + (<HTMLInputElement>document.getElementById("offer")).value + 
    '", "details" : { "name": "' + (<HTMLInputElement>document.getElementById("name")).value + 
    '", "address": "' + (<HTMLInputElement>document.getElementById("address")).value +
    '", "day": "' + (<HTMLInputElement>document.getElementById("day")).value +
    '", "time": "' + (<HTMLInputElement>document.getElementById("time")).value +
    '", "description": "' + (<HTMLInputElement>document.getElementById("description")).value +
    '", "deliver": "' + (<HTMLInputElement>document.getElementById("deliver")).value +
    '", "link": "' + (<HTMLInputElement>document.getElementById("link")).value +
    '", "recurring": "' + (<HTMLInputElement>document.getElementById("recurring")).value +
    '"}}';

    console.log(dealJSON);

    this._apiSVC.putDeals(dealJSON).subscribe(y => {
    });
  }



  deleteDeal() {
    var dealJSON = 
    '{ "offer" : "' + (<HTMLInputElement>document.getElementById("offer")).value + '" }';

    console.log(dealJSON);

    this._apiSVC.deleteDeals(dealJSON).subscribe(y => {
    });
  }

  findDeal() {
    var dealJSON;

    this._apiSVC.findDeal(this.dealID).subscribe(y => {y = dealJSON;});
    console.log(dealJSON);
  }


}
