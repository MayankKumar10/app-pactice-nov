import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../app/ProductSlice'

export const ProductsSearch = () => {
  const [search, setSearch] = useState("")
  const {products, status, error} = useSelector((state)=> state.products)
  const [allData, setAllData] = useState([])
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  useEffect(()=>{
    setAllData([...products])
  },[ products])

  
  const handleSearch = (e) => {
    setSearch(e.target.value)
    let filterData = products.filter((product)=> product.title.toLowerCase().includes(search.toLowerCase()))
    setAllData([...filterData])
  }


  return (
    <div>
      <h4>ProductsSearch</h4>
      <input type="text" placeholder='Search' value={search} onChange={handleSearch}/>
      {
        allData && allData.map((product)=> (
          <div key={product.id}>
            <h4>{product.id}</h4>
            <p>{product.title}</p>
          </div>
        ))
      }
    </div>
  )
}
