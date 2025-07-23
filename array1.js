// Arrays

const myArr =[0,1,2,3,4,5,6]
const myHeroes =["Saktimaan", "Nagraaj"]

const myarr2 = new Array(1,2,3,4,5)

console.log(myArr[3]);

//Arrays Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newarr = myArr.join() // join() make the array into string
// console.log(myArr)
// console.log(newarr)

//slice and splice difference
console.log("A", myArr);
const myn1 = myArr.slice(1,3) // slice does not change the original array 
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3) // splice changes the original array
console.log("C", myArr);
console.log(myn2)


