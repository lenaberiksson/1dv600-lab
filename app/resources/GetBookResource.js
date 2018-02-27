(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    // var bookListHelper = require('./bookListHelper');


    module.exports = function (id, callback) {
        var bookData;
        var xmlfile = __dirname + "/../../books.xml";

        LibraryDAO.readXMLFile(xmlfile, function (result) {
            var xmlBooks = result['catalog']['book'];

            for (var i=0; i<xmlBooks.length; i++) {
                if (result.catalog.book[i].$.id == id) {
                    bookData = result.catalog.book[i];
                }
            }

            callback(bookData);
            //books = bookListHelper.getBookList(xmlBooks); 
            
            /*LibraryDAO.writeXMLFile(xmlfile, result, function () {
                callback();
            })*/
        })
    };

}());
