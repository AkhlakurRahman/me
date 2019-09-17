import Link from '../utils/ActiveLink';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link activeClassName='active' href='#about'>
      <a>About</a>
    </Link>
    <Link activeClassName='active' href='#portfolio'>
      <a>Portfolio</a>
    </Link>
    <Link activeClassName='active' href='#cv'>
      <a>CV</a>
    </Link>
  </NavStyles>
);

export default Nav;
