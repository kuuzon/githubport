import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav } from "react-bootstrap";
import { VscGithub } from "react-icons/vsc";

import styles from './Header.module.scss';
import useTheme from '../../hooks/useTheme';
import ThemeToggler from "../common/ThemeToggler";
// import SingleToggler from "../common/SingleToggler"

const Header = () => {
  const { theme } = useTheme(); 

  return (
    <Navbar className={styles[theme]}>
      <Container>
        <Navbar.Brand className={styles.navLink} as={Link} to='/'>
          <VscGithub className={styles.icon} style={{color: 'aqua'}} /> githubPort
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          {/* LEFT-HAND NAVS */}
          <Nav className='me-auto'>
            <Nav.Link className={styles.navLink} as={Link} to='/'>HOME</Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to='/about'>ABOUT</Nav.Link>
            <Nav.Link className={styles.navLink} as={Link} to='/projects'>PROJECTS</Nav.Link>
          </Nav>
          {/* RIGHT-HAND NAVS */}
          <div>
            <ThemeToggler />
            {/* <SingleToggler /> */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;