import { expect } from "chai";
import "mocha";
import {Truck} from "../src/classes/class.truck"



describe("Test class Truck", () => {

    const truck = new Truck()

    it("should return empty Object", () => {

        expect(truck).to.be.instanceOf(Truck);
    });
})