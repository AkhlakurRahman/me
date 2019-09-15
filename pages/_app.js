import App from 'next/app';
import Page from '../components/Page';

class MyPortfolio extends App {
  render() {
    const { Component } = this.props;
    return (
      <Page>
        <Component></Component>
      </Page>
    );
  }
}

export default MyPortfolio;
