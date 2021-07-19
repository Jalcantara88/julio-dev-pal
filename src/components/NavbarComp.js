import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button, 
  ButtonGroup
} from 'reactstrap';
import { Link} from 'react-router-dom';

const TopBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" className="">
    <NavbarBrand className="" href="/">Julio Alcantara</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto align-items-center" navbar>
            <NavItem>
                <NavLink href="/about/">About</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Projects
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem href="project">
                        Words Attack
                    </DropdownItem>
                    <DropdownItem href="project">
                        Run & Gun
                    </DropdownItem>
                    <DropdownItem href="project">
                        Chatterbox
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
                <NavLink href="/contact/">
                    Contact
                </NavLink>
            </NavItem>
            {/*}
            <NavItem className="socialButtons">
                <ButtonGroup className="mx-auto">
                    <Button tag={Link} to="https.www.google.com"><i class="socialLink fab fa-github fa-2x"></i></Button>
                    <Button><i class="socialLink fab fa-linkedin fa-2x"></i></Button>
                    <Button><i class="socialLink fab fa-behance-square fa-2x"></i></Button>
                    <Button><i class="socialLink fab fa-youtube fa-2x"></i></Button>
                </ButtonGroup>
            </NavItem>
  */}
            
        </Nav>
    </Collapse>
    </Navbar>
  );
}

export default TopBar;