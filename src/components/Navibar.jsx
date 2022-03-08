import {Button, Container, Form, Modal, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
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
    const [show,setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleOpen = () => setShow(true)

    return <>
        <Styles>
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
                            <Button variant="primary" onClick={()=>handleOpen()} className='me-2'>LogIn</Button>
                            <Button  variant="primary">Sign Out</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controllId="fromBasicEmail">
                    <Form.Label>
                        Email Adress
                    </Form.Label>
                    <Form.Control type='email' placeholder="Enter email "/>
                    <Form.Text className='text-muted'>We'll never share your email</Form.Text>
                </Form.Group>
                <Form.Group controllId="fromBasicPassword">
                    <Form.Label>
                        Password
                    </Form.Label>
                    <Form.Control type='password' placeholder="Enter password "/>
                    <Form.Text className='text-muted'>We'll never share your password</Form.Text>
                </Form.Group>
                <Form.Group controllId="fromBasicCheckbox">
                    <Form.Check type='checkbox' label='Remember me'/>
                   </Form.Group>
            </Form>
        </Modal.Body>
    </Modal>
    </>
}