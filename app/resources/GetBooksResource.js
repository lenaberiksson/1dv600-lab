(function () {
  "use strict";

  var LibraryDAO = require('../dao/LibraryDAO');
  var Book = require('../dao/book');
  var bookListHelper = require('./bookListHelper');
  var fs = require('fs');
  var xml2js = require('xml2js');

  module.exports = function getBooks (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
    var books = [];
    /* books.push(new Book('9781491927281', 'Programming Rust', 'Jim Blandy , Jason Orenddorff ', 'Education', '2017-12-21', '538', 'Rust programming language'));
    books.push(new Book('9781617294433', 'Deep learning with Python', 'Francois Chollet', 'Education', '2018-01-10', '450', 'Deep learning using Python programming language'));
    books.push(new Book('9781118087886', 'Big Java Late Objects', 'Cay S Horstmann', 'Education', '2012-01-11', '587', 'Introduction to Java and computer programming'));
    books.push(new Book('9789144105567', 'Webbutveckling med PHP and MySQL', 'Montathar Faraon', 'Education', '2016-11-29', '313', 'Introduction to PHP and database handling'));
    books.push(new Book('9780201633610', 'Design Patterns', 'Erich Gamma', 'Education', '1995-01-03', '488', 'Design patterns for object-oriented systems')); */
    var xmlfile = __dirname + "/../../books.xml";
    var parser = new xml2js.Parser();
    fs.readFile(xmlfile, "utf-8", function (error, text) {
      if (error) {
          throw error;
      } else {
          parser.parseString(text, function (err, result) {
            var xmlBooks = result['catalog']['book'];
           
            books = bookListHelper.getBookList(xmlBooks)
            /*for (var i=0; i<xmlBooks.length; i++) {
              books.push(new Book(xmlBooks[i].$.id, xmlBooks[i].title[0], xmlBooks[i].author[0], xmlBooks[i].genre[0], xmlBooks[i].publish_date[0], xmlBooks[i].price[0], xmlBooks[i].description[0]));
            }*/
            
            var bookList = JSON.stringify(books);
            callback(bookList);
          })
        }
      })
            
    // console.log(books); // Assignment 1 Task 1 Subtask A
    // var bookList = JSON.stringify(books, null, 2); // Assignment 1 Task 1 Subtask B
    // console.log(bookList); // Assignment 1 Task 1 Subtask B
    // var bookList = JSON.stringify(books);
    // callback(bookList);
  };
}());
