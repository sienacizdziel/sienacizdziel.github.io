import React from 'react';
import './styles.scss';
import Routes from './Routes.js';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router';

const Header = props => {
  const { location } = props;
  return (
    <Navbar sticky="top">
      <Nav activeKey={location.pathname}>
        <Nav.Link href="/">home</Nav.Link>
      </Nav>
    </Navbar>
  );
}

const HeaderwithRouter = withRouter(Header);

function App(props) {
  const location = props;
  return (
  <>
    <HeaderwithRouter />
    <Routes />
  </>
  );
}

export default App;
