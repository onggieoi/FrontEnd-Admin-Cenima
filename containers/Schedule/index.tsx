import React, { useState } from 'react';
import {
  Calendar,
  Search,
} from 'react-feather';
import Link from 'next/link';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import Table from 'components/Table';
import { TableItem } from 'interfaces';
import { cinemaOptions } from 'helper/constant';

const cols = ['thumbnail', 'name', 'during', 'session', 'room']
const dataEx: TableItem[] = [
  {
    id: 1,
    name: 'King',
    subName: 'King Lion',
    images: ['', '', ''],
    session: '12:00',
    room: 'first',
    during: 164,
  },
  {
    id: 2,
    name: 'Queen',
    subName: 'Queen Rambit',
    images: ['', '', ''],
    session: '22:00',
    room: 'second',
    during: 164,
  }
]

const ScheduleContainer = () => {
  const [data, setData] = useState(dataEx);
  const [filter, setFilter] = useState({
    orderNumber: '',
    productName: '',
    date: new Date('8/17/2020'),
  });
  const [cinema, setCinema] = useState('');

  return (
    <>
      <div className='top-bar'>
        <div className="-intro-x breadcrumb mr-auto">
          Schedules
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="intro-y col-span-12 flex flex-wrap items-center mt-2 z-50">
          <Link href='/schedule/create'>
            <button className=" text-white bg-theme-100 shadow-md mr-2 px-5 py-2 rounded-md">Add New Schedule</button>
          </Link>

          <div className='ml-auto w-64 z-40'>
            <Select
              placeholder="Choose Cinema"
              options={ cinemaOptions }
              onChange={ (c) => {
                setCinema(c?.['value']);
              }
              }
            />
          </div>

          <div className='ml-10 rounded-l w-10 h-10 flex items-center justify-center bg-gray-100 border text-gray-600'>
            <Calendar className='w-4 h-4' />
          </div>
          <DatePicker
            className='input border ml-1 w-32 z-50 mr-10'
            selected={ filter.date }
            onChange={ (date: any) => setFilter({ ...filter, date }) }
          />

          <div className="w-auto">
            <div className="w-56 relative text-gray-700">
              <input type="text" placeholder="Search..."
                className="input w-56 box pr-10 placeholder-theme-13" />
              <Search className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
            </div>
          </div>

        </div>

        <div className="intro-y col-span-12">
          <Table Cols={ cols } Data={ data } type={ 'schedule' } />
        </div>
      </div>
    </>
  );
};

export default ScheduleContainer;
