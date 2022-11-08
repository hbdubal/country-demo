export class Country{
    id?:number;
    name!:string;
}

export class State{
    id!:number;
    name!:string;
    countryId!:number
}

export class City{
    id!:number;
    cityName!:string;
    stateId!:number;
}