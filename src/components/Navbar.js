import React, {Component} from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { thisExpression } from '@babel/types';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
  }

  handleRoutes = async route => {
    await this.props.history.push(route);
  };

    render() {
      return(
        <div>
        <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-Testing</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            
            <Nav.Link onClick={() => this.handleRoutes('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => this.handleRoutes('/')}>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => this.handleRoutes('/NameForm')}>NameForm</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
     {this.props.children}
      </div>
      );
    
  }
}

export default withRouter(NavigationBar);