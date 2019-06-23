import Head from 'next/head';
import App, { Container } from 'next/app';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import LinearIndeterminate from '../components/LinearIndeterminate';
import { CssBaseline } from '@material-ui/core';

class MyApp extends App {
  state = { loading: false };

  //ctx is short for context, contains alot of goodies.
  //Persisting state even after switching pages thanks to getInitialProps and
  //this custom App component that acts as a layout template
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

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
    // Router.onRouteChangeStart = () => this.setState({ loading: true });
    // Router.onRouteChangeComplete = () => this.setState({ loading: false });
    // Router.onRouteChangeError = () => this.setState({ loading: false });

    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Albion Tools</title>
        </Head>
        <CssBaseline />
        {/* {this.state.loading == true && <LinearIndeterminate />} */}
        <Nav>
          <Component {...pageProps} />
          <Footer />
        </Nav>
      </Container>
    );
  }
}
export default MyApp;
