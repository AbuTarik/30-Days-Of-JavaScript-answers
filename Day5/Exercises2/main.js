import { countries } from './countries.js';
import { webTechs } from './web_techs.js';

console.log(countries)

//2 
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let cleanedText = text.replace(/[^\w\s]/g, "");
let words = cleanedText.split(" ");
console.log(words);
console.log(words.length)
//3
// add 'Meat' in the beginning of your shopping cart if it has not been already added
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (shoppingCart.includes(`Meat`) == true) {
    console.log(`Meat is Already in the array`)
}
else {
    shoppingCart.unshift(`Meat`)
    console.log(shoppingCart)
}
//add Sugar at the end of you shopping cart if it has not been already added
if (shoppingCart.includes(`sugar`) == true) {
    console.log(`sugar is Already in the array`)
}
else {
    shoppingCart.push(`sugar`)
    console.log(shoppingCart)
}
//remove 'Honey' if you are allergic to honey
console.log(shoppingCart.slice(4,5))
//modify Tea to 'Green Tea'
const Green = shoppingCart.indexOf(`Tea`)
if (Green !== -1) {
    shoppingCart[Green] = `Green Tea`
    console.log(shoppingCart)
}
else {
    console.log(`There is no Tea in the array`)
}
//4 
if (countries.includes(`ETHIOPIA`) == true) {
    console.log(`ETHIOPIA is Already in the array`)
}
else {
    countries.push(`ETHIOPIA`)
    console.log(countries)
}
//5
if (webTechs.includes(`Sass`) == true) {
    console.log(`Sass is a CSS preprocess`)
}
else {
    webTechs.push(`Sass`)
    console.log(webTechs)
}
//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);
