import Head from 'next/head';
import Nav from './Nav';
import { Container } from 'semantic-ui-react';

export default ({ children, title }) => (
  <div className="root">
    <Head>
      <title>Albion Tools</title>
      {/* <link rel="stylesheet" type="text/css" href="../static/reset.css" /> */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
      />
    </Head>
    <Nav currentPage={title} />
    <Container style={{ background: 'rgba(246, 245, 241, 1.0)' }}>{children}</Container>
    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx>{`
      .root {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
    `}</style>
  </div>
);
