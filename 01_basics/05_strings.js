const name = "anjani"
const repoCount = 1

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('anjani-as-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-13, 4)
console.log(anotherString);

const newStringOne = "   anjani    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anjanisha%20rma.com"

console.log(url.replace('%20', '-'))

console.log(url.includes('anj'))

console.log(gameName.split('-'));