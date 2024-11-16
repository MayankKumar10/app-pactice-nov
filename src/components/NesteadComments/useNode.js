
const useNode = () => {

  const addComment = (tree, commentId, item) => {

    console.log("cycle1",{tree, commentId, item})

    if(tree.id === commentId){
      tree.items.push({
        id: Date.now(),
        name: item,
        items: []
      })

      return tree
    }

    let latestNode = [];

    latestNode = tree.items?.map((ob)=> {
     return addComment(ob, commentId, item)
    })


    console.log("cycle2",{tree})


    return { ...tree, items: latestNode}
    
  }

  const editComment = (tree, commentId, value) => {

    if(tree.id === commentId){
      tree.name = value

      return tree
    }

    tree.items?.map((ob)=> editComment(ob, commentId, value) )

    return { ...tree }

  }

  const deleteComment = (tree, id) => {
    
    for(let i=0; i < tree.items.length; i++){
        const comment = tree.items[i]

        if(comment.id === id){
          tree.items.splice(i, 1)

          return tree
        } else {
          deleteComment( comment, id )
        }
    }
    return tree
  }

  return { addComment, editComment, deleteComment }

}

export default useNode