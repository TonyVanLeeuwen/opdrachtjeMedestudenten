const isPerfectNumber = require("./index.js");

test("isPerfectnumber should return false if its not a perfect number", () => {
    //arrange
    const number = 4;

    //act
    const notaperfectnumber = isPerfectNumber(number);

    //assert
    expect(notaperfectnumber).toBeFalsy();
});

test("isPerfectnumber should return true if it is a perfect number", () => {
    //arrange
    const number = 28;

    //act
    const notaperfectnumber = isPerfectNumber(number);

    //assert
    expect(notaperfectnumber).toBeTruthy();
});