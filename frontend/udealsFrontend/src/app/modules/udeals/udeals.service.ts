import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UdealsService {
  baseUri: string;

  private headers = new Headers({
    'Content-Type': 'application/json'
  })
  constructor(private http: Http, baseAPIUri: string) { 
    this.baseUri = baseAPIUri;
  }

  getDeals = () => this.http.get(
    this.baseUri,
    { headers: this.headers }).map(x => {
      console.log(x.json);
      return x.json();
    })


    postDeals = (input) => this.http.post(
      this.baseUri, input, { headers: this.headers })



}
