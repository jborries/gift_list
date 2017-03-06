console.log('mongo connection, mongoose setup');

var mongoose = require('mongoose'),

    fs = require('fs'),
    path = require('path'),
    models_path = path.join( __dirname, "../models"),
    reg = new RegExp( ".js$", "i" ),
    dbURI = 'mongodb://localhost/gift_list';
    /*"bucket_lists" was the original dbURI name. Still exists in mongodb*/

mongoose.connect( dbURI );

fs.readdirSync( models_path ).forEach( function( file ) {
  if( reg.test( file ) ) {
    require( path.join( models_path, file ) );
  }
})
