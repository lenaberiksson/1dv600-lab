// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

var app = require("../app");


describe("RemoveBook Resource", function () {

    describe("DELETE /api/books/11", function () {

        it("delete book", function (done) {

            request(app)
                .delete('/api/books/11')
                .expect(200, {},done);
        });
    });
});