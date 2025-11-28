let challenge = '30 Days Of JavaScript' 
console.log(challenge)                           // '30 Days Of JavaScript'
console.log(challenge.length)                    // 21
console.log(challenge.toUpperCase())             // '30 DAYS OF JAVASCRIPT'
console.log(challenge.toLowerCase())             // '30 days of javascript'
console.log(challenge.substring(3,7)) // 'Days'
console.log(challenge.includes('Script')) // true 
console.log(challenge.split()) // [ "30 Days Of JavaScript" ]
console.log(challenge.split(' ')) // [ '30', 'Days', 'Of', 'JavaScript' ]
let social = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(social.split(',')) // [ 'Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon' ]
console.log(challenge.replace('JavaScript', 'Python')) // 30 Days Of Python
console.log(challenge.charAt(15)) // S
console.log(challenge.charCodeAt(11)) // 74
console.log(challenge.indexOf('a')) // 4
console.log(challenge.lastIndexOf('a')) // 14
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because')) // 31
console.log(sentence.lastIndexOf('because')) // 47
console.log(sentence.search('because')) // 31
console.log(challenge.trim()) // '30 Days Of JavaScript'
console.log(challenge.startsWith('30')) // true
console.log(challenge.endsWith('Script')) // true
console.log(challenge.match(/a/gi)) // [ 'a', 'a', 'a', 'a' ]
console.log(challenge.concat(' is awesome')) // 30 Days Of JavaScript is awesome
console.log(challenge.repeat(2)) // 30 Days Of JavaScript30 Days Of JavaScript
