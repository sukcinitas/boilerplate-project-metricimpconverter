/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

var expect = require("chai").expect;
var ConvertHandler = require("../controllers/convertHandler.js");
var helmet = require("helmet");

module.exports = function(app) {
  //prevent sniffing the MIME type and XSS attacks
  app.use(helmet());
  app.use(helmet.noSniff());
  app.use(helmet.xssFilter());

  var convertHandler = new ConvertHandler();

  app.route("/api/convert").get(function(req, res) {
    var input = req.query.input;
    var initNum = convertHandler.getNum(input);
    var initUnit = convertHandler.getUnit(input);
    var returnNum = convertHandler.convert(initNum, initUnit) || "";
    var returnUnit = convertHandler.getReturnUnit(initUnit) || "";
    var initSpellOut = convertHandler.Unit(initUnit) || "";
    var returnSpellOut = convertHandler.Unit(returnUnit) || "";
    var toString = convertHandler.getString(
      initNum,
      initSpellOut,
      returnNum,
      returnSpellOut
    );

    if (initNum == "invalid number" && initUnit === "invalid unit") {
      res.json("invalid number and invalid unit");
      return;
    } else if (initNum == "invalid number") {
      res.json("invalid number");
      return;
    } else if (initUnit == "invalid unit") {
      res.json("invalid unit");
      return;
    } else {
      res.json({
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string: toString
      });
    }
  });
};
