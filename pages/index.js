import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/Nav';

const App = () => {
  return (
    <div>
      <Head>
        <title>Albion Tools</title>
      </Head>
      <Link href="/BlackMarketCrafting">
        <a>BlackMarketCrafting</a>
      </Link>
    </div>
  );
};

export default App;
