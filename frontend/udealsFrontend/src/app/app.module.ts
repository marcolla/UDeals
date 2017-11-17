import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DealsComponent } from './views/deals/deals.component';

import { UdealsModule } from './modules/udeals/udeals.module';

import {AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DealsComponent
  ],
  imports: [
    BrowserModule,
    UdealsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
