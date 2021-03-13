import { Car } from "../classes/class.car"
import { Truck } from "../classes/class.truck";
import { VehicleMake } from "../classes/enum.vehicle";

export class CarBuilder {


    BaseCar =  Car;



    private _instance: Car;

    protected get instance(): Car {

        if (!this._instance) {

            this._instance = new this.BaseCar();

        }

        return this._instance;
    }



    setMake(make: VehicleMake): void {

        this.instance.make = make

    }
    setModel(model: string): void {

        this.instance.model = model

    }


    getCar(): Car {
        return this.instance
    }

}