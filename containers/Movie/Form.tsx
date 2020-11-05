import React from 'react';
import { Form, Formik } from 'formik';

import TextField from 'components/FormInput/Text';
import TextareaField from 'components/FormInput/Textarea';
import MultiSelect from 'components/FormInput/Select';
import FileUpload from 'components/FormInput/FileUpload';
import Switch from 'components/FormInput/Switch';

import { GenreOptions, CountryOptions } from 'helper/constant';
import { DataType, InitialFormMovie } from 'interfaces';
import { useCreateMovieMutation } from 'graphql/generated';
import { NotificationManager } from 'react-notifications';

const initialValues = {
  isShow: false,
  name: '',
  description: '',
  type: [] as DataType[],
  director: '',
  producer: '',
  country: {},
  duration: 0,
  thumbnail: [],
  images: [],
}

type Props = {
  initialForm?: InitialFormMovie;
}

const FormComponent: React.FC<Props> = ({ initialForm }) => {
  const [createMovie] = useCreateMovieMutation();

  return (
    <Formik
      initialValues={initialForm || initialValues}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        console.log(values);

        setTimeout(async () => {
          // const types = values.type.map((item) => (item.value));
          const result = await createMovie({
            variables: {
              data: {
                name: values.name,
                description: values.description,
                type: values.type.map((item) => item.value).toString(),
                director: values.director,
                producer: values.producer,
                country: values.country?.['values'] || 'vietnam',
                duration: values.duration,
                thumbnail: values.thumbnail[0],
                isShow: values.isShow,
                images: values.images,
              }
            }
          });
          if (result) {
            NotificationManager.success(
              `Create movie`,
              'Create Successfull',
              2000,
            );
          } else {
            NotificationManager.error(
              `Something went wrong!!!`,
              'Create failed',
              2000,
            );
          }
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {({ isSubmitting }) => (
        <Form className='flex flex-col'>
          <div className='flex mx-auto'>
            <Switch name='isShow' label='Showing' />
          </div>
          <TextField name="name" type="text" label="Name" />
          <TextareaField name="description" type="text" label="Description" />
          <MultiSelect name='type' label='Genre' data={GenreOptions} isMulti={true} />
          <TextField name="director" type="text" label="Director" />
          <TextField name="producer" type="text" label="Producer" />
          <MultiSelect name='country' label='Country' data={CountryOptions} isMulti={false} />
          <TextField name="duration" type="number" label="Duration" />
          <FileUpload label="Thumbnail" name="thumbnail" isMulti={false} />
          <FileUpload label="Images" name="images" isMulti={true} />

          <button type="submit" disabled={isSubmitting}
            className="button inline-block bg-theme-100 text-white py-3 px-5 mt-5 rounded-md shadow-lg font-bold">
            Submit
            {isSubmitting && <img src="/oval.svg" className='w-4 h-4 ml-2 inline-block' />}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
