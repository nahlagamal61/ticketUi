export class TicketResponse{
    constructor(
        public id : number,
        public description: string,
        public creationDateTime: any,
        public phoneNumber: string,
        public governorateName:string,
        public cityName:string,
        public district:string,
        public ticketStatus:TicketStatus
    ){}
}

export enum TicketStatus{
        Unhandled,
        Handled
}
export enum City
{
  'Cairo City', 
  'Giza City',
  'Helwan',
   '6th of October',
   'Damanhur',
   'Rashid'
}
export enum Governorate 
{
    'Cairo',
    'Alexandria',
    'Giza',
    'Luxor',
    'Aswan',
    'Beheira',
    'BeniSuef',
    'Gharbia',
}
  
export class TicketRequest{
    constructor(
        public description: string,
        public phoneNumber: string,
        public governorate:Governorate,
        public city:City,
        public district:string,
    ){}
}
