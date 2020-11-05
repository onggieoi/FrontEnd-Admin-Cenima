import React from 'react';
import { Form, Formik } from 'formik';

import TextField from 'components/FormInput/Text';
import MultiSelect from 'components/FormInput/Select';
import FileUpload from 'components/FormInput/FileUpload';
import { GenreOptions, CountryOptions } from 'helper/constant';
import { InitialFormMovie } from 'interfaces';

const initialValues = {
  name: '',
  description: '',
  type: [],
  director: '',
  producer: '',
  country: [],
  duration: 0,
  thumbnail: [],
  images: [],
}

type Props = {
  initialForm?: InitialFormMovie;
}

const FormComponent: React.FC<Props> = ({ initialForm }) => {

  return (
    <Formik
      initialValues={ initialForm || initialValues }
      onSubmit={ (values, actions) => {
        setTimeout(() => {
          actions.setFieldError('name', 'testing');
          console.log(values);
          actions.setSubmitting(false);
        }, 1000);
      } }
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col'>
          <TextField name="name" type="text" label="Name" />
          <TextField name="description" type="text" label="Description" />
          <MultiSelect name='type' label='Genre' data={ GenreOptions } isMulti={ true } />
          <TextField name="director" type="text" label="Director" />
          <TextField name="producer" type="text" label="Producer" />
          <MultiSelect name='country' label='Country' data={ CountryOptions } isMulti={ false } />
          <TextField name="duration" type="number" label="Duration" />
          <FileUpload label="Thumbnail" name="thumbnail" isMulti={ false } />
          <FileUpload label="Images" name="images" isMulti={ true } />

          <button type="submit" disabled={ isSubmitting }
            className="button inline-block bg-theme-100 text-white py-3 px-5 mt-5 rounded-md shadow-lg font-bold">
            Submit
            { isSubmitting && <img src="/oval.svg" className='w-4 h-4 ml-2 inline-block' /> }
          </button>
        </Form>
      ) }
    </Formik>
  );
};

export default FormComponent;
