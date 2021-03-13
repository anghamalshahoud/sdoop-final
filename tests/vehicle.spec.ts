import { expect } from "chai";
import "mocha";
import {Vehicle} from "../src/classes/class.vehicle"
import { VehicleMake } from "../src/classes/enum.vehicle";



describe("Test class Vehicle", () => {

    const vehicle = new Vehicle()
    vehicle.year = 2000;
    vehicle.make = VehicleMake.Chevrolet;
    vehicle.model = "A21"

    it("should have  four properties", () => {

        expect(vehicle).to.be.instanceOf(Vehicle);
    });

    it("should calculate the age of the vehicle ", () => {

        expect(vehicle.age).to.be.equal(21);
    });

    it("should make Chevrolet Vehicle ", () => {

        expect(vehicle.make).to.be.equal("Chevrolet");
    });

    it("should set Chevrolet model to A21 ", () => {

        expect(vehicle.model).to.be.equal("A21");
    });
})