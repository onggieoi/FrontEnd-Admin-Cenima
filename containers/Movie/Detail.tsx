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
          Movies
        </div>
      </div>

      <div className='p-5 mx-auto' style={ { maxWidth: '1000px' } }>
        <FormComponent initialForm={ {
          id: 1,
          name: '',
          description: '',
          type: [],
          director: '',
          producer: '',
          country: [],
          duration: 0,
          thumbnail: [],
          images: [],
        } } />
      </div>
    </>
  );
};

export default DetailPage;
