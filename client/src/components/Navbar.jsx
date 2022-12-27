import { Badge } from '@material-ui/core'
import { Search, ShoppingCart } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    height: 60px;
    background-color: white;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`
const Input = styled.input`
    border: none;
    outline: none;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`
const ShoppingCartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f8f4f4;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 20px;
`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <SearchContainer>
                    <Input placeholder="Search for products, brands and more" />
                    <Search />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>MyShop.</Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                    <ShoppingCartContainer>
                        <Badge badgeContent={9} color='primary'>
                        <ShoppingCart />
                        </Badge>
                    </ShoppingCartContainer>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
