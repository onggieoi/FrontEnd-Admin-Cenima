import React, { useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import Layout from 'containers/AppLayout';
import FileUpload from 'components/FileUpload';

const Home: NextPage = () => {
  const [images, setImages] = useState([] as string[]);

  return (
    <>
      <Head>
        <title>Cinema | UNKNOWN</title>
      </Head>
      <Layout>
        <div>DashBoard</div>

        <FileUpload images={ images } setImages={ setImages } />
      </Layout>
    </>
  );
};

export default Home;
