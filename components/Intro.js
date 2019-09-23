import Header from './Header';
import styled from 'styled-components';

const IntroStyles = styled.div`
  background-image: linear-gradient(
      rgba(16, 29, 44, 0.75),
      rgba(16, 29, 44, 0.75)
    ),
    url(/static/hero.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;

  .me {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    height: 100vh;
    color: ${props => props.theme.color_primary};

    h1 {
      font-family: ${props => props.theme.font_display};
      font-size: 5rem;
      font-weight: 400;
      letter-spacing: 0.3rem;
      word-spacing: 0.5rem;

      @media (max-width: 700px) {
        font-size: 4rem;
      }
    }

    span {
      font-size: 2rem;

      @media (max-width: 700px) {
        font-size: 1.5rem;
      }
    }
  }
`;

const Intro = () => (
  <IntroStyles>
    <Header />
    <div className='me'>
      <h1>Hi, I'm Akhlakur Rahman</h1>
      <span>Full Stack Web Developer</span>
    </div>
  </IntroStyles>
);

export default Intro;
