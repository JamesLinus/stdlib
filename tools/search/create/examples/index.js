'use strict';

var lunr = require( 'lunr' );
var path = require( 'path' );
var tokenizer = require( './../lib/tokenizer.js' );
var create = require( './../lib' );

lunr.tokenizer.registerFunction( tokenizer, 'readme_tokenizer' );
lunr.tokenizer.load( 'readme_tokenizer' );

create({
	'dir': path.resolve( __dirname, './../../../../lib/node_modules/@stdlib' )
}, onIndex );

function onIndex( error, idx ) {
	var store;
	if ( error ) {
		throw error;
	}
	idx.tokenizer = 'readme_tokenizer';
	store = lunr.Index.load( idx );
	console.log( store.search( 'encrypt' ) );
}
