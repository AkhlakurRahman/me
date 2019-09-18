import Link from 'next/link';
import Head from 'next/head';

import PortfolioItemStyles from './styles/PortfolioItemStyles';

const PortfolioItem = ({ image, title, description }) => (
  <PortfolioItemStyles>
    <Head>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css'
      />
    </Head>

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
            <i class='fas fa-link'></i>
          </a>
        </Link>
        <Link href='/'>
          <a>
            <i class='fab fa-github'></i>
          </a>
        </Link>
      </div>
    </div>
  </PortfolioItemStyles>
);

export default PortfolioItem;
