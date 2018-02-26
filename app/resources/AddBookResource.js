(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Book = require('../dao/book');
    var bookDataHelper = require('./bookDataHelper');
    // var bookListHelper = require('./bookListHelper');


    module.exports = function (data, callback) {
        var books = [];
        var xmlfile = __dirname + "/../../books.xml";

        LibraryDAO.readXMLFile(xmlfile, function (result) {
            var xmlBooks = result['catalog']['book'];
            
            result.catalog.book.push(bookDataHelper.updateBookData(data, xmlBooks.length+1));
            
            LibraryDAO.writeXMLFile(xmlfile, result, function () {
                callback();
            })
        })

    };

}());
