import { useRouter } from 'next/router';
import React from 'react';
import FormComponent from './Form';

const DetailPage = () => {
  const router = useRouter();

  console.log(router.query?.id);

  return (
    <>
      <div className='top-bar'>
        <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
          Schedule
        </div>
      </div>

      <div className='p-5 mx-auto' style={ { width: '1500px' } }>
        <FormComponent initialForm={ {
          id: 1,
          dateId: 1,
          theaterId: 1,
          movieId: 1,
          location: 'hochiminh',
          time: 123456,
          date: '11/20/2020',
          movie: 'kinggg',
          theater: 'first',
        } } />
      </div>
    </>
  );
};

export default DetailPage;
