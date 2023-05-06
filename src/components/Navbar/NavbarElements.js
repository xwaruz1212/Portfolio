import styled, { keyframes } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: rgb(0,0,0);
  height: 12vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  z-index: 100;
  border: 1px solid #0c164f;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
    transition: 0.6s all ease;
  }
`;

export const NavbarContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    height: 12vh;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    justify-content: center;
    align-items: center;
    background: transparent;
    
    
`;

export const Rotation = keyframes`
  from,
  0%{
    transform: rotateZ(0deg);
  }
  to,
  100%{
    transform: rotateZ(360deg);
  }

`;

export const NavLogo = styled(LinkRouter)`
  color: #fff;
  background: transparent;
  justify-self: flex-end;
  cursor: pointer;
  max-width: 3rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  margin-left: 4vw;
  animation-name: ${Rotation};
  animation-delay: 2s;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  :hover{
    animation: none;
  }

`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: block;
    position: absolute;
    top: 0;
    right: 2vw;
    transform: translate(-50%, 50%);
    font-size: 5vh;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  background: transparent;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 10vh;
  font-size: 4vh;
`;

export const NavLink = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 5vw;
  height: 100%;
  cursor: pointer;
  transition-duration: 1s;
  transition-delay: 100ms;

  :active {
    border-bottom: 3px solid white;
  }

  :hover{
    font-size: 6vh;
    color: rgba(132,161,255,1);
  }

  
`;
