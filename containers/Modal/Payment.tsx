import React from 'react';

import ProcessBar from 'components/ProcessBar';

interface Props {
}

const Payment: React.FC<Props> = () => {


  return (
    <div className='bg-white overflow-y-auto overflow-x-hidden relative' style={{ width: '1000px', height: '90vh' }}>

      <h1 className='text-center text-2xl font-bold mt-5'>Payment</h1>

      <div className='border border-theme-50 my-5 w-11/12 mx-auto'></div>


    </div>
  );
}

export default Payment;
