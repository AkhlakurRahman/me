import PortfolioItemStyles from './styles/PortfolioItemStyles';

const PortfolioItem = ({ image, title, description, webLink, gitHubLink }) => (
  <PortfolioItemStyles>
    <div className='port_items'>
      <div className='port_image'>
        <img src={`/static/example/${image}`} alt={title} />
      </div>
      <div className='port_desc'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className='port_links'>
        <a target='_blank' href={`${webLink}`}>
          <i className='fas fa-link'></i>
        </a>

        <a target='_blank' href={`${gitHubLink}`}>
          <i className='fab fa-github'></i>
        </a>
      </div>
    </div>
  </PortfolioItemStyles>
);

export default PortfolioItem;
