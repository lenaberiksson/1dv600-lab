/**
 * Module for adding a new book.
 *
 * @author Lena Eriksson
 * @version 1.1.0
 */
(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var bookDataHelper = require('./bookDataHelper');

    module.exports = function (data, callback) {
        var books = [];
        var xmlfile = __dirname + "/../../books.xml";

        // Get books from XML file
        LibraryDAO.readXMLFile(xmlfile, function (result) {
            var xmlBooks = result['catalog']['book'];
            
            var existingBooks = xmlBooks.slice();
            bookDataHelper.formatData(data); 
            var dataValid = bookDataHelper.validateData(data, existingBooks);
            
            // Book data is valid
            if (dataValid) {
                var id = bookDataHelper.getFreeId(existingBooks);
    
                // Add new book
                result.catalog.book.push(bookDataHelper.updateBookData(data, id));
                
                // Write updated book list to xml file
                LibraryDAO.writeXMLFile(xmlfile, result, function () {
                    callback();
                })
            // Book data is not valid
            } else {
                callback();
            }
        })

    };

}());
