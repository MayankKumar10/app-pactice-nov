import React, { useEffect, useState } from 'react'

let LightJSON = {
  "red": {
    background: "red",
    next: "green",
    duration: 3000
  },
  "yellow": {
    background: "yellow",
    next: "red",
    duration: 500
  },
  "green": {
    background: "green",
    next: "yellow",
    duration: 4000
  }
}

export const TrafficLight = () => {
  const [light, setLight] = useState("red")

  useEffect(()=>{
    let { next, duration } = LightJSON[light]

    let currentLight = setTimeout(()=> setLight(next), duration)

    return () => clearTimeout(currentLight)

  },[light])

  return (
    <div>
      <h4>TrafficLight</h4>
      <div style={{ width:"80px", display: "flex",
      padding: ".25rem",
      flexDirection: "column",
      justifyContent: "center", alignItems: "center",
      gap: ".25rem", background: "black", borderRadius: "8px" }}>
        {
          Object.keys(LightJSON).map((color)=>(
            <div key={color.background} style={{  width: "50px", height: "50px", borderRadius: "50%", backgroundColor: light === LightJSON[color].background ? light : "#555" }}></div>
          ))
        }
      </div>
    </div>
  )
}
