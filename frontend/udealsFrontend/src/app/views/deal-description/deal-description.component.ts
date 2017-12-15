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
  tagsArray: string[] = [];

  constructor(private _apiSvc: UdealsService) { 
    this._apiSVC = _apiSvc;
        _apiSvc.findDeal(this.dealID).subscribe(y => {
          this.dealJSON = y; 

          
          (<HTMLInputElement>document.getElementById("offer")).value = y.offer; 
          (<HTMLInputElement>document.getElementById("name")).value = y.details.name;
          (<HTMLInputElement>document.getElementById("address")).value = y.details.address;
          (<HTMLInputElement>document.getElementById("day")).value = y.details.day;
          (<HTMLInputElement>document.getElementById("time")).value = y.details.time;
          (<HTMLInputElement>document.getElementById("description")).value = y.details.description;

          (<HTMLInputElement>document.getElementById("deliver")).value = y.details.deliver;
          console.log("Deliver = " + y.details.deliver)
          console.log((<HTMLInputElement>document.getElementById("deliver")).checked);
          if(y.details.deliver == true){
            (<HTMLInputElement>document.getElementById("deliver")).checked = true;
          }
          console.log((<HTMLInputElement>document.getElementById("deliver")).checked);

          (<HTMLInputElement>document.getElementById("link")).value = y.details.link;

          (<HTMLInputElement>document.getElementById("recurring")).value = y.details.recurring;
                    
          console.log("Recurring = " + y.details.recurring)
          if(y.details.recurring == true){
            (<HTMLInputElement>document.getElementById("recurring")).checked = true;
          }

          (<HTMLInputElement>document.getElementById("deliver")).disabled = true;
          (<HTMLInputElement>document.getElementById("recurring")).disabled = true;

          (<HTMLInputElement>document.getElementById("tags")).value = y.details.tags;
        });
  }

  ngOnInit() {
  }
  
  putDeal() {
    document.getElementById("editButton").textContent = "Edit";
    (<HTMLInputElement>document.getElementById("name")).readOnly = true; 
    (<HTMLInputElement>document.getElementById("address")).readOnly = true;
    (<HTMLInputElement>document.getElementById("day")).readOnly = true;
    (<HTMLInputElement>document.getElementById("time")).readOnly = true;
    (<HTMLInputElement>document.getElementById("description")).readOnly = true;
    (<HTMLInputElement>document.getElementById("deliver")).disabled = true;
    (<HTMLInputElement>document.getElementById("link")).readOnly = true;
    (<HTMLInputElement>document.getElementById("recurring")).disabled = true; 

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
    '", "tags": [';
    for (var i = 0; i < this.tagsArray.length; i++) {
      dealJSON += '"' + this.tagsArray[i] + '"';
      if (i < this.tagsArray.length - 1) {
        dealJSON += ', ';
      }
    }
    dealJSON += ']}}';

    console.log(dealJSON);

    this._apiSVC.putDeals(dealJSON).subscribe(y => {
    });
  }

  editable() {
    if (document.getElementById("editButton").textContent == "Edit") {
      (<HTMLInputElement>document.getElementById("name")).readOnly = false;
      (<HTMLInputElement>document.getElementById("address")).readOnly = false;
      (<HTMLInputElement>document.getElementById("day")).readOnly = false;
      (<HTMLInputElement>document.getElementById("time")).readOnly = false;
      (<HTMLInputElement>document.getElementById("description")).readOnly = false;
      (<HTMLInputElement>document.getElementById("deliver")).disabled = false;
      (<HTMLInputElement>document.getElementById("link")).readOnly = false;
      (<HTMLInputElement>document.getElementById("recurring")).disabled = false; 
      document.getElementById("editButton").textContent = "Save";
    } else {
      this.makePutPopUp();

    }
  }

  makePutPopUp() {
    var popup = document.getElementById("putPopup");
    popup.classList.toggle("show");
  }

  makeDeletePopUp() {
    var popup = document.getElementById("deletePopup");
    popup.classList.toggle("show");
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

  redirect() {
    location.href = "#";
  }


  deliver(){
    if((<HTMLInputElement>document.getElementById("deliver")).checked){
      (<HTMLInputElement>document.getElementById("deliver")).value = "true";
      //(<HTMLInputElement>document.getElementById("deliver")).checked = false;
    }
    else{
      (<HTMLInputElement>document.getElementById("deliver")).value = "false";
      //(<HTMLInputElement>document.getElementById("deliver")).checked = true;
    }
    console.log((<HTMLInputElement>document.getElementById("deliver")).value);
  }

  recurring(){
    if((<HTMLInputElement>document.getElementById("recurring")).checked){
      (<HTMLInputElement>document.getElementById("recurring")).value = "true";
      //(<HTMLInputElement>document.getElementById("deliver")).checked = false;
    }
    else{
      (<HTMLInputElement>document.getElementById("recurring")).value = "false";
      //(<HTMLInputElement>document.getElementById("deliver")).checked = true;
    }
    console.log((<HTMLInputElement>document.getElementById("recurring")).value);
  }

}
