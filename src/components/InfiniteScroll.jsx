import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../app/ProductSlice'

export const InfiniteScroll = () => {
  const {products, status, error} = useSelector((state)=> state.products)
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [data, setData] = useState([]);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])


  useEffect(()=>{
    
    const newData = products.slice(page * limit - limit, page * limit)

    setData((prevData)=>{
      const exitingIds = new Set(prevData.map((product)=> product.id))
      const filterData = newData.filter((product)=> !exitingIds.has(product.id))
      return [...prevData, ...filterData]
    })

  },[products, page, limit])

  

  // (window.innerHeight + window.scrollY) >= document.body.offsetHeight -30)

  const handleScroll = () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 30){
      setPage((prev)=> prev + 1)
    }
  }

  useEffect(()=>{

    window.addEventListener("scroll", handleScroll)

    console.log("scroll", page)

    return ()=> window.removeEventListener("scroll", handleScroll)

  },[])


  return (
    <div>
      <h4>InfiniteScroll</h4>
      {
        data.length > 0 && data.map((product)=> (
          <div key={product.id}>
            <h4>{product.id}</h4>
            <p>{product.title}</p>
          </div>
        ))
      }
    </div>
  )
}
