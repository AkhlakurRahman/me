import LinkCV from '../utils/ActiveLink';
import { Link } from 'react-scroll';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link
      activeClass='active'
      to='about'
      spy={true}
      smooth={true}
      offset={-70}
      duration={1000}
    >
      About
    </Link>
    <Link
      activeClass='active'
      to='portfolio'
      spy={true}
      smooth={true}
      offset={-100}
      duration={1000}
    >
      Portfolio
    </Link>
    <LinkCV href='/static/akhlakur_rahman_CV.pdf'>
      <a target='_blank'>CV</a>
    </LinkCV>
  </NavStyles>
);

export default Nav;
