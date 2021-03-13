import { VehicleMake } from "./enum.vehicle";
import {IVehicle} from "./interface"

export class Vehicle implements IVehicle{

    make: VehicleMake;
    model:string;
    year:number;
   private _age:number


    get age(): number{

        const today:any = new Date(2021);
        const carYear = this.year
        const carAge = today - carYear; 
        this._age = carAge
        return this._age
    }

}