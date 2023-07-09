import { Component, numberAttribute } from '@angular/core';
import { City, Governorate, TicketRequest } from 'src/app/Models/Ticket';
import { TicketService } from 'src/app/Services/ticket.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-create',
  templateUrl: './ticket-create.component.html',
  styleUrls: ['./ticket-create.component.css']
})
export class TicketCreateComponent {
  CreateTicketForm :FormGroup; 
  cities: City[] = [
    City['Cairo City'],
    City['Giza City'],
    City.Helwan,
    City['6th of October'],
    City.Damanhur,
    City.Rashid
  ];

  governorates: Governorate[] = [
    Governorate.Cairo,
    Governorate.Alexandria,
    Governorate.Giza,
    Governorate.Luxor,
    Governorate.Aswan,
    Governorate.Beheira,
    Governorate.BeniSuef,
    Governorate.Gharbia
  ];
  constructor( private ticketService : TicketService ,private formBuilder: FormBuilder , private router : Router){
    this.CreateTicketForm = this.formBuilder.group({
      "description": ['', Validators.required],
      "phoneNumber": ['', [Validators.required, Validators.pattern('^\\+20\\d{10}$')]],
      "governorate": [null, Validators.required],
      "city":[null , Validators.required],
      "district":['' , Validators.required],
    })
  }
  ngOnInit(){
  }
  onSubmit(){
    if(!this.CreateTicketForm.valid)
      return;
    const selectCity :string =this.CreateTicketForm.get('city')?.value ;
    const selectGoverate : string =this.CreateTicketForm.get('governorate')?.value;
    console.log(selectCity)
    console.log(selectGoverate)
    var x = 'Cairo City'
    console.log(this.CreateTicketForm.value)     
 
    const addedTicket = new TicketRequest(
      this.CreateTicketForm.get('description')?.value,
      this.CreateTicketForm.get('phoneNumber')?.value,
      +this.CreateTicketForm.get('governorate')?.value,
      +this.CreateTicketForm.get('city')?.value,
      this.CreateTicketForm.get('district')?.value
    );
    this.ticketService.add(addedTicket).subscribe(res =>{
          console.log(res)
          this.router.navigate(['/home']);
          alert("add ticket succefully");
      },
      error => {
        console.error('Error:', error);
        console.log('Status:', error.status);
        console.log('Error Message:', error.error.message);
      })
  }
  getCityValue(city: City): string {
    return City[city];
  }

  getGovernorateValue(governorate: Governorate): string {
    return Governorate[governorate];
  }

}
