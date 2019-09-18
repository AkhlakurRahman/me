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
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 16px 31px -17px rgba(0, 31, 97, 0.6);
    border: 5px solid rgba(16, 29, 44, 0.9);
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
    background-color: ${props => props.theme.color_bg};
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
    border: 1px solid #dce1f2;
    border-radius: 50%;
    color: rgba(16, 29, 44, 0.9);
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
    background-color: rgba(16, 29, 44, 0.9);
    border: 1px solid rgba(16, 29, 44, 0.9);
    box-shadow: 0 16px 22px -17px #03153b;
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
    color: rgba(16, 29, 44, 0.9);
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

    .floating-btn {
      right: 10px;
    }
  }
`;

export default GetInTouchStyles;
