import Link from 'next/link';
import styled from 'styled-components';

import Nav from './Nav';

const Logo = styled.h1`
  font-size: 2rem;
  margin-left: 2rem;
  z-index: 2;
  a {
    font-family: ${props => props.theme.font_display};
    font-weight: 300;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    word-spacing: 0.7rem;
    color: ${props => props.theme.color_primary};
    letter-spacing: 0.3rem;
  }
`;

const StyledHeader = styled.div`
  display: grid;
  padding: 2rem 0;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(16, 29, 44, 0.9);
`;

const Header = () => (
  <div>
    <StyledHeader>
      <Logo>
        <Link href='/'>
          <a>Akhlakur Rahman</a>
        </Link>
      </Logo>
      <Nav />
    </StyledHeader>
  </div>
);

export default Header;
