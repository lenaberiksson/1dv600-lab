(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Book = require('../dao/book');
    var bookDataHelper = require('./bookDataHelper');


    module.exports = function (data, callback) {
        var books = [];
        var xmlfile = __dirname + "/../../books.xml";

        LibraryDAO.readXMLFile(xmlfile, function (result) {
            var xmlBooks = result['catalog']['book'];
            
            var existingBooks = xmlBooks.slice();
            bookDataHelper.formatData(data); 
            var dataValid = bookDataHelper.validateData(data, existingBooks);
            
            if (dataValid) {
                var id = bookDataHelper.getFreeId(existingBooks);
    
                result.catalog.book.push(bookDataHelper.updateBookData(data, id));
                
                LibraryDAO.writeXMLFile(xmlfile, result, function () {
                    callback();
                })
            } else {
                callback();
            }
        })

    };

}());
