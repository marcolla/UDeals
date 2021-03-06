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
  daysArray: string[] = [];
  dayCount: number = 0;

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

  redirect() {
    location.href = "#"
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
    
    for(var i = 0; i < this.tagsArray.length; i++){
      if(tag == this.tagsArray[i]){
        return 0;
      }
    }
    
    this.tagsArray.push(tag);
    console.log(this.tagsArray);

    var tagBtn = document.createElement("BUTTON");
    var tagText = document.createTextNode(tag);
    tagBtn.appendChild(tagText);
    document.getElementById("cat").appendChild(tagBtn);
    tagBtn.className = "tagButton";
    tagBtn.id = `b${this.tagCount}`;
    this.tagCount++;
    
    
    //tagBtn.attributes.onclick = this.deleteTag(event);
    // tagBtn.style.position = "relative";
    // tagBtn.style.top = "500px";
    // console.log(tagBtn.className);


    //document.getElementById("tagContainer").appendChild(tagBtn);


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

  
  makePostPopUp() {
    var popup = document.getElementById("postPopup");
    popup.classList.toggle("show");
  }
  
  pickDays(event){
    var target = event.target || event.srcElement || event.currentTarget;
    var dayID = target.attributes.id; 
    var day = document.getElementById(dayID.nodeValue).textContent;
    
    for(var i = 0; i < this.daysArray.length; i++){
      if(day == this.daysArray[i]){
        return 0;
      }
    }
    
    this.daysArray.push(day);
    console.log(this.daysArray);

    var dayBtn = document.createElement("BUTTON");
    var dayText = document.createTextNode(day);
    dayBtn.appendChild(dayText);
    document.getElementById("day").appendChild(dayBtn);
    dayBtn.className = "dayButton";
    dayBtn.id = `b${this.dayCount}`;
    this.dayCount++;
    


    var currentDaysArray = this.daysArray;
    console.log(currentDaysArray);


    

    //console.log(document.getElementsByClassName("tagButton"));


    var numDayButtons = document.getElementsByClassName("dayButton").length;

    document.getElementsByClassName("dayButton")[numDayButtons - 1].addEventListener(
      'click', 
      function(){ 
        console.log(this);
        var bTag = this.textContent;
        //Remove tag from array
        for(var i = 0; i < currentDaysArray.length; i++){
          if(currentDaysArray[i] == bTag){
            currentDaysArray.splice(i,1);
            console.log(currentDaysArray);
          }
        }
        //Remove tag button
        this.remove(); 
      });

    this.daysArray = currentDaysArray;
    console.log(this.daysArray);
  }

}


