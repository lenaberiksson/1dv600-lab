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
        },
        
        getFreeId: function (books) {
            var highestId = 1;
            for (var i=0; i<books.length; i++) {
                if (Number(books[i].$.id) > highestId) {
                    highestId = Number(books[i].$.id);
                }
            }
            highestId = highestId+1;
            return highestId.toString();
        },

        formatData: function (data) {
            if (!data.publish_date) {
                data.publish_date = ' '
            }
            if (Array.isArray(data.author)) {
                data.author = data.author[0];
            }
            if (Array.isArray(data.genre)) {
                data.genre = data.genre[0];
            }
            if (Array.isArray(data.publish_date)) {
                data.publish_date = data.publish_date[0];
            }
            if (Array.isArray(data.price)) {
                data.price = data.price[0];
            }
            if (Array.isArray(data.description)) {
                data.description = data.description[0];
            }
            
        }

    }

    module.exports = bookDataHelper;

}());