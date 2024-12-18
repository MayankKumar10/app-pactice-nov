import { useState } from 'react'

export const Delhivery_Dec_Questions = () => {

  /*
  
  First Round: 1 hr
  
  debouncing and implementation

  data show in table 

  git questions like 
  git merge vs git rebase 
  git fetch 
  git pull



  Second Round: 1 hr

      const initialState = [
        { Name: "a", value: 10 },
        { Name: "b", value: 10 },
        { Name: "c", value: 10 },
        { Name: "a", value: 15 },
        { Name: "b", value: 10 },
        { Name: "c", value: 10 },
        { Name: "a", value: 15 },
        { Name: "a", value: 15 },
        ];

      For every unique name found
        1. Find Sum of values for each Name
        2. Find Median values for each Name
        3. Find the mean of values for each name
        Answer
        A: sum: 55, mean:13.75 median:15
        B: sum 20 mean 10 median 10
        C: sum 20 mean 10 median 10
        Write a 1 page app that has a text box as an input and a GO button.
        You need to paste the above JSON into the text field while using your app. 
        On clicking the GO button, you need to calculate the sum,mean,median for every unique name inside the JSON data and show it in the form of a table.


  */

  const [input, setInput] = useState([])
  const [data, setData] = useState([])

  let calculateSumMeanMedianState = (arr) => {
    let arr1 = arr.reduce((acc, {Name, value})=> {
      !acc[Name] && (acc[Name]=[])
      acc[Name].push(value)
      return acc
    },{})

    let data = Object.entries(arr1).map(([Name, values])=> {
      let sum = values.reduce((acc, val)=> acc+val, 0)

      let mean = sum / values.length

      let sortedArr = values.sort((a, b)=> a - b)
      let median = 0;
      let mid = Math.floor(sortedArr.length / 2)

      median = sortedArr.length % 2 === 0 ? (sortedArr[mid - 1] + sortedArr[mid]) / 2 : sortedArr[mid]

      return { Name, sum, median, mean }
    })

    console.log("check", data)
    return data
  }

  const handleSubmit = () => {

    try{
     let checkJSON = JSON.parse(input)
     if(!Array.isArray(checkJSON)) throw new Error("Not a JSON")
      
      let data = calculateSumMeanMedianState(checkJSON)
      setData(data)
    } catch (err) {
      console.log("Not a JSON", err)
    }

  }

  console.log("data", data)

  return (
    <div>
      <h4>Delhivery_Dec_Questions</h4>

      <div>
        <textarea cols="30" rows="10" value={input} onChange={(e)=> setInput(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      {
        <table style={{ border: "1px solid white" }}>
          <thead style={{ border: "2px solid red" }}>
            <tr style={{ border: "2px solid red" }}>
              <th>Name</th>
              <th>Sum</th>
              <th>Median</th>
              <th>Mean</th>
            </tr>
          </thead>
          <tbody style={{ border: "2px solid white" }}>
            {
              data.length > 0 && data.map(({Name, sum, median, mean}, i)=> (
                <tr key={i} style={{ border: "2px solid white" }}>
                  <td>{Name}</td>
                  <td>{sum}</td>
                  <td>{median}</td>
                  <td>{mean}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      }

    </div>
  )
}
