import React, { Component } from 'react';
import Head from 'next/head';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import Meta from './Meta';

const theme = {
  color_primary: '#fff',
  color_bg: '#222',
  font_primary: "'Nunito', sans-serif",
  font_display: "'Josefin Sans', sans-serif"
};

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <Meta></Meta>

          <Head>
            <link
              rel='stylesheet'
              href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css'
            />
          </Head>
          {this.props.children}
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
