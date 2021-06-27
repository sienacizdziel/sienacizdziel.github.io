import React from 'react';
import './styles.scss';
import Routes from './Routes.js';
import { Navbar, Nav } from 'react-bootstrap';


function App() {
  return (
  <>
    <Navbar sticky="top">
      <Nav>
        {/* <Nav.Link href="/">home</Nav.Link> */}
      </Nav>
    </Navbar>
    <Routes />
  </>
  );
}

export default App;
