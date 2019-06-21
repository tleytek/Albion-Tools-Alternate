import Head from 'next/head';
import App, { Container } from 'next/app';
import Nav from '../components/Nav';
import Router from 'next/router';
import NProgress from 'nprogress';
import { CssBaseline } from '@material-ui/core';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class MyApp extends App {
  //ctx is short for context, contains alot of goodies.
  //Persisting state even after switching pages thanks to getInitialProps and
  //this custom App component that acts as a layout template
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    console.log(Component.getInitialProps);

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Albion Tools</title>
        </Head>
        <CssBaseline />
        <Nav />
        <Component {...pageProps} />
        <footer>&copy; {new Date().getFullYear()}</footer>
      </Container>
    );
  }
}
export default MyApp;
