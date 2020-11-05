import React from 'react';

import Layout from 'containers/AppLayout';
import Head from 'next/head';
import DetailPage from 'containers/Schedule/Detail';

const MovieDetail = () => {
  return (
    <>
      <Head>
        <title>title schedule | UNKNOWN</title>
      </Head>

      <Layout>
        <DetailPage />
      </Layout>
    </>
  );
};

export default MovieDetail;