import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
   padding: 20px;
    display: flex;
    flex-wrap: wrap;
`

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const get_products = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/v1/product")
        //   headers: {
        //     token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
        //   }
        // })
        console.log(res)
        setProducts(res.data)
      } catch (error) {
        console.log(error)
        
      }
    }
    get_products()
  }, [])

  return (
    <Container>
        {popularProducts.map(item => (
            <Product item={item} key={item.id} />
        ))}
      
    </Container>
  )
}

export default Products
