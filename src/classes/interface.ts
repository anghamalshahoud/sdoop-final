import {VehicleMake} from "./enum.vehicle"

export interface IVehicle{
    make: VehicleMake;
    model:string;
    year:number;
    age:number
}