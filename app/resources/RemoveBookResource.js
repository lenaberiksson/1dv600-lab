/**
 * Module for removing book from library.
 *
 * @author Lena Eriksson
 * @version 1.1.0
 */
(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var bookListHelper = require('./bookListHelper');
    
    module.exports = function (id, callback) {
        var books = [];
        var xmlfile = __dirname + "/../../books.xml";

        // Get books from xml file
        LibraryDAO.readXMLFile(xmlfile, function (result) {
            var xmlBooks = result['catalog']['book'];
            
            for (var i=0; i<xmlBooks.length; i++) {
                if (result.catalog.book[i].$.id == id) {
                    // Remove book
                    result.catalog.book.splice(i,1);
                }
            }

            // Create book list
            books = bookListHelper.getBookList(xmlBooks); 
            
            // Write books to xml file
            LibraryDAO.writeXMLFile(xmlfile, result, function () {
                callback();
            })
        })
    }
}());