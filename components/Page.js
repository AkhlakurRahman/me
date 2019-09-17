import React, { Component } from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import Header from './Header';
import Meta from './Meta';

const theme = {
  color_primary: '#dce6de',
  color_bg: '#101d2c',
  font_primary: "'Nunito', sans-serif",
  font_display: "'Josefin Sans', sans-serif"
};

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta></Meta>
          {this.props.children}
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
