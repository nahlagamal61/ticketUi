export class ResponceModel<T>{
    constructor(
        public statusCode : number,
        public errors: string[],
        public data : T,
        public message : string
    ){}
}