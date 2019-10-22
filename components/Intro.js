import Header from './Header';
import styled from 'styled-components';

const IntroStyles = styled.div`
  background-image: radial-gradient(
    circle,
    #5ab9ea,
    #62bdea,
    #69c1ea,
    #71c5eb,
    #79c9eb,
    #83caec,
    #8dcbed,
    #96cced,
    #a3cbec,
    #aec9ea,
    #b8c9e8,
    #c1c8e4
  );
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

      @media (max-width: 768px) {
        font-size: 4rem;
      }
    }

    span {
      font-size: 2rem;

      @media (max-width: 768px) {
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
