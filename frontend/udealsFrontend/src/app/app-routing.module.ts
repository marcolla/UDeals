import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealsComponent } from './views/deals/deals.component';
import { DealCreationComponent } from './views/deal-creation/deal-creation.component';
import { DealDescriptionComponent } from './views/deal-description/deal-description.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'deals', pathMatch: 'full'},
  {path: 'deals', component: DealsComponent },
  {path: 'newdeal', component: DealCreationComponent },
  {path: 'deals/:id', component: DealDescriptionComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [DealDescriptionComponent]
})
export class AppRoutingModule { }
