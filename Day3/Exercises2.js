const now = new Date()

// 1 
let x = prompt('Enter base:')
let y = prompt('Enter height:')

x = Number(x)
y = Number(y)

let triangle = x * y * 0.5 ;
alert(triangle)

// 2
let a = prompt('Enter a side')
let b = prompt('Enter b side')
let c = prompt('Enter c side')

a = Number(a)
b = Number(b)
c = Number(c)

let perimeter = a + b + c 
alert(perimeter)

// 3

let length = prompt('Enter length') 
let width = prompt('Enter width') 

length = Number(length)
width = Number(width)

let rectangle = length * width 
let perimeters = (length + width) * 2
console.log(`permieter = ${perimeters} And The rectangle = ${rectangle}`)

// 4
// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let r = prompt('Enter the radius')
const pi = 3.14 
r = Number(r) 
let area = r * r * pi 
let circle = 2 * pi * r 
console.log(`The area = ${area} and the circle = ${circle}`) ; 

// 5 
let x_intercept = 1;
let y_intercept =-2;
let slope1 = 2;

// 6
let slope2 = (10 - 2)/(6-2);

// 7 
slope1 > slope2 
? console.log(`slope1 beggier than slope2`)
: console.log(`slope2 is bigger than slope2`)

// 8  
let x = 1;
let y = x**2  + 6*x + 9;
if (y == 0) console.log("y = 0 at x = ", x);

x = -3;
y = x**2  + 6*x + 9;
if (y == 0) console.log("y = 0 at x = ", x);

// 9 
let hours = prompt(`Enter hours:`)
let rph = prompt(`Enter rate per hour:`) // rph = rate per hour

hours = Number(hours)
rph = Number(rph)
let earning = hours * rph 
console.log(earning)

// 10
let name = prompt(`Type your name`)
name.length > 7 
? console.log(`your name is long`)
: console.log(`your name is short`)

// 11
let fName = 'Asabeneh'
let lName = 'Yetayeh'
fName.length > lName.length
? console.log(`Your first name, ${fName} is longer than your family name,${lName}`)
: console.log(`Your Last name ${lName} is longer than your first name ${fName}`)

// 12 
let myAge = 250
let yourAge = 25

myAge > yourAge 
? console.log(`I am ${myAge - yourAge} years older than you.`)
: console.log(`you are ${yourAge - myAge} years older than me`)

// 13 
let birth = prompt(`Enter you birth year`)
birth=Number(birth)
let young = now.getFullYear() - birth

young >= 18
? console.log(`You are ${young}. You are old enought to drive`)
: console.log(`You are ${young}. You will be allowed to drive after ${18 - young} years`)

// 14
let yrsLived = Number(prompt("Enter number of years you live: "));
console.log(`You lived ${yrsLived * 31536000} seconds!`);

// 15
let mins = now.getMinutes();
let hrs  = now.getHours();
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();

// i
console.log(`${year}-${month + 1}-${date} ${hrs}:${mins}`);
// ii
console.log(`${date}-${month+1}-${year} ${hrs}:${mins}`);
// iii
console.log(`${date}/${month+1}/${year} ${hrs}:${mins}`);