import React, { useState } from 'react';
import {
  Search,
} from 'react-feather';
import Table from 'components/Table';
import { TableItem } from 'interfaces';
import Link from 'next/link';

const cols = ['iamges', 'name', 'during', 'status']
const dataEx: TableItem[] = [
  {
    id: 1,
    name: 'King',
    subName: 'King Lion',
    images: ['', '', ''],
    status: true,
    during: 164,
  },
  {
    id: 2,
    name: 'Queen',
    subName: 'Queen Rambit',
    images: ['', '', ''],
    status: false,
    during: 164,
  }
]

const CustomersPage = () => {
  const [data, setData] = useState(dataEx);

  return (
    <>
      <div className='top-bar'>
        <div className="-intro-x breadcrumb mr-auto hidden sm:flex">
          Movies
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-no-wrap items-center mt-2">
          <Link href='/movie/create'>
            <button className=" text-white bg-theme-100 shadow-md mr-2 px-5 py-2 rounded-md">Add New Movie</button>
          </Link>

          <div className="w-full sm:w-auto mt-3 ml-auto">
            <div className="w-56 relative text-gray-700">
              <input type="text" placeholder="Search..."
                className="input w-56 box pr-10 placeholder-theme-13" />
              <Search className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
            </div>
          </div>
        </div>

        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          <Table Cols={ cols } Data={ data } type={ 'movie' } />
        </div>
      </div>
    </>
  );
};

export default CustomersPage;
