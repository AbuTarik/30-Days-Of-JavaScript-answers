let lover = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
console.log(lover.match(/Love/gi).length)

let because = 'You cannot end a sentence with because because because is a conjunction'
console.log(because.match(/because/gi).length)

const sentene = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentene.replace(/[%$@;!?#&]/g,''))

const words = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';

const numbers = words.match(/\d+/g)
const monthly = parseInt(numbers[0])
const bouns = parseInt(numbers[1])
const tmonth = parseInt(numbers[2])

const tmony = monthly * 12
const montht = tmonth * 12 


const totale = tmony + bouns + montht
console.log(totale)
