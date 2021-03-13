import { expect } from "chai";
import "mocha";
import {TruckBuilder} from "../src/builders/truckBuilder"
import { Truck } from "../src/classes/class.truck";
import { VehicleMake } from "../src/classes/enum.vehicle";
import { towLimit } from "../src/mixins/mixin.withTowPackage";



describe("Test Builder", () => {

    const vehicle = new TruckBuilder()
    vehicle.addTowPackage()
    vehicle.add4X4()
    vehicle.setMake(VehicleMake.Ford)
    vehicle.setModel("F150 XLT")

    it("should return empty Object", () => {

        expect(vehicle).to.be.instanceOf(Truck);
    });

    it("should add two package ", () => {

        expect(vehicle.addTowPackage).to.exist;
    });

    it("should add 4X4 ", () => {

        expect(vehicle.add4X4).to.exist;
    });

    it("should set Make to Ford ", () => {

        expect(vehicle.setMake).to.be.equal(VehicleMake.Ford);
    });

    it("should set Ford model to F150 XLT ", () => {

        expect(vehicle.setModel).to.be.equal("F150 XLT");
    });



})