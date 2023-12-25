import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './NavbarComponent.module.css'

type navbarMenu = {name: string, path: string };
type navbarMenus = Array<navbarMenu>;

export type NavbarProps = {
    navbarTitle: string;
    navbarIcon?: string;
    navBarMenuItems: navbarMenus;
}

/**
 * Function component for the navigation bar for the website.
 * 
 * @returns Ui component for navigation bar.
 */
function NavbarComponent(props: NavbarProps) {
  const menuItems: any = props.navBarMenuItems.map((menu) => {
    return <Nav.Link href={menu.path}>{menu.name}</Nav.Link>
  });

  return (
    <Navbar bg="dark" expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
      <Container fluid className={styles.container}>
        <Navbar.Brand href="#">{props.navbarTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            navbarScroll>
            {menuItems}
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;