import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Img, Profile, DivButtons, DivProfile, DivNavbar, ImgProfile } from "./styles";
import logo from "../../images/connectLogo.jpeg";
import { Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import  api from '../../api/api'

const NavBar = () => {
  
  const history = useHistory()
  const [userInfo, setUserInfo] = useState({
    username: '',
    profilePicture: ''
  })
  
  const getProfile = async () =>{
    try {
      const user = await api.getProfile()
      setUserInfo(user)
    } catch (error) {
      
    }
  }
  const logout = () => {
    localStorage.removeItem('Authorization')
    history.push("/"); 
  }

  useEffect(() => {
    getProfile()
  }, [])
  
  return (
    <Navbar bg="dark" variant="dark" className="px-5">
      <Navbar.Brand>
        <Link to="/feed">
          <Img to="/" src={logo} alt="logo" />
        </Link>
      </Navbar.Brand>
      <DivNavbar>
        <DivButtons>
          <Link to="/games">
            <Button variant="outline-danger">Games</Button>
          </Link>
        </DivButtons>
        <DivProfile>
          <Link to="/profile">
          <ImgProfile>
          {userInfo.profilePicture ? <img src={userInfo.profilePicture} alt={userInfo.username}/> : <Profile />}
          </ImgProfile>
          </Link>
          <span>Olá {userInfo.username}</span>
            <Button variant="outline-light" onClick={logout} >logout</Button>          
        </DivProfile>
      </DivNavbar>
    </Navbar>
  );
};

export default NavBar;