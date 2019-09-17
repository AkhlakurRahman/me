import React from 'react';
import Head from 'next/head';

import GetInTouchStyles from './styles/GetInTouchStyles';

class GetInTouch extends React.Component {
  state = {
    isVisible: false
  };

  handleClose = () => {
    this.setState({ isVisible: false });
  };

  handleOpen = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  };

  render() {
    return (
      <GetInTouchStyles>
        <Head>
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css'
          />
        </Head>
        <div
          className={`social-panel-container ${
            this.state.isVisible ? 'visible' : null
          }`}
        >
          <div className='social-panel'>
            <button className='close-btn' onClick={this.handleClose}>
              <i className='fas fa-times'></i>
            </button>
            <h4>Get in touch on</h4>
            <ul>
              <li>
                <a href='https://github.com/AkhlakurRahman' target='_blank'>
                  <i class='fab fa-github'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/akhlakur-rahman-248677aa/'
                  target='_blank'
                >
                  <i className='fab fa-linkedin'></i>
                </a>
              </li>
              <li>
                <a
                  href='https://mail.google.com/mail/?view=cm&fs=1&to=akhlakur.rahmann@gmail.com'
                  target='_blank'
                >
                  <i class='fas fa-envelope'></i>
                </a>
              </li>
              <li>
                <a href='https://twitter.com/A_R_Rabbyy' target='_blank'>
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <button className='floating-btn' onClick={this.handleOpen}>
          Get in Touch
        </button>
      </GetInTouchStyles>
    );
  }
}

export default GetInTouch;
