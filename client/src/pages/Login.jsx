import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styled from 'styled-components'
import { loginCall } from '../redux/apiCalls'


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
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const { isFetching, error } = useSelector(state => state.user)
    
    if (error) {
        toast.error(error)
    }
    const dispatch = useDispatch()
    const handleLogin = (e) => {
        e.preventDefault()
       loginCall({username, password}, dispatch)
    }
  return (
    <Container>
        <Wrapper>
            <Title>Login</Title>
            <Form>
                
                <Input onChange={(e) => {setUsername(e.target.value)}} placeholder="username" />
                <Input onChange={(e) => {setPassword(e.target.value)}} placeholder="password" />
            
               
                <Button onClick={handleLogin}> {isFetching ? 'loggin in' : 'login'} </Button>
                <Link>Forgot password?</Link>
            </Form>
        </Wrapper>
      
    </Container>
  )
}

export default Login
