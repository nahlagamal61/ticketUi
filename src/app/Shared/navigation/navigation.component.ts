import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isUser : boolean = false;
  isAdmin : boolean =false;
  constructor(private router : Router){
    if(localStorage.getItem('toke') != ''){
      if(localStorage.getItem('role')== 'Admin'){
        this.isAdmin=true;
      }
      else if(localStorage.getItem('role') == 'User'){
        this.isUser = true;
      }
    }
  }
  Logout(){
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
    window.location.reload();
  }
}
