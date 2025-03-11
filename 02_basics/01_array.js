let array = [2,5,3,7,4,3]
// console.log(array[0])
// console.log(array[1])
// console.log(array[6]) // undefined

let cartoon = ["motu-patlu", "choota-bhim", 2]
// console.log(cartoon[0])
// console.log(cartoon[2])

let array2 = new Array(2,55,"Anjani");
// console.log(array2[1])
// console.log(array2[2])

array2.push("kumar");
// console.log(array2);

//array2.pop()
//console.log(array2)

// console.log(array2.join());
// console.log(array2)

// slice , splice

const mna = new Array(array2.slice(1,4))
console.log(mna)
console.log(array2)

const mna2 = new Array(array2.splice(1,3))
console.log(mna2)
console.log(array2)