/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
    var result = input.split(/[a-zA-Z]/)[0];
    if (result === "") {
      result = 1;
    } else if (result.includes("/")) {
      result = result.split("/");
      result = Number(result[0]) / Number(result[1]) / (Number(result[2]) || 1);
    } else {
      result = Number(result);
    }
    //check if result is valid
    result = !isNaN(result) ? result : "invalid number";
    return result;
  };

  this.getUnit = function(input) {
    var result = input.replace(/[\d\/\.]/gi, "");
    // check if result is valid
    if (
      [
        "gal",
        "lbs",
        "km",
        "l",
        "kg",
        "mi",
        "GAL",
        "LBS",
        "KM",
        "L",
        "KG",
        "MI"
      ].indexOf(result) > -1
    ) {
    } else {
      result = "invalid unit";
    }
    return result;
  };

  this.getReturnUnit = function(initUnit) {
    const board = {
      l: "gal",
      kg: "lbs",
      mi: "km",
      gal: "l",
      lbs: "kg",
      km: "mi",
      L: "GAL",
      KG: "MI",
      MI: "KM",
      GAL: "L",
      LBS: "KG",
      KM: "MI"
    };
    var result = board[initUnit];
    return result;
  };

  this.Unit = function(unit) {
    var unit = unit.toLowerCase();
    const board = {
      l: "liters",
      kg: "kilograms",
      mi: "miles",
      gal: "gallons",
      lbs: "pounds",
      km: "kilometers"
    };
    var result = board[unit];
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    var result;
    initUnit = initUnit.toLowerCase();
    switch (initUnit) {
      case "l":
        result = Number((initNum / galToL).toFixed(5));
        break;
      case "kg":
        result = Number((initNum / lbsToKg).toFixed(5));
        break;
      case "mi":
        result = Number((initNum * miToKm).toFixed(5));
        break;
      case "gal":
        result = Number((initNum * galToL).toFixed(5));
        break;
      case "lbs":
        result = Number((initNum * lbsToKg).toFixed(5));
        break;
      case "km":
        result = Number((initNum / miToKm).toFixed(5));
        break;
    }
    return result;
  };
  //spelloutunit instead of return unit???
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${initUnit} converts to ${returnNum} ${returnUnit}`;
    return result;
  };
}

module.exports = ConvertHandler;
