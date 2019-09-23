import styled from 'styled-components';

const NavStyles = styled.div`
  display: flex;
  margin-left: 10rem;
  font-size: 1.7rem;
  font-family: ${props => props.theme.font_display};
  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.color_primary};
    cursor: pointer;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
    transition: all 0.4s;
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #fff;
      transition: width 0.2s;
    }

    &.active::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: #fff;
    }

    &:hover::after,
    &:active,
    &:focus {
      width: 100%;
      transition: width 0.2s;
    }
  }
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 700px) {
    position: absolute;
    right: 0;
    height: 90vh;
    top: 10vh;
    width: 70vh;
    background: rgba(16, 29, 44, 0.95);
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.7s ease-in, box-shadow 0.5s ease-in;
    z-index: 2;
    a {
      margin-top: 5rem;
    }
  }
`;

export default NavStyles;
