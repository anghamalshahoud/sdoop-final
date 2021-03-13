import {CarBuilder} from "../builders/carBuilder"
import {TruckBuilder} from "../builders/truckBuilder"
import { Truck } from "../classes/class.truck";
import { VehicleMake } from "../classes/enum.vehicle";
import { towLimit } from "../mixins/mixin.withTowPackage";


export class VehicleDirector{

    
    constructor(private builder:CarBuilder | TruckBuilder){

    }

     makeFordF150XLT(){
         const Ford = new TruckBuilder()
         Ford.addTowPackage([towLimit.a]);
         Ford.add4X4();
         Ford.setMake(VehicleMake.Ford)
         Ford.setModel("F150 XLT");

         return Ford.getTruck()
     }

     makeFordTaurus(){
        const Ford = new CarBuilder()
       
        Ford.setMake(VehicleMake.Ford)
        Ford.setModel("Taurus");

        return Ford.getCar()
    }

    makeFordRanger(){
        const Ford = new TruckBuilder()
        Ford.add4X4();
        Ford.setMake(VehicleMake.Ford)
        Ford.setModel("Ranger");

        return Ford.getTruck()
    }

    makeFordF150(){
        const Ford = new TruckBuilder()
        Ford.addTowPackage([towLimit.b])
        Ford.setMake(VehicleMake.Ford)
        Ford.setModel("F150");

        return Ford.getTruck()
    }
}
