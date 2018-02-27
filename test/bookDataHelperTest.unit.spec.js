var expect    = require("chai").expect;
var bookDataHelper = require("../app/resources/bookDataHelper");

describe("validatePrice tests", function () {

    describe("The test checks that book price data is valid", function () {

        var valid;
        var identity = {
            'id': '1'
        }

        var bookObject = {
            '$': identity,
            'title': ['Programming Rust'],
            'author': ['Jim Blandy , Jason Orenddorff'],
            'genre': ['Education'],
            'publish_date': ['2017-12-21'],
            'price': ['bad price'],
            'description': ['Rust programming language']
        }

        // calling the tested method
        valid = bookDataHelper.validatePrice(bookObject);

        it("should return false if no number in price", function () {
            expect(valid).to.equal(false);
        });
        
    });
});