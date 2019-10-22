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
    font-weight: 400;
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #5ab9ea;
      transition: width 0.2s;
    }

    &.active::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: #5ab9ea;
    }

    &:hover::after {
      width: 100%;
      transition: width 0.2s;
    }
  }
  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    position: absolute;
    right: 0;
    height: 90vh;
    top: 10vh;
    width: 70vh;
    background-image: linear-gradient(
      to right bottom,
      #84ceeb,
      #96cced,
      #a7caec,
      #b5c9e9,
      #c1c8e4
    );
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.7s ease-in, box-shadow 0.5s ease-in;
    z-index: 2;
    a {
      margin-top: 5rem;
      font-size: 1.4rem;
    }
  }

  @media (max-width: 500px) {
    width: 38vh;
  }
`;

export default NavStyles;
