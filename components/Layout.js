import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from './Nav';

Router.onRouteChangeStart = url => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title }) => (
  <div className="root">
    <Head>
      <title>Albion Tools</title>
    </Head>
    <Nav currentPage={title} />
    <div
      className="ui container container-style"
      style={{ background: 'rgba(246, 245, 241, 1.0)' }}>
      <h1>{title}</h1>
      {children}
    </div>
    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>{`
      .root {
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      .container-style {
        height: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
      }
      footer {
        padding: 1em;
      }
      h1 {
        margin-top: 20px;
      }
    `}</style>
  </div>
);
