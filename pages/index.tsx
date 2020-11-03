import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import Layout from 'containers/AppLayout';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Cinema | UNKNOWN</title>
      </Head>
      <Layout>
        <div>DashBoard</div>
      </Layout>
    </>
  );
};

export default Home;
