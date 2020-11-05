import React from 'react';

import Layout from 'containers/AppLayout';
import Head from 'next/head';
import DetailPage from 'containers/Movie/Detail';

const MovieDetail = () => {
  return (
    <>
      <Head>
        <title>title | UNKNOWN</title>
      </Head>

      <Layout>
        <DetailPage />
      </Layout>
    </>
  );
};

export default MovieDetail;