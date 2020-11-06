import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import { InitialFormSchedule, DataType } from 'interfaces';
import { cinemaOptions } from 'helper/constant';
import { formatDate, formatTime } from 'helper/functions';
import { useMoviesOptionQuery, useTheaterOptionsQuery } from 'graphql/generated';

type Props = {
  initialForm?: InitialFormSchedule;
}

const FormComponent: React.FC<Props> = ({ initialForm }) => {
  const [loading, setLoading] = useState(false);

  const [date, setDate] = useState(() => {
    if (initialForm?.theater) {
      return new Date(initialForm?.date);
    }
    return new Date();
  });

  const [time, setTime] = useState(() => {
    if (initialForm?.time) {
      return new Date(123456);
    }
    return new Date();
  });

  const [cinema, setCinema] = useState(() => {
    if (initialForm?.location) {
      return cinemaOptions.find((cinema) => cinema.value === initialForm.location)
    }
    return {} as DataType;
  });

  const [theater, setTheater] = useState(() => {
    if (initialForm?.theater) {
      return {
        label: initialForm.theater,
        value: initialForm.theaterId,
      }
    }
    return {} as DataType;
  });

  const [movie, setMovie] = useState(() => {
    if (initialForm?.movie) {
      return {
        label: initialForm.movie,
        value: initialForm.movieId,
      }
    }
    return {} as DataType;
  });

  const { data } = useMoviesOptionQuery();
  const { data: theaters } = useTheaterOptionsQuery({
    variables: {
      location: cinema?.value || ''
    }
  });

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      console.log(formatDate(date), formatTime(time.getTime().toString()));
      console.log(time.getTime().toString());
      console.log(theater, movie, cinema);


      setLoading(false);
    }, 1000);
  }

  return (
    <div className='grid grid-cols-2 gap-10'>
      <div className='intro-x flex flex-col col-span-1 w-full' >
        {/* Date */ }
        <div className='intro-x flex items-center justify-center' style={ { zIndex: 100 } }>
          <div className='text-left font-bold text-lg w-24'>Date: </div>
          <DatePicker
            className='input border w-64 z-50 text-center'
            dateFormat='dd/MM/yyyy'
            selected={ date }
            onChange={ (date: Date) => setDate(date) }
            minDate={ new Date() }
          />
        </div>

        {/* Cinema */ }
        <div className='flex items-center justify-center mt-5'>
          <div className='text-left font-bold text-lg w-24'>Cinema: </div>
          <Select
            value={ cinema }
            className='w-64'
            placeholder="Choose Cinema"
            options={ cinemaOptions }
            onChange={ (c: any) => setCinema(c) }
          />
        </div>

        {/* Theater */ }
        <div className='flex items-center justify-center mt-5'>
          <div className='text-left font-bold text-lg w-24'>Theater: </div>
          <Select
            value={ theater }
            placeholder="Choose Theater"
            className='w-64'
            options={ theaters?.theaterOptions.map((item) => ({ label: item.name, value: item.id })) }
            onChange={ (c: any) => setTheater(c) }
          />
        </div>

        {/* Movie */ }
        <div className='flex items-center justify-center mt-5'>
          <div className='text-left font-bold text-lg w-24'>Movie: </div>
          <Select
            value={ movie }
            className='w-64'
            placeholder="Choose Movie"
            options={ data?.moviesOption.map((item) => ({ label: item.name, value: item.id })) }
            onChange={ (c: any) => setMovie(c) }
          />
        </div>

        {/* Date */ }
        <div className='flex items-center justify-center mt-5'>
          <div className='text-left font-bold text-lg w-24'>Time: </div>
          <DatePicker
            className='input border w-64 z-50 text-center'
            selected={ time }
            onChange={ (date: Date) => setTime(date) }
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={ 15 }
            timeCaption="Time"
            dateFormat="h:mm aa"
          />
        </div>

        <div className='mx-auto' style={ { width: '24rem' } }>
          <button onClick={ handleSubmit }
            className="button inline-block bg-theme-100 text-white py-3 px-5 mt-5 rounded-md shadow-lg font-bold w-full">
            Submit
          { loading && <img src="/oval.svg" className='w-4 h-4 ml-2 inline-block' /> }
          </button>
        </div>
      </div>
      <div className='col-span-1'>
        <div className='w-full h-64 bg-theme-1'></div>
      </div>
    </div>
  );
};

export default FormComponent;
