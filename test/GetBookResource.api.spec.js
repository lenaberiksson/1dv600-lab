
// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

var app = require("../app");


describe("GetBook Resource", function () {

    describe("GET /api/books/1", function () {

        it("respond with correct book data", function (done) {

            request(app)
                .get('/api/books/1')
                .set('Accept', 'application/json')
                .expect(200, {
                    $: {
                        id: '1'
                    },
                    title: ['Foundation'],
                    author: ['Isaac Asimov'],
                    genre: ['Science Ficition'],
                    publish_date: ['1951-08-21'],
                    price: ['164'],
                    description: ['Foundation is the first novel in Isaac Asimovs Foundation Trilogy (later expanded into The Foundation Series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the story of the Foundation, an institute to preserve the best of galactic civilization after the collapse of the Galactic Empire.']
                },done);

        });
    });
});