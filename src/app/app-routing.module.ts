import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './Shared/not-found/not-found.component';
import { LoginComponent } from './acount/login/login.component';
import { AuthGardService } from './Services/auth-gard.service';
import { HomeComponent } from './Shared/home/home.component';

const routes: Routes = [
  {
    path :'home', component :HomeComponent
  },
  {
    path:"ticket" , 
    loadChildren:()=> import('src/app/ticket/ticket.module').then(t => t.TicketModule),
    canActivate:[AuthGardService]  
  },
  {
    path:"acount" , 
    loadChildren:()=> import('src/app/acount/acount.module').then(t => t.AcountModule)
  },
  {
    path :'', component :HomeComponent
  },
  {path:"**" , component :NotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
