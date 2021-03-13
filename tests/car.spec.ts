import { expect } from "chai";
import "mocha";
import {Car} from "../src/classes/class.car"



describe("Test class Car", () => {

    const car = new Car()

    it("should return empty Object", () => {

        expect(car).to.be.instanceOf(Car);
    });
})