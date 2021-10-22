import React, { useState } from "react";
import { useHistory } from "react-router";
import { Img } from './styles';
import logo from '../../images/connectLogo.jpeg'
import {Navbar, Container} from 'react-bootstrap'


const NavBar = () => {

    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <Img to="/" src={logo} alt="logo"/>{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
};

export default NavBar;
