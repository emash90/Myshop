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
const Title = styled.h1`
    font-weight: lighter;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ContactItem = styled.div`
    margin-top: 10px;
    display: flex;
    align-items: center;
`
const ContactEmail = styled.span`
    font-size: 14px;
`
const ContactPhone = styled.span`
    font-size: 14px;
`

const Payment = styled.img`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`


const Footer = () => {
  return (
    <Container>
        <Wrapper>
        <Left>
            <Logo>MyShop.</Logo>
        </Left>
        <Center>
            <p>Design By <b>emash90</b></p>
        </Center>
        <Right>
            <MenuItem>
                <Title>
                    <b>call</b>
                </Title>
                <ContactItem>
                    <ContactPhone style={{color: "teal", marginRight: "10px"}}/> +254 726 895 720
                </ContactItem>
            </MenuItem>
            <MenuItem>
                <Title>
                    <b>email</b>
                </Title>
                <ContactItem>
                    <ContactEmail style={{color: "teal", marginRight: "10px"}}/> emash90@gmail.com
                </ContactItem>
                </MenuItem>
            <MenuItem>
                <Title>
                    <b>Payment options</b>
                </Title>
                <ContactItem>
                    <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
                </ContactItem>
            </MenuItem>
        </Right>
        </Wrapper>

      
    </Container>
  )
}

export default Footer
