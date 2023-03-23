/*
FILENAME:     cipher.js
PURPOSE:      cipher params from web tp
AUTHOR:       Eric Phung
CREATED:      12/15/2022 11:50 AM
*/
function getJsonFromQuery(query = '') {
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}


function encryptParams(paramStr = '') {
	return btoa(paramStr);
}

function decryptParams(str) {
	return atob(str)
}

// encrypt
let a = encryptParams("apikey=1234abcd");
console.log(a); // ==> Y2F0ZWdvcnk9dGV4dGlsZSZ1c2VyPXVzZXIx


// decrypt
let b = decryptParams("wklzpzlvgRCPC4gKnsQ")
// let b = decryptParams('c3VjY2Vzcz10cnVlJnRva2VuX2lkPVcxQWp3emxwYnEyOW44NzhiWWI5d3cmcHJlc3M9c3VibWl0')
// let b = decryptParams('c3VjY2Vzcz10cnVlJnRva2VuaWQ9eEZzcXhtbHJnUzRGMDE1MmJUWHRTUQ==')
console.log(b); // ==> category=textile&user=user1


// get json
let c = getJsonFromQuery(b)
console.log('c: ', c);


// https://.../create_payment_method?YXBpa2V5PTEyMzRhYmNk