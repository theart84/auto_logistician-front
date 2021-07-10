import {Button, Form, FormControl, Navbar} from "react-bootstrap";


const Header = () => {
  return (
    <Navbar bg="primary" variant="dark" className="justify-content-between mb-5">
      <Navbar.Brand href="/" className="mr-a">ALogistician</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  )
}

export default Header;
