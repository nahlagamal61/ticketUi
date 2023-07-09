import { Location } from '@angular/common';
import { Component} from '@angular/core';
import { TicketResponse, TicketStatus } from 'src/app/Models/Ticket';
import { TicketService } from 'src/app/Services/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent {
  tickets : TicketResponse[]=[];
  handledStatus :TicketStatus = TicketStatus.Handled;
  isHandeledOrNot : boolean= false;
  p: number = 1;
  resPerPage: number=5;
  
  constructor(private ticketService : TicketService,
    private location: Location){

  }
  ngOnInit(){
    this.ticketService.get().subscribe(res =>{
      console.log(res.data);
      this.tickets = res.data;
      console.log(new Date().toISOString())
      
      let bgcolor ;
      res.data.forEach(element => {

        this.TrackTime(element.creationDateTime );

      });
    })
  }
  UpdateStatus(id : number){
    this.ticketService.updateStatus(id , TicketStatus.Handled).subscribe( res =>
      {
        console.log(res);
        window.location.reload();
      }
    );
  }
  isHandled(ticketStatus: TicketStatus): boolean {
    return ticketStatus === TicketStatus.Handled;
  }
  TrackTime(createTime :Date):string{
    let bgcolor :string = '';
    const createdDtaeFormated = new Date(createTime);
    const currentTime = new Date();
    const diffrentTime = (currentTime.getTime() - createdDtaeFormated.getTime()) / (1000 * 60);   
    console.log("creatd " +createdDtaeFormated)
    console.log("current "+ currentTime)
    
    console.log("1"+ diffrentTime); 

    if(diffrentTime > 60 )
    {
      bgcolor = 'red';
    }else if(diffrentTime > 45 )
    {
      bgcolor = 'blue'; 
    }
    else if(diffrentTime > 30 )
    {
      bgcolor = 'green';
    }
    else if(diffrentTime > 15 )
    {
      bgcolor = 'yellow';
    }else{
      bgcolor ='gray'
    }
    return bgcolor;
  }
}
