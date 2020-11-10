import React, { useState } from "react";
import styled from "styled-components";
import { color1, color2 } from "../globalStyles";
import { Link } from "react-scroll";
import { links } from "../data";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const StyledBurger = styled.button`
  position: absolute;
  top: 14px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) => (props.open ? "#000" : "#fff")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const StyledMenu = styled.nav`
  box-sizing: border-box;
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  background: #fff;
  height: 100vh;
  width: 55%;
  text-align: left;
  position: absolute;
  padding-top: 4.5rem;
  top: 0;
  right: 0;
  transition: transform 1s ease-in-out;
  transform: ${({ open }) => open ? "translateX(0)" : "translateX(100%)"};

  @media (max-width: 500px) {
    width: 100%;
  }

  @media (max-height: 380px) {
    padding-top: 2.5rem;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: 2.3rem;
  text-transform: uppercase;
  padding: 1rem 0;
  margin: 1rem auto;
  font-weight: 700;
  letter-spacing: 0.5rem;
  color: #000;
  transition: color 0.3s linear;

  @media (max-width: 768px) {
    /* font-size: 1.5rem; */
    text-align: center;
  }

  @media (max-height: 380px) {
    /* font-size: 1.3rem; */
  }

  &:hover {
    color: ${color1};
  }

  &.active {
    /* box-shadow: inset 0px -3px 0 0 ${color1}; */
    color: ${color1};
  }
`;

const FooterMenu = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  bottom: 7%;

  a {
    color: ${color2};
    margin: 1.1rem;
    font-size: 1.7rem;
    text-decoration: none;
    font-weight: 700;
  }
`;

export default function BurgerNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <StyledMenu open={open}>
        <NavLink
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={700}
          delay={50}
          onClick={() => setOpen(!open)}
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
          onClick={() => setOpen(!open)}
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
          onClick={() => setOpen(!open)}
        >
          About
        </NavLink>
        <FooterMenu>
          <a href={links.resume} target="_blank" rel="noreferrer">
            See Resume
          </a>
          <a href={links.linkedIn} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={links.mail} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faAt} />
          </a>
        </FooterMenu>
      </StyledMenu>
    </>
  );
}
