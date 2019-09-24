import React from 'react';
import LinkCV from '../utils/ActiveLink';
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
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  .line {
    width: 2.5rem;
    height: 0.2rem;
    background: ${props => props.theme.color_primary};
    margin: 0.5rem;
  }
  @media (max-width: 768px) {
    position: absolute;
    right: 2rem;
    display: block;
  }
`;

class Nav extends React.Component {
  state = {
    sideNavVisibility: false
  };

  handleClose = () => {
    this.setState({ sideNavVisibility: false });
  };

  handleOpen = () => {
    this.setState(prevState => ({
      sideNavVisibility: !prevState.sideNavVisibility
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
            onClick={this.handleClose}
          >
            About
          </Link>
          <Link
            activeClass='active'
            to='portfolio'
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            onClick={this.handleClose}
          >
            Portfolio
          </Link>
          <LinkCV
            href='/static/akhlakur_rahman_CV.pdf'
            onClick={this.handleClose}
          >
            <a target='_blank'>CV</a>
          </LinkCV>
        </NavStyles>

        <Hamburger onClick={this.handleOpen}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </Hamburger>
      </Wrapper>
    );
  }
}

export default Nav;
