import { Component, OnInit } from '@angular/core';
import { UdealsService } from '../../modules/udeals/udeals.service';

@Component({
  selector: 'app-deal-creation',
  templateUrl: './deal-creation.component.html',
  styleUrls: ['./deal-creation.component.css']
})
export class DealCreationComponent implements OnInit {
  _apiSVC: UdealsService;
  
  constructor() { }

  ngOnInit() {
  }

  postDeal() {
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

    this._apiSVC.postDeals(dealJSON).subscribe(y => {
    });
  }

}
