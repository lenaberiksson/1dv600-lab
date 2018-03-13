/**
 * Module for the Library storage helper.
 *
 * @author Lena Eriksson
 * @version 1.1.0
 */
(function () {
    "use strict";

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');


    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(xmlfile, callback) {

            var parser = new xml2js.Parser();

            fs.readFile(xmlfile, "utf-8", function (error, text) {
                if (error) {
                    throw error;
                } else {
                    parser.parseString(text, function (err, result) {
                        callback(result);
                    })
                }
            })
        },

        // Write the entire file from the file system.
        writeXMLFile: function(xmlfile, data, callback) {
            
            var builder = new xml2js.Builder();
            var xml = builder.buildObject(data);
        
            fs.writeFile(xmlfile, xml, function(error, data){
                if (error) {
                    throw error;
                } else {
                    callback();
                }
            })
        }
    };

    module.exports = LibraryDAO;
}());
