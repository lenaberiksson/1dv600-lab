(function () {
    "use strict";

    var Book = require('../dao/book');

    var bookListHelper = {
        getBookList: function (bookArray) {
            var books = [];
            for (var i=0; i<bookArray.length; i++) {
                books.push(new Book(bookArray[i].$.id, bookArray[i].title[0], bookArray[i].author[0], bookArray[i].genre[0], bookArray[i].publish_date[0], bookArray[i].price[0], bookArray[i].description[0]));
            }
    
            return books;
        }

    }

    module.exports = bookListHelper;

}());