import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  background: ${props => props.theme.color_bg};

  color: ${props => props.theme.color_primary};
  font-size: 2rem;
  padding: 3rem 0;
`;

const Footer = () => (
  <FooterStyles>
    <p>Inspired by Many Developers</p>
    <p>Developed by Akhlakur Rahman</p>
  </FooterStyles>
);

export default Footer;
