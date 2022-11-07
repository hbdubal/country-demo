export class Country{
    id!:number;
    shortName!:string;
}

export class State{
    id!:number;
    name!:string;
    country!:string
}

export class City{
    id!:number;
    name!:string;
    state!:string;
}