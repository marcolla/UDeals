import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsComponent } from './views/deals/deals.component';
import { DealCreationComponent } from './views/deal-creation/deal-creation.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'deals', pathMatch: 'full'},
  {path: 'deals', component: DealsComponent },
  {path: 'newdeal', component: DealCreationComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
