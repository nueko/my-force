#!/usr/bin/env node
var bruteForce = require('node-bruteforce')
var expand = require('expand-range')
var hasher = require('./hasher')

var hash = process.argv[2]
var ranges = process.argv.slice(3)

// pieces
ranges = ranges.map(function(range) {
  return (range.indexOf('..') === -1) ? range.split('') : expand(range) 
})

// flatten
ranges = [].concat.apply([], [expand('a..z'), expand('A..Z'), expand('0..9')])
console.log('Using chars:', ranges.join(' '))
hash = hash.toLocaleLowerCase().replace('*','')

bruteForce(ranges, function(value){
    if(hash == hasher(value)) {
        console.log('[ Yay!!! ] ', hash + ' = ' + value)
        return true;
    }
    
    return false;
});
