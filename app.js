'use strict';
console.log('Here\'s a hidden message');


/* Here's a 
multi-line
 comment */

 //console.log('This code is no longer active');


 let today = new Date();
 let formatDate = today.toDateString();
 let selectElement = document.getElementById('date');
 selectElement.innerHTML = formatDate;