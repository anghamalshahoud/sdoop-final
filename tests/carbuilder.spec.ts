import { expect } from "chai";
import "mocha";
import {CarBuilder} from "../src/builders/carBuilder"
import { Car } from "../src/classes/class.car";
import { VehicleMake } from "../src/classes/enum.vehicle";



describe("Test Builder", () => {

    const vehicle = new CarBuilder()
    vehicle.setMake(VehicleMake.Nissan)
    vehicle.setModel("N150 XLT")
    vehicle.getCar()

    it("should return empty Object", () => {

        expect(vehicle).to.be.instanceOf(Car);
    });


    it("should set Make to Nisaan ", () => {

        expect(vehicle.setMake).to.be.equal("Nisaan");
    });

    it("should set Nissan model to N150 XLT ", () => {

        expect(vehicle.setModel).to.be.equal("N150 XLT");
    });

    it("should return the instance of a Car ", () => {

        expect(vehicle.getCar).to.be.instanceOf(Car);
    });



})