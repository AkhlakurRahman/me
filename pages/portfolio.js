import styled from 'styled-components';
import PortfolioItem from '../components/PortfolioItem';

const PortfolioStyles = styled.div`
  h2 {
    font-size: 5rem;
    font-weight: 400;
    text-align: center;
    margin: 10rem 0;

    @media (max-width: 768px) {
      font-size: 4rem;
    }
  }
  .items {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 3.3rem;
    grid-row-gap: 10rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
`;

const Portfolio = () => (
  <PortfolioStyles className='container' id='portfolio'>
    <h2>My Portfolio</h2>
    <section className='items'>
      <PortfolioItem
        image='sickfits.png'
        title='Sick Fits'
        webLink='https://sickfits-next-apollo.herokuapp.com/'
        gitHubLink='https://github.com/AkhlakurRahman/sick-fits'
        description='E-commerce app using Node.js, Prisma, GraphQL on the backend and Next.js, Apollo Client on the frontend'
      />

      <PortfolioItem
        image='forkify.png'
        title='Recipe App'
        webLink='https://affectionate-clarke-308f47.netlify.com/'
        gitHubLink='https://github.com/AkhlakurRahman/recipe-app'
        description='Recipe searching app using Food2Fork API and vanilla Javascript'
      />

      <PortfolioItem
        image='spacex.png'
        title='SpaceX Missions'
        webLink='https://spacex-launch-mission.herokuapp.com/'
        gitHubLink='https://github.com/AkhlakurRahman/spacex-launch-missions'
        description='SpaceX missions detail using SpaceX API, Apollo Client, React.js(Next.js) with Hooks'
      />

      <PortfolioItem
        image='github.png'
        title='Github User Finder'
        webLink='https://hardcore-ramanujan-c2650d.netlify.com/'
        gitHubLink='https://github.com/AkhlakurRahman/github-user-finder'
        description='GitHub user finder using GitHub API and React.js with Hooks'
      />

      <PortfolioItem
        image='trilo.png'
        title='Travel Landing Page'
        webLink='https://condescending-pike-5e571c.netlify.com/'
        gitHubLink='https://github.com/AkhlakurRahman/trillo'
        description='One pager landing page using HTML and CSS flexbox'
      />

      <PortfolioItem
        image='headphones.png'
        title='Landing Page'
        webLink='https://loving-kilby-450b28.netlify.com/'
        gitHubLink='https://github.com/AkhlakurRahman/headphones'
        description='One pager landing page using HTML and CSS grid and flexbox'
      />
    </section>
  </PortfolioStyles>
);

export default Portfolio;
