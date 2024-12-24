import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import useNode from './components/NesteadComments/useNode'
import { NesteadComments } from './components/NesteadComments/NesteadComments'
import { ProductsLikePage } from './components/ProductLikePage/ProductsLikePage'
import { EmployeeAddForm } from './components/EmployeeForm/EmployeeAddForm'
import { TodoWithLocalStorage } from './components/TodoWithLocalStorage'
import { Stopwatch } from './components/Stopwatch'
import { TrafficLight } from './components/TrafficLight'
import { TicTacToe } from "./components/TicTacToe/TicTacToe"
import "./components/TicTacToe/TicTacToe.module.css"
import { ProductsSearch } from './components/ProductsSearch'
import { Delhivery_Dec_Questions } from './components/Company Interviews/Productbased/Delhivery productbased/Delhivery_Dec_Questions'
import { InfiniteScroll } from './components/InfiniteScroll'

const comments = {
  id: 1,
  name: "first comment",
  items:[
    {
      id: 2,
      name: "first comment",
      items:[]
    },
    {
      id: 3,
      name: "first comment",
      items:[]
    }
  ]
}

function App() {
  const [commentsData, setCommentsData] = useState(comments)

  const { addComment, editComment, deleteComment } = useNode()

  const handleInsertNode = (commentId, Item) => {
    console.log("cycle1 App",{commentsData, commentId, Item})

    const finalComments =  addComment(commentsData, commentId, Item)
    return setCommentsData(finalComments)
  }

  const handleEditNode = (commentId, value) => {
    const finalComments =  editComment(commentsData, commentId, value)
    return setCommentsData(finalComments)
  }

  const handleDeleteNode = (commentId) => {
    const finalComments = deleteComment(commentsData, commentId)
    const temp = { ...finalComments }
    return setCommentsData(temp)
  }

  
  return (
    <>
      <div>
        {/* <NesteadComments
        comments={commentsData}
        handleInsertNode={handleInsertNode}
        handleEditNode={handleEditNode}
        handleDeleteNode={handleDeleteNode}
        /> */}

        {/* <ProductsLikePage /> */}

        {/* <EmployeeAddForm /> */}

        {/* <TodoWithLocalStorage /> */}

        {/* <Stopwatch /> */}

            {/* <TrafficLight /> */}

            {/* <TicTacToe /> */}

        {/* <ProductsSearch /> */}

      {/* Companies Interview Experiences */}

      {/* <Delhivery_Dec_Questions /> */}

          <InfiniteScroll />

      </div>
      <h4>App</h4>


    </>
  )
}

export default App
