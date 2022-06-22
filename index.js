// exercise 1

// let evenSum = 0

// for (let i = 11; i < 47; i++){
//   if(i % 2 == 0){
//     evenSum += i
//   }
// }

// console.log(evenSum)

// exercise 2

// let oddSum = 0

// for (let i = 109; i < 588; i++){
//   if(i % 2 == 0){
//     continue
//   }else{
//     console.log(i)
//     oddSum += i
//   }
// }

// console.log(oddSum)

// exercise 3

// const numbers = [1, 2, 3, 4, 5]
// const squares = []
// const roots = []

// for(let i = 0; i < numbers.length; i++){
//   squares.push(numbers[i]**2)
// }
// console.log(squares)


// for(let j = 0; j < squares.length; j++){
//   roots.push(Math.sqrt(squares[j]))
// }
// console.log(roots)

// exercise 4

// for (let i = 0; i <= 10; i++){
//   console.log(`3 x ${i} = ${3*i}`)
// }

// excersice 5

// for (let i = 0; i <= 10; i++){
//   for (let j = 0; j <= 10; j++){
//     console.log(`${i} x ${j} = ${i*j}`)
//   }
//   console.log("")
// }

// exercise 6

// let factNum = 7
// let factSum = 1

// for (let i = 1; i <= factNum; i++){
//   factSum *= i
// }
// console.log(`${factNum}! = ${factSum}`)


// exercise 7

// let factSum = 1

// for (let i = 0; i <= 8; i++){
//   for (let j = 1; j <= i; j++){
//     factSum *= j
//   }
//   console.log(`${i}! = ${factSum}`)
// }

// exercise 8

// let sumSq = 0

// for (let i = 5; i <= 10; i++){
//   sumSq += i**2
// }
// console.log(sumSq)

// exercise 9

// let sevenMultiples = 0

// for (let i = 100; i <= 1000; i++){
//   if(i % 7 == 0){
//     sevenMultiples +=1
//   }
// }
// console.log(sevenMultiples)


// exercise 10

// const min = 1
// const max = 6
// let biggerNumTotal = 0

// for( let i = 0; i < 20; i++){
//   const random = Math.floor(Math.random() * max) + min
//   if (random >= 5){
//     biggerNumTotal += random
//   }
// }
// console.log(biggerNumTotal)

// exercise 11
// la réponse sera:
// 10
// 34
// 17
// 30
// 14

// exercise 12

// la réponse sera:
// 12
// 24
// 33
// 39
// 42
// 0

// exercise 13

// la réponse sera:
// 0
// 3
// -3
// 2
// -2
// 5
// -4

// exercise 14

// let sumArm = 0

// for (let i = 0; i < 1000; i++){
//   // resetting the value
//   sumArm = 0
//   // length of the number
//   let lengthNum = i.toString().length
//   let sumNum = 0

//   for(let j = 0; j < lengthNum; j++){

//     // getting the number devided to one by one
//     let num = parseInt(i.toString().charAt(j))
//     sumNum += num**3
//   }

//   // adding the values got from each number to sumArm
//   sumArm += sumNum

//   // checking the armstrong value
//   if(i == sumArm){
//     console.log(`${i} is an armstrong number`)
//   }
// }



// exercise 15

let sumArm = 0

for (let i = 0; i < 10000; i++){
  // resetting the value
  sumArm = 0
  // length of the number
  let lengthNum = i.toString().length
  let sumNum = 0

  for(let j = 0; j < lengthNum; j++){

    // getting the number devided to one by one
    let num = parseInt(i.toString().charAt(j))
    //just replaced the 3 by number length
    sumNum += num**lengthNum
  }

  // adding the values got from each number to sumArm
  sumArm += sumNum

  // checking the armstrong value
  if(i == sumArm){
    console.log(`${i} is an armstrong number`)
  }
}
