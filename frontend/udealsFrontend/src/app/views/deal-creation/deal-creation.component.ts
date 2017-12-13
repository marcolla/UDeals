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
  tagCount: number = 0;

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
    '", "tags": [';
    for (var i = 0; i < this.tagsArray.length; i++) {
      dealJSON += '"' + this.tagsArray[i] + '"';
      if (i < this.tagsArray.length - 1) {
        dealJSON += ', ';
      }
    }
    dealJSON += ']}}';

    console.log(dealJSON);

    this._apiSVC.postDeals(dealJSON).subscribe(y => {
    });

    
  }

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  redirect()
  {
  

  var url = "http://localhost:4200/deals";
location.href = url;
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


  deleteTag(event){
    
        var target = event.target || event.srcElement || event.currentTarget;
        var tagID = target.attributes.id; 
        var tag = document.getElementById(tagID.nodeValue).textContent;
       //Remove tag from array
        for(var i = 0; i < this.tagsArray.length; i++){
          if(this.tagsArray[i] == tag){
            this.tagsArray.splice(i,1);
          }
        }
       //Remove tag button
        document.getElementById(tagID.nodeValue).removeChild(document.getElementById(tagID.nodeValue));
      }

  
  onEvent(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var tagID = target.attributes.id; 
    var tag = document.getElementById(tagID.nodeValue).textContent;
    
    this.tagsArray.push(tag);
    console.log(this.tagsArray);

    var tagBtn = document.createElement("BUTTON");
    var tagText = document.createTextNode(tag);
    tagBtn.appendChild(tagText);
    tagBtn.className = "tagButton";
    tagBtn.id = `b${this.tagCount}`;
    this.tagCount++;
    
    //tagBtn.attributes.onclick = this.deleteTag(event);
    // tagBtn.style.position = "relative";
    // tagBtn.style.top = "500px";
    // console.log(tagBtn.className);
    document.getElementById("tagContainer").appendChild(tagBtn);


    var currentTagsArray = this.tagsArray;
    console.log(currentTagsArray);


    

    //console.log(document.getElementsByClassName("tagButton"));
    var numButtons = document.getElementsByClassName("tagButton").length;

    document.getElementsByClassName("tagButton")[numButtons - 1].addEventListener(
      'click', 
      function(){ 
        console.log(this);
        var bTag = this.textContent;
        //Remove tag from array
        for(var i = 0; i < currentTagsArray.length; i++){
          if(currentTagsArray[i] == bTag){
            currentTagsArray.splice(i,1);
            console.log(currentTagsArray);
          }
        }
        //Remove tag button
        this.remove(); 
      });

    this.tagsArray = currentTagsArray;
    console.log(this.tagsArray);
  }

  


}


