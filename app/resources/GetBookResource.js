/**
 * Module for viewing a book.
 *
 * @author Lena Eriksson
 * @version 1.1.0
 */
(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');

    module.exports = function (id, callback) {
        var bookData;
        var xmlfile = __dirname + "/../../books.xml";

        // Get books from xml file
        LibraryDAO.readXMLFile(xmlfile, function (result) {
            var xmlBooks = result['catalog']['book'];

            for (var i=0; i<xmlBooks.length; i++) {
                if (result.catalog.book[i].$.id == id) {
                    // Get book information
                    bookData = result.catalog.book[i];
                }
            }

            callback(bookData);
        })
    };

}());
