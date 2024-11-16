import React, { useEffect, useRef, useState } from 'react'

export const Stopwatch = () => {
  const [time, setTime] = useState(0)
  const [display, setDisplay] = useState("00hrs:00min:00sec")
  const [input, setInput] = useState("")
  const timeRef = useRef()

  let start = () => {
    timeRef.current = setInterval(()=> setTime((prev)=> prev+1), 1000)
  }

  let stop = () => {
    clearInterval(timeRef.current)
  }

  let reset = () => {
    clearInterval(timeRef.current)
    setTime(0)
  }

  let inputHandler = (e) => {
    let { value } = e.target

    let changeInput = value.replace(/[^0-9]g/, "")
    setInput(Number(changeInput))
  }

  let addValue = () => {
    setTime((prev)=> prev + Number(input))
    setInput("")
  }

  let changeDisplay = () => {
    let hrs = Math.floor(time/3600)
    let mins = Math.floor(time/60)
    let sec = time%60

     setDisplay(`${hrs}hrs:${mins}min:${sec}sec`)
  }

  useEffect(()=>{
    changeDisplay()
  },[time])

  return (
    <div>
      <h4>Stopwatch</h4>
      <p>{display}</p>

      <input type="text" value={input} onChange={inputHandler} />
      <button type="button" onClick={addValue}>Add Value</button>
      <button type="button" onClick={start}>Start</button>
      <button type="button" onClick={stop}>Stop</button>
      <button type="button" onClick={reset}>Reset</button>
    </div>
  )
}
