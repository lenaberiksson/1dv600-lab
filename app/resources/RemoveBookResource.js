(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Book = require('../dao/book');
    var bookListHelper = require('./bookListHelper');
    var fs = require('fs');
    var xml2js = require('xml2js');

    module.exports = function (id, callback) {
        var books = [];
        var xmlfile = __dirname + "/../../books.xml";

        LibraryDAO.readXMLFile(xmlfile, function (result) {
            var xmlBooks = result['catalog']['book'];
            
            for (var i=0; i<xmlBooks.length; i++) {
                if (result.catalog.book[i].$.id == id) {
                    result.catalog.book.splice(i,1);
                }
            }

            books = bookListHelper.getBookList(xmlBooks); 
            
            LibraryDAO.writeXMLFile(xmlfile, result, function () {
                var bookList = JSON.stringify(books);
                callback(bookList);
            })
        })
    }
}());