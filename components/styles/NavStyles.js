import styled from 'styled-components';

const NavStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
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
`;

export default NavStyles;
