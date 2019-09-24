import React from 'react';
import styled from 'styled-components';

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

  @media (max-width: 768px) {
    position: absolute;
    left: -2rem;
    font-size: 1.5rem;
  }
`;

const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  width: 100%;
  transition: all 0.4s ease;
  z-index: 2;

  ${props =>
    props.scroll &&
    `
      background: rgba(16, 29, 44, 0.95);
      box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.7);
      a {
        color: #fff;
      }
    `};

  @media (max-width: 768px) {
    background: rgba(16, 29, 44, 0.95);
  }
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

  render() {
    return (
      <StyledHeader scroll={this.state.scroll}>
        <Logo>
          <a href='/'>Akhlakur Rahman</a>
        </Logo>
        <Nav />
      </StyledHeader>
    );
  }
}

export default Header;
