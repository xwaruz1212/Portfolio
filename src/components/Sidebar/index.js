import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="about"
              onClick={toggle}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              delay={100}
            >
              About
            </SidebarLink>
            <SidebarLink
              to="experience"
              onClick={toggle}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              delay={100}
            >
              Experience
            </SidebarLink>
            <SidebarLink
              to="contact"
              onClick={toggle}
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
              delay={100}
            >
              Contact
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
