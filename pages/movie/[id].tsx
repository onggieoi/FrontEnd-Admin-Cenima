import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useMovieQuery } from 'graphql/generated';

import Layout from 'containers/AppLayout';
import Head from 'next/head';
import DetailPage from 'containers/Movie/Detail';

const MovieDetail = () => {
  const router = useRouter();

  const { data, loading } = useMovieQuery({
    variables: {
      id: Number(router.query?.id) || -1,
    }
  });

  // useEffect(() => {
  //   if (!data?.movie.movie || data.movie.error) {
  //     router.push('/404');
  //   }
  // });

  return (
    <>
      <Head>
        <title>title | UNKNOWN</title>
      </Head>

      <Layout>
        {
          loading ? (
            <div></div>
          ) : <DetailPage movie={data?.movie.movie} />
        }
      </Layout>
    </>
  );
};

export default MovieDetail;