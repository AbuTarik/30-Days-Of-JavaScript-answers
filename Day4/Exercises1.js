// 1
let UserAge = prompt("Enter ur age:") ;
UserAge = Number(UserAge) ;
let YearsDiff = 18 - UserAge
if(UserAge >= 18) {
    console.log(`You are old enough to drive`)
}
else {
    console.log(`You are left with ${YearsDiff} years to drive.`)
}

// 2
let myAge = 20 ;
if (myAge > UserAge) {
    console.log(`I\`m Older than you by ${myAge - UserAge}`)
}
else if(UserAge > myAge) {
    console.log(`You are ${UserAge - myAge} years older than me.`)
}
else {
    console.log(`we are the same age`)
}

// 3
let a = 4
let b = 3
if (a > b) {
    console.log(`${a}is greater than ${b}`)
}
else {
    console.log(`${b}is greater than ${a}`)
}

a > b 
? console.log(`${a}is greater than ${b}`)
: console.log(`${b}is greater than ${a}`)

// 4
let Numbers = prompt(`Enter Your Number:`)
Numbers = parseInt(Numbers) ;
if (Numbers % 2 == 0 ) {
    console.log(`${Numbers} is an even Number.`)
}
else {
    console.log(`${Numbers} is an odd Number.`)
}