import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketCreateComponent } from './ticket-create/ticket-create.component';
import { AuthGardService } from '../Services/auth-gard.service';

const routes: Routes = [
  {path:"",component:TicketListComponent , canActivate:[AuthGardService]},
  {path:"add" , component:TicketCreateComponent,canActivate:[AuthGardService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRoutingModule { }
