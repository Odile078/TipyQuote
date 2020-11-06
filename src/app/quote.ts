export class Quote {
    public showDescription: boolean;
    constructor(public id: number,public name: string,public quotess: string,public author: string , public completeDate: Date,public liked:number, public disliked:number){
      this.showDescription=false;
}
}