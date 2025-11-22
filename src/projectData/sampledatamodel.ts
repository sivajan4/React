export class SampledataModel{
    id: number| undefined;
    name:string ="";
    description:string="";
    contractSignedOn:Date = new Date();
    isActive:boolean=false;
    get isNew(): boolean{
        return this.id==undefined;
    }

    constructor(initializer?:any){
        if(!initializer) return;
        if(initializer.id) this.id =initializer.id;
        if(initializer.name) this.name =initializer.name;
        if(initializer.description) this.description =initializer.description;
        if(initializer.contractSignedOn) 
            this.contractSignedOn = new Date(initializer.contractSignedOn);
        if(initializer.isActive) this.isActive =initializer.isActive;


    }
}