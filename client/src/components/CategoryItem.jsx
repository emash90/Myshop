import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { categories } from '../data'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 3px;
    height: 70vh;
    background-color: #f5fafd;
    position: relative;
`
const Image = styled.img`
    width: 100%;
   height: 100%;
    object-fit: contain;
`
const Info = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 100%;
    font-size: 12px;
    font-weight: 500;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    font-weight: bold;
    font-size: large;
    padding: 10px;
`
const Title = styled.h3`
    margin-top: 10px;
    font-weight: 500;
`
const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: teal;
    color: white;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
`


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
        </Link>
    </Container>
    
  )
}

export default CategoryItem
