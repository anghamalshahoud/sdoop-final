import {Vehicle} from "./classes/class.vehicle";
import {CarBuilder} from "./builders/carBuilder";
import { VehicleMake } from "./classes/enum.vehicle";
import { TruckBuilder } from "./builders/truckBuilder";
import {towLimit} from "./mixins/mixin.withTowPackage"
import { VehicleDirector } from "./director/director";

// const car = new CarBuilder();
// car.setMake(VehicleMake.Ford)
// car.setModel("AFF105")

// const carr = car.getCar()
// console.log(carr);

// const truck = new TruckBuilder();
// truck.add4X4();
// truck.addTowPackage([towLimit.a])
// truck.setMake(VehicleMake.Chevrolet)
// truck.setModel("FRT567")

// const truckk = truck.getTruck();
// console.log(truckk)

// const builder = new CarBuilder()
// const director = new VehicleDirector(builder);
// const ford = director.makeFordTaurus();
// console.log(ford);