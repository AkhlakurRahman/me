import styled from 'styled-components';

const FooterStyles = styled.footer`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right bottom,
    #84ceeb,
    #96cced,
    #a7caec,
    #b5c9e9,
    #c1c8e4
  );
  font-family: ${props => props.theme.font_display};
  font-weight: 400;

  /* color: ${props => props.theme.color_primary}; */
  color: #fff;
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
