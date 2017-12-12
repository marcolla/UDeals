import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { RequestOptions } from '@angular/http';

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
  

  putDeals = (input) => this.http.put(
    this.baseUri, input, { headers: this.headers })

  deleteDeals = (input) => this.http.delete(
    this.baseUri, new RequestOptions({  
      headers: this.headers,
      body: input
    }))

    findByTag = (input) => this.http.get(
      this.baseUri + "/" + input,
      { headers: this.headers }).map(x => {
        console.log(x.json);
        return x.json();
      })



  }
