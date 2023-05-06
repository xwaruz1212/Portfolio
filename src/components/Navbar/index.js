import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarElements";
import logo from "../../images/logoK.png";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavLogo to="/" onClick={toggleHome}>
          <img src={logo} alt="" />
        </NavLogo>
        <NavbarContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink
                to="about"
                spy={true}
                smooth={true}
                offset={-90}
                duration={800}
                delay={100}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="skills"
                spy={true}
                smooth={true}
                offset={-120}
                duration={800}
                delay={100}
              >
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="contact"
                spy={true}
                smooth={true}
                offset={-90}
                duration={800}
                delay={100}
              >
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
