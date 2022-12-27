import React from 'react'

import styled from 'styled-components'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.5),
        rgba(255,255,255,0.5)
        ),
        url("https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        `
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    `
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    `
const Input = styled.input`
    flex: 1;
    flex-direction: column;
    min-width: 80%;
    margin: 20px 0px;
    padding: 10px;
    `
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    `

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    `
const Link = styled.a`
    margin: 15px 10px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
    `


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Login</Title>
            <Form>
                
                <Input placeholder="username" />
                <Input placeholder="password" />
            
               
                <Button>Login</Button>
                <Link>Forgot password?</Link>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Login
