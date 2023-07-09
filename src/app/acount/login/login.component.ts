import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/Models/Login';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginForm :FormGroup; 
  constructor(private loinService : LoginService , 
      private formBuilder: FormBuilder ,
      private router : Router){
    this.LoginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$')]],
      'password': ['', [Validators.required]],
    })
  }
  onSubmit(){
    if(!this.LoginForm.valid)
      return;
    const login = new Login(this.LoginForm.get('email')?.value , this.LoginForm.get('password')?.value);
    this.loinService.login(login).subscribe(res =>
    {
      
        localStorage.setItem('token', res.token );
        localStorage.setItem('role', res.role );
        if(res.role =='User'){
          this.router.navigate(['/ticket/add'])
        }
        else if(res.role =="Admin")
        {
          this.router.navigate(['/ticket'])
        }
    },
    (error)=>{
        this.LoginForm.setErrors({ invalidMailOrPass: true });
    }   
    )
  }
}
