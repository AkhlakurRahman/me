import Link from 'next/link';
import Head from 'next/head';

import PortfolioItemStyles from './styles/PortfolioItemStyles';

const PortfolioItem = ({ image, title, description }) => (
  <PortfolioItemStyles>
    <div className='port_items'>
      <div className='port_image'>
        <img src={`/static/${image}`} alt={title} />
      </div>
      <div className='port_desc'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className='port_links'>
        <Link href='/'>
          <a>
            <i className='fas fa-link'></i>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <i className='fab fa-github'></i>
          </a>
        </Link>
      </div>
    </div>
  </PortfolioItemStyles>
);

export default PortfolioItem;
