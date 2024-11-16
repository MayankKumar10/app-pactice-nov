import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dislike, fetchProducts, like } from '../../app/ProductSlice'

export const ProductsLikePage = () => {
  let { products, status, error } = useSelector((state)=> state.products)
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(4)
  let dispatch = useDispatch()

  let ArrayLimit = Math.ceil(products.length/limit)

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  console.log(products)


  return (
    <div>
      <h4>ProductsLikePage</h4>
      {
        products.length > 0 && products.slice(page * limit - limit, page * limit).map((product)=>(
          <div key={product.id}>
            <h4>{product.id}</h4>
            <p>{product.title}</p>
            <button onClick={()=>dispatch(like({id: product.id}))}>like: {product.like}</button>
            <button onClick={()=>dispatch(dislike({id: product.id}))}>dislike: {product.dislike}</button>
          </div>
        ))
      }
      <div style={{ cursor: "pointer", color: "white"  }}>
        {page > 1 && <span onClick={()=>setPage(page+1)}>◀️</span>}
        {
          [...Array(ArrayLimit)].map((_,i)=>(
            <span key={i+1} onClick={()=>setPage(i+1)}>{i+1}</span>
          ))
        }
        {page < ArrayLimit && <span onClick={()=>setPage(page-1)}>▶️</span>}
      </div>
    </div>
  )
}
