var expect    = require("chai").expect;
var bookListHelper = require("../app/resources/bookListHelper");

describe("getBookList tests", function () {

    describe("The test checks that books are put in the book list correctly", function () {

        var inputArray = [];
        var books = [];
            
        var identity1 = {
            'id': '1'
        }
        var identity2 = {
            'id': '2'
        }
        
        var bookObject1 = {
            '$': identity1,
            'title': ['Programming Rust'],
            'author': ['Jim Blandy , Jason Orenddorff'],
            'genre': ['Education'],
            'publish_date': ['2017-12-21'],
            'price': ['538'],
            'description': ['Rust programming language']
        }

        var bookObject2 = {
            '$': identity2,
            'title': ['Deep learning with Python'],
            'author': ['Francois Chollet'],
            'genre': ['Education'],
            'publish_date': ['2018-01-10'],
            'price': ['450'],
            'description': ['Deep learning using Python programming language']
        }

        inputArray.push(bookObject1);
        inputArray.push(bookObject2);

        // calling the tested method
        books = bookListHelper.getBookList(inputArray);

        // checks
        it("add correct number of books in the book list", function () {
            var arrayLength = books.length;
            expect(arrayLength).to.equal(2);
        });

        it("put correct titles in the book list", function () {
            var firstTitle = books[0].title
            expect(firstTitle).to.equal('Programming Rust');
            var secondTitle = books[1].title
            expect(secondTitle).to.equal('Deep learning with Python');
        });

        it("put correct authors in the book list", function () {
            var firstAuthor = books[0].author
            expect(firstAuthor).to.equal('Jim Blandy , Jason Orenddorff');
            var secondAuthor = books[1].author
            expect(secondAuthor).to.equal('Francois Chollet');
        });

        it("put correct genres in the book list", function () {
            var firstGenre = books[0].genre
            expect(firstGenre).to.equal('Education');
            var secondGenre = books[1].genre
            expect(secondGenre).to.equal('Education');
        });

        it("put correct publish date in the book list", function () {
            var firstPublishDate = books[0].publishDate
            expect(firstPublishDate).to.equal('2017-12-21');
            var secondPublishDate = books[1].publishDate
            expect(secondPublishDate).to.equal('2018-01-10');
        });

        it("put correct price in the book list", function () {
            var firstPrice = books[0].price
            expect(firstPrice).to.equal('538');
            var secondPrice = books[1].price
            expect(secondPrice).to.equal('450');
        });

        it("put correct description in the book list", function () {
            var firstDescription = books[0].description
            expect(firstDescription).to.equal('Rust programming language');
            var secondDescription = books[1].description
            expect(secondDescription).to.equal('Deep learning using Python programming language');
        });
    });
});