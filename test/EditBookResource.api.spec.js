
// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

var app = require("../app");


describe("EditBook Resource", function () {

    describe("POST /api/books/11", function () {

        it("edit book", function (done) {

            request(app)
                .post('/api/books/11')
                .send({'id': '11', 
                'title': 'Programming Rust',
                'author': 'Jim Blandy , Jason Orenddorff',
                'genre': 'Education',
                'publish_date': '2017-12-21',
                'price': '600',
                'description': 'Rust programming language'})
                .expect(200, {},done);
        });
    });
});