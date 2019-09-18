// import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';

import Nav from './Nav';

const Logo = styled.h1`
  font-size: 2rem;
  margin-left: 2rem;
  z-index: 2;
  a {
    font-family: ${props => props.theme.font_display};
    text-decoration: none;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    word-spacing: 0.7rem;
    color: ${props => props.theme.color_primary};
    letter-spacing: 0.3rem;
  }
`;

const StyledHeader = styled.div`
  position: fixed;
  display: grid;
  padding: 2rem 0;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  transition: all 0.4s ease;
  ${props =>
    props.scroll &&
    `
      background: rgba(16, 29, 44, 0.95);
      box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.7);
      a {
        color: #fff;
      }
    `};
`;

class Header extends React.Component {
  state = {
    scroll: false
  };
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isOnTop = window.scrollY > 100;
      if (isOnTop) {
        this.setState({ scroll: true });
      } else {
        this.setState({ scroll: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <StyledHeader scroll={this.state.scroll}>
        <Logo>
          <Link href='/' onClick={this.scrollToTop}>
            Akhlakur Rahman
          </Link>
        </Logo>
        <Nav />
      </StyledHeader>
    );
  }
}

export default Header;
