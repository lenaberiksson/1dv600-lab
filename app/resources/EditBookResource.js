(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var bookDataHelper = require('./bookDataHelper');

    module.exports = function (id, data, callback) {

        var xmlfile = __dirname + "/../../books.xml";

        LibraryDAO.readXMLFile(xmlfile, function (result) {
            var xmlBooks = result['catalog']['book'];
            
            for (var i=0; i<xmlBooks.length; i++) {
                if (result.catalog.book[i].$.id == id) {
                    result.catalog.book[i] = bookDataHelper.updateBookData(data)
                }
            }
            
            LibraryDAO.writeXMLFile(xmlfile, result, function () {
                callback();
            })
        })

    };

}());
