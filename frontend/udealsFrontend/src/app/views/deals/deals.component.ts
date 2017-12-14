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
  tag: String; 
  day: any;
  deliver: any;
  options: String[] = ["Burgers", "Pizza"];

  constructor(private _apiSvc: UdealsService) {
    this.tag = "any";
    this.day = "any"
    this.deliver = "any";
    this._apiSVC = _apiSvc;
    _apiSvc.getDeals().subscribe(x => {
      this.deals = x;
    });



  }
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




myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

filterReset() {
  this._apiSvc.getDeals().subscribe(x => {
    this.deals = x;
  });
}

filterFunction() {
  var input, filter, ul, li, a, i, div;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
      if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
      } else {
          a[i].style.display = "none";
      }
  }
}  


filterTag() {
  console.log(this.tag);
  this._apiSVC.findByTag(this.tag).subscribe(x => {this.deals = x});
}

setTag(input) {
  this.tag = input;
  console.log(this.tag);
}

onEvent(event){
  var target = event.target || event.srcElement || event.currentTarget;
  var tagID = target.attributes.id; 
  var tagg = document.getElementById(tagID.nodeValue).textContent;
  

  this._apiSVC.findByTag(tagg).subscribe(x => {this.deals = x});

  // var dealListing = document.getElementById("dealListing");
  // dealListing.
}

moveToDetails(event, id){
  // var target = event.target || event.srcElement || event.currentTarget;
  // var ID = target.attributes.id; 
  // console.log(target);
  // var dealID = document.getElementById(ID.nodeValue).textContent;
  
  window.location.href += "/" + id;

}

}