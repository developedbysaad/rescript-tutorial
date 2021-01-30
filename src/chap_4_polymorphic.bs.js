// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

var languagesAndAuthors = [
  [
    "Java",
    "James Gosling"
  ],
  [
    "C",
    "Dennis Ritchie"
  ],
  [
    "Python",
    "Guido van Rossum"
  ],
  [
    "PHP",
    "Rasmus Lerdorf"
  ],
  [
    "Perl",
    "Larry Wall"
  ],
  [
    "JavaScript",
    "Brendan Eich"
  ],
  [
    "Ruby",
    "Yukihiro Matsumoto"
  ],
  [
    "Lisp",
    "John McCarthy"
  ],
  [
    "Pascal",
    "Niklaus Wirth"
  ]
];

var arrayLength = languagesAndAuthors.length;

var arrayFirstItem = Caml_array.get(languagesAndAuthors, 0);

var arrayLastItem = Caml_array.get(languagesAndAuthors, arrayLength - 1 | 0);

function pairToString(param) {
  return param[0] + ": " + param[1];
}

languagesAndAuthors.map(pairToString);

console.log(Belt_Array.map(languagesAndAuthors, pairToString));

exports.languagesAndAuthors = languagesAndAuthors;
exports.arrayLength = arrayLength;
exports.arrayFirstItem = arrayFirstItem;
exports.arrayLastItem = arrayLastItem;
exports.pairToString = pairToString;
/* arrayLength Not a pure module */
