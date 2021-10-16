import React, { useState } from 'react'
import logo from '../../images/connectLogo.jpeg'
import { useHistory } from 'react-router'
import api from '../../api/api'
import LoginForm from './Login'
const defaultForm = {
    email:'',
    password: ''
}
const Home = () => {
    const history = useHistory()
    const [formValue, setFormValue] = useState({...defaultForm})

    const handleValues = ({ target: { name, value } }) => {
        setFormValue({ ...formValue, [name]: value })
    }
    const login = async (e) =>{
        e.preventDefault();
        try {
            const login = await api.post('/auth/login',formValue)
            
                history.push('/feed')
                localStorage.setItem('token', login.data.token)
        } catch (error) {
            console.error(error)
            setFormValue({...formValue, ...defaultForm})
        }   
    }
    return (
        <LoginForm 
        login={login} 
        handleValues={handleValues}
        logo ={logo}
        formValue = {formValue}
        />
    )
}
export default Home