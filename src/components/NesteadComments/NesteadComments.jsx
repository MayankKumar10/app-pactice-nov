import React, { useRef, useState } from 'react'
import { Action } from './Action'

export const NesteadComments = ({comments, handleInsertNode, handleEditNode, handleDeleteNode}) => {
  const [input, setInput] = useState("")
  const [replyComment, setReplyComment] = useState(false)
  const [editComment, setEditComment] = useState(false)
  const ref = useRef()

  const onAddComments = () => {
    handleInsertNode(comments.id, input)
    setReplyComment(false)
    setInput("")
  }

  const onEditComments = () => {
    handleEditNode(comments.id, input)
    setInput("")
  }

  const onDeleteComments = () => {
    handleDeleteNode(comments.id)
    setInput("")
  }

  console.log("comments", comments)

  return (
    <div> 
      {
        comments?.id === 1 ?
        (
          <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
            <input 
             type="text" 
             value={input}
             autoFocus
             onChange={(e)=>setInput(e.target.value)}
            />
            <Action 
             className="reply" 
             type="Comment"
             handleClick={onAddComments}  
            />
          </div>
        ) :
        (
          <>
            <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
              <p>{comments.name}</p>
                <Action className="reply" type="reply" handleClick={()=>setReplyComment(true)} />
                <Action className="reply" type="edit" handleClick={onEditComments} />
                <Action className="reply" type="delete" handleClick={onDeleteComments} />               
            </div>
          </>
        )
      }

      <div style={{ marginLeft: "25px" }}>

        {
          replyComment && <>
                  <input type="text" autoFocus onChange={(e)=> setInput(e.target.value)} />
                  <Action className="reply" type="save" handleClick={onAddComments} />
                  <Action className="reply" type="delete" handleClick={()=> setReplyComment(false)} />
                </>
        }

        {comments?.items?.map((ob)=> (
          <NesteadComments 
           key={ob.id}
           comments={ob}
           handleInsertNode={handleInsertNode}
           handleEditNode={handleEditNode}
           handleDeleteNode={handleDeleteNode}
          />
        ) )}
      </div>
    </div>
  )
}
