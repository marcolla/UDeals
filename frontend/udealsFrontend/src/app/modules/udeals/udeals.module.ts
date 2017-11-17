import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, HttpModule } from '@angular/http';
import { UdealsService } from './udeals.service';

export function udealsFactory(http: Http){
  return new UdealsService(http, 'http://localhost:3000/api/udeals')
}


@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [{provide: UdealsService, useFactory: udealsFactory, deps: [Http]}],
  declarations: []
})
export class UdealsModule { }
