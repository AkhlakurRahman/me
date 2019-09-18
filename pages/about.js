import styled from 'styled-components';

const AboutStyles = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 5rem;
    font-weight: 400;
    text-align: center;
    margin-top: 7rem;
  }
  p {
    font-size: 1.6rem;
    text-align: center;
    margin-bottom: 3rem;
  }
  .tech_stack {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    img {
      margin: 3rem;
    }
  }
`;

const About = () => (
  <AboutStyles className='container'>
    <h2>About Me</h2>
    <p>
      I'm a Full Stack Web Developer. Though I've completed my Bachelor in
      Physics, I love to code. Here's my technical stack.
    </p>
    <div className='tech_stack'>
      <div className='tech_stack_1'>
        <img width='50' src='/static/html.png' alt='HTML' title='HTML 5' />
        <img width='40' src='/static/css.png' alt='css' title='CSS 3' />
        <img
          width='50'
          src='/static/javascript.png'
          alt='javascript'
          title='Javascript'
        />
        <img
          width='100'
          src='/static/node_js.png'
          alt='node_js'
          title='Node.js'
        />
        <img
          width='100'
          src='/static/mongodb.png'
          alt='mongodb'
          title='MongoDB'
        />
        <img
          width='90'
          src='/static/react_js.png'
          alt='react_js'
          title='React.js'
        />
      </div>
      <div className='tech_stack_2'>
        <img
          width='100'
          src='/static/next_js.png'
          alt='next_js'
          title='Next.js'
        />
        <img
          width='100'
          src='/static/redux_js.png'
          alt='redux_js'
          title='Redux.js'
        />
        <img
          width='100'
          src='/static/graphql.png'
          alt='graphql'
          title='GraphQL'
        />
        <img
          width='90'
          src='/static/apollo.png'
          alt='apollo'
          title='Apollo Client'
        />
        <img width='120' src='/static/prisma.png' alt='prisma' title='Prisma' />
        <img width='50' src='/static/python.png' alt='python' title='Python' />
      </div>
    </div>
  </AboutStyles>
);

export default About;
