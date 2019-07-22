import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import MuiContainer from '@material-ui/core/Container';
import withReduxStore from '../lib/with-redux-store';
import Layout from '../components/NavLayout';
import theme from '../utils/theme';

class MyApp extends App {
  static getInitialProps({ query }) {
    return { query };
  }

  // componentDidMount() {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side');
  //   if (jssStyles) {
  //     jssStyles.parentNode.removeChild(jssStyles);
  //   }
  // }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <Head>
            <title>Albion Tools</title>
          </Head>

          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Layout>
              <MuiContainer>
                <Component {...pageProps} />
              </MuiContainer>
            </Layout>
          </ThemeProvider>
        </Provider>
      </Container>
    );
  }
}
export default withReduxStore(MyApp);
