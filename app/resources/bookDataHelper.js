(function () {
    "use strict";

    var Book = require('../dao/book');

    var bookDataHelper = {
        updateBookData: function (data, id) {
            var identity = {
                'id': data.id || id
            }
           let updatedData = {
               '$': identity,
               title: [data.title],
               author: [data.author],
               genre: [data.genre],
               publish_date: [data.publish_date],
               price: [data.price],
               description: [data.description]
           }
           return updatedData;
        }
    }

    module.exports = bookDataHelper;

}());