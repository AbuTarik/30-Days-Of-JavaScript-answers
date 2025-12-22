const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
// 1
const emptyarray = []
//2
const numbers = [1,2,3,4,5]
//3
console.log(numbers.length)
//4
console.log(numbers[0])
console.log(numbers[numbers.length-1])
const middleNum = Math.floor(numbers.length / 2)
console.log(numbers[middleNum])
//5
const mixedDataTypes =[
    `HTML`,
    1,
    `Ninja`,
    2,
    `Aswd`,
    3
]

console.log(mixedDataTypes.length)
//6
const itCompanies = [
    `Facebook`, 
    `Google`,
    `Microsoft`, 
    `Apple`, 
    `IBM`, 
    `Oracle`, 
    `Amazon`
]
//7
console.log(itCompanies)
//8
console.log(itCompanies.length)
//9
console.log(itCompanies[0])
console.log(itCompanies[itCompanies.length-1])
const MiddleComapny = Math.floor(itCompanies.length / 2)
console.log(itCompanies[MiddleComapny])
//10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);
//11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());
//12
console.log(itCompanies.toString())
//13
itCompanies.includes(`Facebook`) 
? console.log(`Facebook is exist`)
: console.log(`company is not found`)
//14
// I don`t know (i`m gonna back to it in the future!)
//15
console.log(itCompanies.sort())
//16
console.log(itCompanies.reverse())
//17
console.log(itCompanies.slice(0,3))
//18
console.log(itCompanies.slice(4,7))
//19
let midCompany = itCompanies.slice(parseInt(itCompanies.length/2));
console.log(midCompany);
//20 
console.log(itCompanies.shift())
//21
itCompanies.splice(parseInt(itCompanies.length/2)-1, 2);
console.log(itCompanies);
//22
console.log(itCompanies.pop())
//23
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);