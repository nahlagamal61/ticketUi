import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Registeration } from 'src/app/Models/Registeration';
import { RegisterationService } from 'src/app/Services/registeration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegisterForm: FormGroup;
  constructor(private registerService: RegisterationService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.RegisterForm = this.formBuilder.group({
      'username': ['', Validators.required],
      'email': ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$')]],
      "phoneNumber": ['', [Validators.required, Validators.pattern('^\\+20\\d{10}$')]],
      'password': ['', [Validators.required]],
      'confirmPassword': ['', [Validators.required]]
    })
  }
  onSubmit() {
    if (!this.RegisterForm.valid)
      return;
    const register = new Registeration(
      this.RegisterForm.get('username')?.value,
      this.RegisterForm.get('email')?.value,
      this.RegisterForm.get('password')?.value,
      this.RegisterForm.get('confirmPassword')?.value,
      this.RegisterForm.get('phoneNumber')?.value
    )
    this.registerService.register(register).subscribe(res => {
      this.router.navigate(['./'])
    }, 
    (error) => {
      console.log("erroe")
    }
    )
  }
}
