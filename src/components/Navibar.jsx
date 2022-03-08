import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import React from "react";
import styled from "styled-components";

const Styles = styled.div `
a, .navbar-brand, .navbar-nav .nav-link{
  color:#adb1b8;
  &:hover{
    color:white
  }
}
`

export const Navibar = () => {
    return <Styles>
        <Navbar collapseOnSelect expand='lg' bg="dark" variant='dark' >
        <Container>
            <Navbar.Brand className='ml-2'>Kirik studies programming</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='me-auto'>
                    <Nav.Item className='me-2'>
                        <NavLink to='/'>Home</NavLink>
                    </Nav.Item>
                    <Nav.Item className='me-2'>
                        <NavLink to='/users'>Users</NavLink>
                    </Nav.Item>
                    <Nav.Item className='me-2'>
                        <NavLink to='/about'>About</NavLink>
                    </Nav.Item>
                </Nav>
                <Nav>
                    <Button variant="primary" className='me-2'>LogIn</Button>
                    <Button  variant="primary">LogOut</Button>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </Styles>
}