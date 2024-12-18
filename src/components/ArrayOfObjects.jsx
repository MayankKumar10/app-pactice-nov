import React from 'react'

function ArrayOfObjects() {

  const shareInfo = [
    { shareHolder: "Tom", share: "AAA" },
    { shareHolder: "Garry", share: "ABA" },
    { shareHolder: "John", share: "AAA" },
    { shareHolder: "Doe", share: "ABA" },
    { shareHolder: "Tom", share: "BBA" },
    { shareHolder: "Billy", share: "ABA" },
  ];


  const sharHoldersDetails = (arr) => arr.reduce((acc, {share, shareHolder})=> {
    if(!acc[share]){
      acc[share] = {share, shareHolders:[shareHolder]}
    } else  acc[share].shareHolders.push(shareHolder)
    return acc
  },{})

  console.log("sharHoldersDetails", sharHoldersDetails(shareInfo))


  const studentInfo = [
    { name: "Alice", subject: "Math", score: 90 },
    { name: "Bob", subject: "Science", score: 85 },
    { name: "Alice", subject: "Science", score: 92 },
    { name: "Charlie", subject: "Math", score: 88 },
    { name: "Bob", subject: "Math", score: 95 },
    { name: "Charlie", subject: "Science", score: 88 },
  ];
  const studentsHighestScore = (arr) => arr.reduce((acc, {name, subject, score})=>{
    !acc[subject] || score > acc[subject].score ? acc[subject] = {name, score} : acc
    return acc
  },{})

  console.log("studentsHighestScore", studentsHighestScore(studentInfo) )



  const employeeInfo = [
    { name: "Alice", department: "HR", salary: 50000 },
    { name: "Bob", department: "IT", salary: 60000 },
    { name: "Charlie", department: "IT", salary: 65000 },
    { name: "David", department: "HR", salary: 55000 },
    { name: "Eve", department: "Finance", salary: 70000 },
    { name: "Frank", department: "HR", salary: 60000 },
    { name: "Grace", department: "Finance", salary: 75000 },
  ];

  const employeeHighestSalary = (arr) => {
    let employeeTotalSalary = arr.reduce((acc, { department, salary})=>{
    !acc[department] ? acc[department] = { totalSalary: salary, employeeCount: 0 } : acc[department].totalSalary += salary, acc[department].employeeCount +=1;

    return acc
  }, {})

  for(let department in employeeTotalSalary) {
    const { totalSalary, employeeCount } =  employeeTotalSalary[department]
    employeeTotalSalary[department] = { averageSalary: totalSalary / employeeCount, employeeCount } 
  }

  return employeeTotalSalary

}

  console.log("employeeHighestSalary", employeeHighestSalary(employeeInfo) )


  
  const salesTransactions = [
    { product: "Widget", quantity: 2, price: 10 },
    { product: "Gadget", quantity: 3, price: 15 },
    { product: "Widget", quantity: 1, price: 12 },
    { product: "Gadget", quantity: 2, price: 18 },
    { product: "Doodad", quantity: 4, price: 8 },
  ];

  const totalRevenue = (arr) => arr.reduce((acc, {product, quantity, price})=>{
    if(!acc[product]) {
      acc[product] = { totalRevenue: price * quantity, totalQuantity: quantity}
    } else {
      acc[product].totalRevenue += price * quantity, 
      acc[product].totalQuantity += quantity
    }
    return acc
  }, {})

  console.log("totalRevenue", totalRevenue(salesTransactions))

  return (
    <div>
      <h4>Array Of Objects</h4>
    </div>
  )
}

export default ArrayOfObjects
