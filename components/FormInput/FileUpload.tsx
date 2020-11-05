import { useField } from 'formik';
import React, { InputHTMLAttributes, useState } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
  isMulti: boolean;
};

const FileUpload: React.FC<Props> = (props) => {
  const [, {
    error, touched, value,
  }, { setValue }] = useField(props);

  const [images, setImages] = useState(value as string[]);

  const handleOnChange = (e) => {
    e.preventDefault();
    const files = e.target.files;

    if (files.length) {
      if (props.isMulti) {
        for (let i = 0; i < files?.length; i++) {
          const reader = new FileReader();
          reader.readAsDataURL(files[i]);
          reader.onload = (() => {
            images.push(reader.result?.toString() || '');
            setImages([...images]);
          });
        }
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (() => {
          setImages([reader.result?.toString() || '']);
        });
      }
    }
    setValue(images);
  }

  return (
    <div className='mb-3'>
      <label>{ props.label }: </label>
      <input type="file" onChange={ handleOnChange } multiple={ props.isMulti } formEncType='multipart/form-data' name={ props.name } />
      {
        images.length > 0 && (
          <div className='p-5 my-3 overflow-hidden bg-gray-300 grid gap-3 grid-cols-12 mx-auto' style={ { maxWidth: '1000px', maxHeight: '500px' } }>
            {
              images.map((url, index) => (
                <div key={ index } className='col-span-4'>
                  <img src={ url } className='object-center w-full rounded-md' />
                </div>
              ))
            }
          </div>
        )
      }
    </ div>
  );
};

export default FileUpload;
