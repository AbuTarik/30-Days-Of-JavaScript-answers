// 1

let Grades = prompt(`Enter your Grade`)
Grades = parseInt(Grades)
if (Grades >= 90) {
    console.log(`your grade is ${Grades} you got an A`)
}
else if (Grades >= 70) {
    console.log(`your grade is ${Grades} you got an B`)
}
else if (Grades >= 60) {
    console.log(`your grade is ${Grades} you got an C`)
}
else if (Grades >= 50) {
    console.log(`your grade is ${Grades} you got an D`)
}
else {
    console.log(`your grade is ${Grades} you got an F`)
}

// 2

let checkseason = prompt(`Enter what month you want to check: `);
checkseason = checkseason.toLowerCase().trim();

switch (checkseason) {
    case 'september':
    case 'october':
    case 'november':
        console.log(`The month input is ${checkseason} and the season is Autumn.`);
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log(`The month input is ${checkseason} and the season is Winter.`);
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log(`The month input is ${checkseason} and the season is Spring.`);
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log(`The month input is ${checkseason} and the season is Summer.`);
        break;
    default:
        console.log(`Your input is wrong.`);
}

// 3 
let DayCheck = prompt(`What is the day  today?`)
DayCheck = DayCheck.toLocaleLowerCase().trim()

if (DayCheck == saturday || DayCheck == sunday) {
    console.log(`${DayCheck} is a weekend.`)
}
else {
    console.log(`${DayCheck} is a working day.`)
}