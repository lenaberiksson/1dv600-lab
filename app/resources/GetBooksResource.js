(function () {
  "use strict";

  var LibraryDAO = require('../dao/LibraryDAO');
  var bookListHelper = require('./bookListHelper');
  
  module.exports = function getBooks (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
    var books = [];
    var xmlfile = __dirname + "/../../books.xml";
    
    LibraryDAO.readXMLFile(xmlfile, function (result) {
      var xmlBooks = result['catalog']['book'];
      books = bookListHelper.getBookList(xmlBooks); 
      var bookList = JSON.stringify(books);
      callback(bookList);
    })
           
  };
}());
