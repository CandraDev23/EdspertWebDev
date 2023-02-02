import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logoo from '../Logo';
const { Navbar, Container, Nav, NavDropdown, Button } = require("react-bootstrap");

export default function Navbarr() {
    return (
        <Navbar style={{ backgroundColor: "#2D4059" }} expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className='d-flex align-items-center' href="#">
                    <Logoo w="33" h="34"/>
                    <h3 className='text-white ms-lg-3'>Edspert</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="justify-content-between ms-auto my-2 my-lg-0"
                        style={{ maxHeight: 'auto', width: '100vh' }}
                        navbarScroll
                    >
                        <NavDropdown title="Program" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action4">Online Course</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Mini Bootcamp</NavDropdown.Item>
                            <NavDropdown.Item href="#action3">Bootcamp</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">See all</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Bidang Ilmu" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Digital Marketing</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Product Management</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">English</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Programming</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">See all</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action1">Tentang Edpsert</Nav.Link>
                        <Button className='rounded-pill px-lg-5' variant="danger">Masuk</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}