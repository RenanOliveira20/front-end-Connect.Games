import React, {useState} from 'react'
import { Background, Buttons, Input, Login, LoginBox, Logo, SignUp, Text } from './styles'
import logo from '../../images/connectLogo.jpeg'
import { Link } from 'react-router-dom'


const Home = () => {
    
    return (
        <Background>
            <Logo src ={logo}/>
            <LoginBox>
                <Text >
                    Login
                </Text>
                <Input type='text'/>
                <Text>
                    Password
                </Text>
                <Input type='password' />
                <Buttons>
                    <Login type="submit"><Link to = '/feed'>Login</Link></Login>
                    <SignUp><Link to = '/signup'>Sign Up</Link></SignUp>
                </Buttons>
            </LoginBox>
        </Background>
    )
}
export default Home