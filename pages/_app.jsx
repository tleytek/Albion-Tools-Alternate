import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import JssProvider from 'react-jss/lib/JssProvider';

import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import MuiContainer from '@material-ui/core/Container';
import withReduxStore from '../lib/with-redux-store';
import Layout from '../components/NavLayout';
import getPageContext from '../lib/getPageContext';

class MyApp extends App {
  constructor(props) {
    super(props);
    this.pageContext = getPageContext();
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Head>
            <title>Albion Tools</title>
          </Head>
          {/* Wrap every page in Jss and Theme providers */}
          <JssProvider
            registry={this.pageContext.sheetsRegistry}
            generateClassName={this.pageContext.generateClassName}
          >
            {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
            <ThemeProvider
              theme={this.pageContext.theme}
            >
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Layout>
                <MuiContainer>
                  <Component pageContext={this.pageContext} {...pageProps} />
                </MuiContainer>
              </Layout>
            </ThemeProvider>
          </JssProvider>
        </Provider>
      </Container>
    );
  }
}
export default withReduxStore(MyApp);
