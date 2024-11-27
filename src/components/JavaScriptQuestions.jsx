import React from 'react'

export const JavaScriptQuestions = () => {

  let duplicate = (arr) => arr.reduce((acc, val)=> {
    return {...acc, [val]: (acc[val] || 0) + 1}
  },{})

  console.log("duplicate", duplicate([1,2,4,1,2,3,4,2,5,6,7,]))


  let consicutiveArr = (str) => {
    let strNew = []

    for(let i=0; i< str.length; i++){
      let char = str[i]
      if((i===0 || (char === str[i-1])) && (i === str.length - 1) || (char === str[i+1])) {
        strNew.push(char)
      }
    }
    return strNew.join("")
  }

  console.log("consicutiveArr", consicutiveArr("Adsdasdasaaa"))


  let sumArr = [1,2,3,4,5,6,7,8,9,10]

  let TwoSum = (arr, num) => {
    let newArr = new Map()

    for(let i=0; i< arr.length; i++){
      let remaining = num - arr[i]
      
      if(newArr.has(remaining)){
        return [newArr.get(remaining), i ]
      } 
      newArr.set(arr[i], i)
    }

    return []
  }

  console.log("TwoSum", TwoSum(sumArr, 10))

  let ArrOfTwoSum = (arr, num) => {
    let arrNew = []

    for(let i=0; i< arr.length; i++){
      for(let j=i+1; j< arr.length; j++){
        if(arr[i] + arr[j] === num){
          arrNew.push({i, j})
        }
      }
    }
    return arrNew
  }

  console.log("ArrOfTwoSum", ArrOfTwoSum(arrNew, 10))

  let maxSubString = (str) => {
    let currentLength, maxLength , start, maxStart = 0;
    let visited = {}

    for(let i=0; i< str.length; i++){
      let char = str[i]
      if(visited[char] === null || visited[char] < start){
        visited[char] = i;
        currentLength++;
      } else {

        if(currentLength > maxLength){
          maxLength = currentLength
          maxStart = start
        }
        
        currentLength = i - visited[char]
        start = visited[char] + i
        visited[char] = i

      }
    }
    if(currentLength > maxLength){
      maxLength = currentLength
      maxStart = start
    }

    return str.substr(maxStart, maxLength)
  }

  console.log("maxSubString", maxSubString("abcdabcds"))

  let PrimeNumArr = (arr, num) => {
    let isPrime = true

    if(num < 1) return arr
    if (num === 1){
      isPrime = false
    } else if ( num > 1) {
      for(let i = 2; i< arr.length; i++){
        if(num % i === 0){
          isPrime = false
          break
        }
      }
    }

    if(isPrime) {
      arr.push(num)
    }

    return PrimeNumArr(arr, num-1)
  }

  console.log("Prime", PrimeNumArr([], 10))

  /*
  
  Tic tac toe
  Shuffle Cards
  Lift simulation 

  output based questions 
  currying
  promises

  javascript

  polyfill of 

  Promise.all
  Promise
  Reduce(with null)

  
  */

  //Polyfill

  Array.prototype.myMap = function(cb) {
    let arr = []

    for(let i=0; i < this.length; i++){
      arr.push(cb(this[i], i, this))  
    }
    return arr
  }

  Array.prototype.myFilter = function(cb) {
    let arr = []

    for(let i=0; i< this.length; i++){
      if(cb.call(this,this[i],i,this)){
        arr.push(this[i])
      }
    }
    return arr
  }

  Array.prototype.myReduce = function(cb, initialState){
    let acc = initialState;

    for(let i=0; i < this.length; i++){
      if(acc !== undefined){
        acc = cb.call( undefined, acc, this[i], i, this)
      } else {
        acc = this[i]
      }
    }
    return acc
  }
  
  const flattenArray = (arr, depth) => {
    let arrNew = []

    for(let i=0; i< arr.length; i++){
      if(depth > 1 && Array.isArray(arr[i])){
        arrNew = arrNew.concat(flattenArray(arr[i], depth-1))
      } else {
        arrNew.push(arr[i])
      }
    }
    return arrNew
  } 

  console.log("flattenArray", flattenArray([1,2,[3,4,[5,6, [7,8, [9, 10]]],11, 12], 13, 14], 4))

  let CountMaxInDuplicateArray = (arr) => {
    let duplicateNumber = arr.reduce((acc, val)=>{
      return {...acc, [val]: (acc[val] || 0) + 1}
    },{})

    let highestNum = Object.entries(duplicateNumber).reduce((curr, max)=> curr[1] > max[1] ? curr : max , [null, 0])

    return highestNum
  }
  
  console.log()


  let SumOfAllNaturalNumbers = (num) => (num * (num + 1))/2
  console.log("SumOfAllNaturalNumber", SumOfAllNaturalNumbers(10)) 
 
  const missingNum = (nums) => {
    let n = nums.length + 1
    let acceptedSum = (n* (n+1))/2
    let acctualSum = nums.reduce((acc, val)=> acc+= val, 0)
    let missingNum = acceptedSum - acctualSum
    return missingNum
  }

  console.log("missingNum", missingNum([9,6,4,2,3,5,7,0,1]))

  let fizzbuzz = (num) => {
    let arr = []

    for(let i=1; i<= num; i++){
      if(i % 3 === 0 && i % 5 === 0){
        arr.push("FizzBuzz")
      } else if(i % 3 === 0){
        arr.push("Fizz")
      } else if(i % 5 === 0){
        arr.push("Buzz")
      } else {
        arr.push(i)
      }
    }

    return arr
  }

  console.log("fizzbuzz", fizzbuzz(100))

  const add = (a, b=0) => b ? a+b : (next) => a+next 


    console.log("a+b",add(2, 5))
    console.log("a and b", add(2)(5))
    

  return (
    <div>
      <h4>JavaScript Questions</h4>
    </div>
  )
}
