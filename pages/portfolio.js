import styled from 'styled-components';

const PortfolioStyles = styled.div`
  h2 {
    font-size: 5rem;
    font-weight: 400;
    text-align: center;
    margin-top: 4rem;
  }
`;

const Portfolio = () => (
  <PortfolioStyles className='container'>
    <h2>My Portfolio</h2>
  </PortfolioStyles>
);

export default Portfolio;
