import React from 'react';
import ActiveLink from '../utils/ActiveLink';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import NavStyles from './styles/NavStyles';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .nav-active {
    transform: translateX(0%);

    box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.7), -5rem 0 0 0 #101d2c,
      -10rem 0 0 0 #0e1925;
  }

  .toggle .line:nth-child(1) {
    transform: rotate(-45deg) translate(-4px, 6px);
  }

  .toggle .line:nth-child(2) {
    opacity: 0;
  }

  .toggle .line:nth-child(3) {
    transform: rotate(45deg) translate(-4px, -6px);
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  .line {
    width: 2.5rem;
    height: 0.2rem;
    background: ${props => props.theme.color_primary};
    margin: 0.5rem;
    transition: all 0.4s;
  }
  @media (max-width: 768px) {
    position: absolute;
    right: 2rem;
    display: block;
  }
`;

class Nav extends React.Component {
  state = {
    sideNavVisibility: false,
    hamburgerCross: false
  };

  handleClose = () => {
    this.setState({
      sideNavVisibility: false,
      hamburgerCross: false
    });
  };

  handleOpen = () => {
    this.setState(prevState => ({
      sideNavVisibility: !prevState.sideNavVisibility,
      hamburgerCross: !prevState.hamburgerCross
    }));
  };

  render() {
    return (
      <Wrapper>
        <NavStyles
          className={`red-bg ${
            this.state.sideNavVisibility ? 'nav-active' : ''
          }`}
        >
          <Link
            activeClass='active'
            to='about'
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            <span onClick={this.handleClose}>About Me</span>
          </Link>
          <Link
            activeClass='active'
            to='portfolio'
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
          >
            <span onClick={this.handleClose}>Portfolio</span>
          </Link>
          <ActiveLink href='/static/akhlakur_rahman_CV.pdf'>
            <a target='_blank'>
              <span onClick={this.handleClose}>Résumé</span>
            </a>
          </ActiveLink>
        </NavStyles>

        <Hamburger
          className={`${this.state.hamburgerCross ? 'toggle' : ''}`}
          onClick={this.handleOpen}
        >
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </Hamburger>
      </Wrapper>
    );
  }
}

export default Nav;
