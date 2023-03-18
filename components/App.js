import React from 'react';
import Image from "next/image";
import { Navbar, Nav, Container } from 'react-bootstrap';
// import logo from '../images/link-logo.png'


function App() {
    function promptAlert() {
        alert('This feature is coming soon, stay tuned!')
    }
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand>
                <Image src="/link-logo.png" height={120} width={250} />
                </Navbar.Brand>
            </Container>
        </Navbar>
        <div className='centered-container'>
            <div className='heading1'> <span style={{color: '#FFD700'}}>Link</span> Logistics</div>
            <div className='heading2'>We keep <span style={{color: '#FFD700'}}>Africa moving</span></div>
            <button className='btn' onClick={promptAlert}>Learn more</button>
        </div>
      </div>
    );
}

export default App
