import { Truck } from "../classes/class.truck";
import { VehicleMake } from "../classes/enum.vehicle";
import { with4X4 } from "../mixins/mixin.with4X4";
import { ItowLimit, towLimit, withTowPackage } from "../mixins/mixin.withTowPackage"

export class TruckBuilder {


    BaseTruck = Truck;

    private towlimit: towLimit[] = []



    private _instance: Truck;

    protected get instance(): Truck {

        if (!this._instance) {

            this._instance = new this.BaseTruck();

        }
        if (this.towlimit.length) {
            (this._instance as Truck & ItowLimit).towLimit = this.towlimit;
        }

        return this._instance;
    }



    setMake(make: VehicleMake): void {

        this.instance.make = make

    }
    setModel(model: string): void {

        this.instance.model = model

    }

    addTowPackage(towlimit?: towLimit[]): void {

        this.BaseTruck = withTowPackage(this.BaseTruck)
        this.towlimit = towlimit

    }

    add4X4(): void {
        this.BaseTruck = with4X4(this.BaseTruck);
    }


    getTruck(): Truck {
        return this.instance
    }

}