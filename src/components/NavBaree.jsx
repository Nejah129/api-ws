import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

const NavBaree = () => {
  return (
    <div>
         <Navbar bg="light">
    <Container>
      <Navbar.Brand href="#home" className='ws'><h3>API WS in Go My Code</h3></Navbar.Brand>
    </Container>
  </Navbar>
    </div>
  )
}

export default NavBaree