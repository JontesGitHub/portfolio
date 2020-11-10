import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import { bgColor1, color1, color2 } from "../globalStyles";
import { links } from "./../data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import BurgerNav from "./BurgerNav";

const NavLink = styled(Link)`
  color: #fff;
  flex: 1 1 auto;
  margin: 20px;
  /* height: 100%; */
  font-weight: 600;
  padding: 17px 10px;
  display: flex;
  position: relative;
  overflow: hidden;
  transition: 0.3s;

  &:after {
    position: absolute;
    transition: 0.4s;
    content: "";
    width: 0%;
    left: 50%;
    bottom: 0;
    height: 3px;
    background: transparent;
  }

  &.active {
    box-shadow: inset 0px -3px 0 0 ${color1};
    color: ${color1};
  }

  &:hover {
    cursor: pointer;
    /* background: rgba(73, 52, 202, 0.5); */
    &:after {
      width: 100%;
      left: 0;
      background: #fff;
    }
  }
`;

const Nav = styled.nav`
  position: fixed;
  background: ${bgColor1};
  height: 55px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  width: 100%;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SideMenu = styled.div`
  position: fixed;
  right: 0;
  display: flex;
  align-items: center;
  margin-right: 2%;
  margin-top: 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const SideLinks = styled.a`
  color: ${color2};
  margin: 0.7rem;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: #e6e6e6;
  }
`;

export default function Navbar() {
  return (
    <>
      <Nav>
      <BurgerNav />
        <NavMenu>
          <NavLink
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
            delay={50}
          >
            Home
          </NavLink>
          <NavLink
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
            delay={50}
          >
            Work
          </NavLink>
          <NavLink
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={700}
            delay={50}
          >
            About
          </NavLink>
        </NavMenu>
        <SideMenu>
          <SideLinks href={links.resume} target="_blank" rel="noreferrer">
            See Resume
          </SideLinks>
          <SideLinks href={links.linkedIn} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </SideLinks>
          <SideLinks href={links.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </SideLinks>
          <SideLinks href={links.mail} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faAt} />
          </SideLinks>
        </SideMenu>
      </Nav>
      </>
  );
}
