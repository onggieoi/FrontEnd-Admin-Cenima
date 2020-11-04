import React, { useState } from 'react';

type Props = {
  images: string[];
  setImages: Function;
}

const FileUpload: React.FC<Props> = ({ images, setImages }) => {

  const handleOnChange = (e) => {
    e.preventDefault();
    const files = e.target.files;

    if (files.length) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = (() => {
          images.push(reader.result?.toString() || '');
          setImages([...images]);
        });
      }
    }
  }

  return (
    <>
      <input type="file" onChange={ handleOnChange } multiple={ true } formEncType='multipart/form-data' />
      {
        images.length > 0 && (
          <div className='p-5 my-5 overflow-hidden bg-gray-300 grid gap-3 grid-cols-12 mx-auto' style={ { maxWidth: '1000px', maxHeight: '500px' } }>
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
    </>
  );
};

export default FileUpload;
