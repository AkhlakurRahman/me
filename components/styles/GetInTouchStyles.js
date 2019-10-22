import styled from 'styled-components';

const GetInTouchStyles = styled.div`
  .social-panel-container {
    position: fixed;
    right: 0;
    bottom: 80px;
    transform: translateX(100%);
    transition: transform 0.4s ease-in-out;
  }

  .social-panel-container.visible {
    transform: translateX(-10px);
  }

  .social-panel {
    background-color: #cad0e8;
    border-radius: 16px;
    box-shadow: 0 16px 31px -17px #cad0e8;
    border: 5px solid #5ab9ea;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Nunito', sans-serif;
    position: relative;
    height: 169px;
    width: 370px;
    max-width: calc(100% - 10px);
  }

  .social-panel button.close-btn {
    border: 0;
    color: ${props => props.theme.color_primary};
    cursor: pointer;
    background-color: #5ab9ea;
    padding: 0.5rem 1rem;
    border-radius: 0.7rem;
    font-size: 20px;
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .social-panel button.close-btn:focus {
    outline: none;
  }

  .social-panel h4 {
    margin: 20px 0;
    color: ${props => props.theme.color_bg};
    font-family: ${props => props.theme.font_primary};
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
  }

  .social-panel ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  .social-panel ul li {
    margin: 0 10px;
  }

  .social-panel ul li a {
    border: 1px solid #5ab9ea;
    border-radius: 50%;
    color: #5ab9ea;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    text-decoration: none;
    transition: all 0.4s;
  }

  .social-panel ul li a:hover {
    border-color: ${props => props.theme.color_bg};
    box-shadow: 0 9px 12px -9px ${props => props.theme.color_bg};
  }

  .floating-btn {
    font-family: ${props => props.theme.font_display};
    border-radius: 26.5px;
    background-image: linear-gradient(
      to right bottom,
      #84ceeb,
      #96cced,
      #a7caec,
      #b5c9e9,
      #c1c8e4
    );
    border: 1px solid #5ab9ea;
    box-shadow: 0 16px 22px -17px #5ab9ea;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    padding: 12px 20px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    transition: all 0.4s;
  }

  .floating-btn:hover {
    transform: translateY(-3px);
    background-color: #ffffff;
    color: #2d2d2d;
  }

  .floating-btn:active {
    transform: translateY(-1px);
  }

  .floating-btn:focus {
    outline: none;
  }

  @media screen and (max-width: 480px) {
    .social-panel-container.visible {
      transform: translateX(0px);
    }

    .social-panel {
      width: 350px;
    }

    .floating-btn {
      right: 10px;
    }
  }
`;

export default GetInTouchStyles;
