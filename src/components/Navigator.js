import React, { useEffect, useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const Navigator = () => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Docs</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Trends</Nav.Link>
                        <NavDropdown title="Search" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/show_total_count_by_name">By Name</NavDropdown.Item>
                            <NavDropdown.Item href="/search_by_name_and_year">By Name and Year</NavDropdown.Item>
                            <NavDropdown.Item href="/search_by_name_and_state">By State </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )



}

export default Navigator