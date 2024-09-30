import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { logoutUser } from '../redux/Actions/UserActions';
import { useDispatch, useSelector } from 'react-redux';

function Navb() {
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logoutUser())
  }
  const user = useSelector(state => state.UserReducer.user);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/"}>Home</Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
  

      {user ? (
        <div>
           <Link to={"/login"}><Button onClick={handleLogout} >logout</Button></Link>
           <Link to={"/Profile"}> <Button >Profile</Button></Link>
        </div>

      ) : (
        <div>
          <Link to={"/login"}>
            <Button>login</Button>
          </Link>
          <Link to={"/register"}>
            <Button>register</Button>
          </Link>
        </div>
      )}
    </Navbar>
  );
}

export default Navb;
