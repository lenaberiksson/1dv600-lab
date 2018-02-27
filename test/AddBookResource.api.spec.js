
// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

var app = require("../app");


describe("AddBook Resource", function () {

    describe("PUT /api/books", function () {

        it("adds new book", function (done) {

            request(app)
                .put('/api/books')
                //.send({'$':{'id': 11}, 
                .send({ 
                'title': ['Programming Rust'],
                'author': ['Jim Blandy , Jason Orenddorff'],
                'genre': ['Education'],
                'publish_date': ['2017-12-21'],
                'price': ['538'],
                'description': ['Rust programming language']})
                .expect(200, {},done);
        });
    });
});