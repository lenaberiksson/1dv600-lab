/**
 * Module for book data helper.
 *
 * @author Lena Eriksson
 * @version 1.1.0
 */
(function () {
    "use strict";

    var bookDataHelper = {
        // Updates book data
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
        
        // Gets next free book id
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

        // Formats book data
        formatData: function (data) {
            if (!data.publish_date) {
                data.publish_date = ' '
            }
            if (Array.isArray(data.title)) {
                data.title = data.title[0];
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
        },

        // Validates book data
        validateData: function (data, books) {
            var valid = false;
            valid = this.validateTitle(data, books);
            if (valid) {
                valid = this.validatePrice(data);
            }
            return valid;  
        },

        // Validates book title
        validateTitle: function (data, books) {
            var valid = false;
            if (data.title) {
                for (var i=0; i<data.title.length; i++) {
                    if (data.title[i] != ' ') {
                        // Book title is not empty
                        valid = true;
                    }
                }
                if (valid) {
                    for (var i=0; i<books.length; i++) {
                        if (books[i].title == data.title) {
                            // Book title already exists
                            valid = false;
                        }
                    }
                }
            } 
            return valid;  
        },

        // Validates book price
        validatePrice: function (data) {
            var valid = true; 
            if (data.price) {
                if (isNaN(data.price)) {
                    valid = false;
                }
            }
            return valid;  
        }

    }

    module.exports = bookDataHelper;

}());