import { expect } from "chai";
import "mocha";
import { CarBuilder } from "../src/builders/carBuilder";
import { TruckBuilder } from "../src/builders/truckBuilder";
import {VehicleDirector} from "../src/director/director"



describe("Test Director", () => {

    const vehicle = new TruckBuilder()
    const director = new VehicleDirector(vehicle)
    const ford = director.makeFordF150XLT()

    

    it("should be an instance of TruckBuilder", () => {

        expect(ford).to.be.instanceOf(TruckBuilder);
    });

    it("should have the 4X4 added to the Truck ", () => {

     expect(vehicle.add4X4).to.be.exist;
    });

    it("should have the tow Package added to the Truck ", () => {

        expect(vehicle.addTowPackage).to.be.exist;
       });

       it("should have the model set to F150 XLT ", () => {

        expect(vehicle.setModel).to.be.equal("F150 XLT");
       });

       it("should have the set Make set to Ford ", () => {

        expect(vehicle.setMake).to.be.equal("Ford");
       });

       it("should have FordF150 vehicle as a truck ", () => {

        expect(director.makeFordF150).to.be.instanceOf(TruckBuilder);
       });

       it("should have FordTaurus vehicle as a car ", () => {

        expect(director.makeFordTaurus).to.be.instanceof(CarBuilder);
       });

       it("should have FordF150XLT vehicle as a Truck ", () => {

        expect(director.makeFordF150XLT).to.be.instanceof(TruckBuilder);
       });

       it("should have FordRanger vehicle as a Truck ", () => {

        expect(director.makeFordRanger).to.be.instanceof(TruckBuilder);
       });
})