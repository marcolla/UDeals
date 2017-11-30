import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DealsComponent } from './views/deals/deals.component';

import { UdealsModule } from './modules/udeals/udeals.module';

import {AppRoutingModule } from './app-routing.module';
import { DealCreationComponent } from './views/deal-creation/deal-creation.component';

@NgModule({
  declarations: [
    AppComponent,
    DealsComponent,
    DealCreationComponent
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
