import styled from 'styled-components';
import PortfolioItem from '../components/PortfolioItem';

const PortfolioStyles = styled.div`
  h2 {
    font-size: 5rem;
    font-weight: 400;
    text-align: center;
    margin: 7rem 0;
  }
  .items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 3.3rem;
    grid-row-gap: 3.3rem;
  }
`;

const Portfolio = () => (
  <PortfolioStyles className='container' id='portfolio'>
    <h2>My Portfolio</h2>
    <section className='items'>
      <PortfolioItem
        image='portfolio.png'
        title='Sick Fits'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          veniam officia ducimus'
      />

      <PortfolioItem
        image='portfolio.png'
        title='Sick Fits'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          veniam officia ducimus'
      />

      <PortfolioItem
        image='portfolio.png'
        title='Sick Fits'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          veniam officia ducimus'
      />

      <PortfolioItem
        image='portfolio.png'
        title='Sick Fits'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          veniam officia ducimus'
      />

      <PortfolioItem
        image='portfolio.png'
        title='Sick Fits'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          veniam officia ducimus'
      />

      <PortfolioItem
        image='portfolio.png'
        title='Sick Fits'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
          veniam officia ducimus'
      />
    </section>
  </PortfolioStyles>
);

export default Portfolio;
