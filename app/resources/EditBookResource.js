/**
 * Module for editing a book.
 *
 * @author Lena Eriksson
 * @version 1.1.0
 */
(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var bookDataHelper = require('./bookDataHelper');

    module.exports = function (id, data, callback) {

        var xmlfile = __dirname + "/../../books.xml";

        // Get books from xml file
        LibraryDAO.readXMLFile(xmlfile, function (result) {
            var xmlBooks = result['catalog']['book'];
            
            for (var i=0; i<xmlBooks.length; i++) {
                if (result.catalog.book[i].$.id == id) {
                    // Update book information
                    result.catalog.book[i] = bookDataHelper.updateBookData(data)
                }
            }
            
            // Write books to xml file
            LibraryDAO.writeXMLFile(xmlfile, result, function () {
                callback();
            })
        })

    };

}());
