(function () {
  'use strict'

  let LibraryDAO = require('../dao/LibraryDAO')
  const Book = require('../dao/book')

  module.exports = function getBooks (callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
    let books = []
    books.push(new Book('9781491927281', 'Programming Rust', 'Jim Blandy , Jason Orenddorff ', 'Education', '2017-12-21', '538', 'Rust programming language'))
    books.push(new Book('9781617294433', 'Deep learning with Python', 'Francois Chollet', 'Education', '2018-01-10', '450', 'Deep learning using Python programming language'))
    books.push(new Book('9781118087886', 'Big Java Late Objects', 'Cay S Horstmann', 'Education', '2012-01-11', '587', 'Introduction to Java and computer programming'))
    books.push(new Book('9789144105567', 'Webbutveckling med PHP and MySQL', 'Montathar Faraon', 'Education', '2016-11-29', '313', 'Introduction to PHP and database handling'))
    books.push(new Book('9780201633610', 'Design Patterns', 'Erich Gamma', 'Education', '1995-01-03', '488', 'Design patterns for object-oriented systems'))
    // console.log(books) // Assignment 1 Task 1 Subtask A
    // let bookList = JSON.stringify(books, null, 2) // Assignment 1 Task 1 Subtask B
    // console.log(bookList) // Assignment 1 Task 1 Subtask B
    let bookList = JSON.stringify(books)
    callback(bookList)
  }
}())
