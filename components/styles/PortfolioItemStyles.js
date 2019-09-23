import styled from 'styled-components';

const PortfolioItemStyles = styled.div`
  width: 30rem;
  height: 37rem;
  background: #faf9f9;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  border-radius: 0.7rem;

  .port_image {
    width: 30rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.06);
    border-radius: 0.7rem 0.7rem 0 0;
    overflow: hidden;

    img {
      transition: all 1.4s;
    }

    &:hover img {
      transform: scale(1.2);
    }
  }

  .port_desc {
    padding: 1rem;

    h3 {
      font-size: 2.5rem;
      font-weight: 400;

      @media (max-width: 700px) {
        font-size: 2rem;
      }
    }

    p {
      font-size: 1.4rem;
      @media (max-width: 700px) {
        font-size: 1.2rem;
      }
    }
  }

  .port_links {
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    a {
      font-size: 1.5rem;
      color: ${props => props.theme.color_bg};
    }
  }
`;

export default PortfolioItemStyles;
