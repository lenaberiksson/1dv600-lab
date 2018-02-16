(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Book = require('../dao/book');
    var fs = require('fs');
    var xml2js = require('xml2js');

    module.exports = function (id, callback) {
        var books = [];
        var xmlfile = __dirname + "/../../books.xml";
        var parser = new xml2js.Parser();
        fs.readFile(xmlfile, "utf-8", function (error, text) {
        if (error) {
            throw error;
        } else {
            parser.parseString(text, function (err, result) {
               
                var xmlBooks = result['catalog']['book'];

                var removeIndex = -1;
                for (var i=0; i<xmlBooks.length; i++) {
                    var test = result.catalog.book[i].$.id;
                    if (test == id) {
                        removeIndex = i;    
                    }
                }

                result.catalog.book.splice(removeIndex,1)

                var builder = new xml2js.Builder();
                var xml = builder.buildObject(result);

                var updatedXmlBooks = result['catalog']['book'];
            
                for (var i=0; i<updatedXmlBooks.length; i++) {
                    books.push(new Book(xmlBooks[i].$.id, xmlBooks[i].title[0], xmlBooks[i].author[0], xmlBooks[i].genre[0], xmlBooks[i].publish_date[0], xmlBooks[i].price[0], xmlBooks[i].description[0]));
                }

                fs.writeFile(xmlfile, xml, function(error, data){
                    if (error) {
                        throw error;
                    } else {
                        var bookList = JSON.stringify(books);
                        callback(bookList);
                    }
                })
            })
          }
        })
    };

}());
