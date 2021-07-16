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
  NavbarText
} from 'reactstrap';

const TopBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="md" className="">
    <NavbarBrand className="" href="/">Julio Alcantara</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto " navbar>
        <NavItem>
            <NavLink href="/components/">About</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Projects
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    Words Attack
                </DropdownItem>
                <DropdownItem>
                    Run & Gun
                </DropdownItem>
                <DropdownItem>
                    Chatterbox
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
        <NavItem>
            <NavLink href="/components/">
                Contact
            </NavLink>
        </NavItem>
        </Nav>
    </Collapse>
    </Navbar>
  );
}

export default TopBar;