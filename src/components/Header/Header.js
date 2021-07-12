import {Navbar} from "react-bootstrap";
const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="justify-content-between mb-5">
      <Navbar.Brand href="/" className="mr-a">АвтоЛогист</Navbar.Brand>
    </Navbar>
  )
}

export default Header;
