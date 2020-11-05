import React from 'react'
import { Link } from 'react-scroll'
import styled from 'styled-components'
import { bgColor1, color1 } from '../globalStyles'

const styles = {
    container: {
        maxWidth: '400px',
        margin: '0 auto',
        textAlign: 'center'
    }
}

const NavLink = styled(Link)`
    color: #fff;
    flex: 1 1 auto;
  margin: 20px;
  /* height: 100%; */
  font-weight: 500;
  padding: 17px 10px;
  display: flex;
  position: relative;
  overflow:hidden;
  transition: .3s;
  
  &:after {
    position: absolute;
    transition: .4s;
    content: '';
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
`

const Nav = styled.nav`
    position: fixed;
    /* background: #000; */
    background: ${bgColor1};
    height: 55px;
    display: flex;
    justify-content: space-between;
    /* padding: 0.5rem calc((100vw - 1000px) / 2); */
    z-index: 10;
    width: 100%;
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    max-width: 700px;
    margin: 0 auto;
  

  /* @media screen and (max-width: 768px) {
    display: none;
  } */
`

export default function Navbar() {

    return (
        <Nav>
            <NavMenu>
                <NavLink activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={700} delay={50}>
                    Home
                </NavLink>
                <NavLink activeClass="active" to="work" spy={true} smooth={true} offset={-50} duration={700} delay={50}>
                    Work
                </NavLink>
                <NavLink activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={700} delay={50}>
                    About
                </NavLink>
            </NavMenu>
        </Nav>
    )
}
