import { Component, OnInit } from '@angular/core';
import { UdealsService } from '../../modules/udeals/udeals.service';


@Component({
  selector: 'app-deal-creation',
  templateUrl: './deal-creation.component.html',
  styleUrls: ['./deal-creation.component.css']
})
export class DealCreationComponent implements OnInit {
  _apiSVC: UdealsService;
  tagsArray: string[] = [];
  event: MouseEvent;

  constructor(private _apiSvc: UdealsService) {
    this._apiSVC = _apiSvc;
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
    '", "tags": "' + this.tagsArray +
    '"}}';

    console.log(dealJSON);

    this._apiSVC.postDeals(dealJSON).subscribe(y => {
    });
  }

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
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

  onEvent(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var tagID = target.attributes.id; 
    var tag = document.getElementById(tagID.nodeValue).textContent;
    
    this.tagsArray.push(tag);
    console.log(this.tagsArray);
  }

  addToTagArray(){
      
  //   document.addEventListener(MouseEvent, function(e) {
  //     e = e || window.event;
  //     var target = e.target || e.srcElement,
  //         text = target.textContent || text.innerText;   
  // }, false);

  }


}


