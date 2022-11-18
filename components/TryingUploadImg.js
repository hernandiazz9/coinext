import React from 'react';
import { buildClient } from '@datocms/cma-client-browser';

const TryingUploadImg = () => {
  // const client = buildClient({
  //   apiToken: '63a093965238a42361bb30b71d23ca',
  //   // Authorization: 'Bearer 63a093965238a42361bb30b71d23ca',
  //   Accept: 'application/json',
  //   'X-Api-Version': 3,
  // });
  // console.log({ client });

  // const records = client.items
  //   .list()
  //   .then(() => console.log('records', records))
  //   .catch((err) => console.log('err', err));

  function createUpload(file) {
    return client.uploads.createFromFileOrBlob({
      // File object to upload
      fileOrBlob: file,
      // if you want, you can specify a different base name for the uploaded file
      filename: 'different.png',
      // skip the upload and return an existing resource if it's already present in the Media Area:
      skipCreationIfAlreadyExists: true,
      // be notified about the progress of the operation.
      onProgress: (info) => {
        // info.type can be one of the following:
        //
        // * DOWNLOADING_FILE: client is downloading the asset from the specified URL
        // * REQUESTING_UPLOAD_URL: client is requesting permission to upload the asset to the DatoCMS CDN
        // * UPLOADING_FILE: client is uploading the asset
        // * CREATING_UPLOAD_OBJECT: client is finalizing the creation of the upload resource
        console.log('Phase:', info.type);
        // Payload information depends on the type of notification
        console.log('Details:', info.payload);
      },
      // specify some additional metadata to the upload resource
      // author: 'New author!',
      // copyright: 'New copyright',
      // default_field_metadata: {
      //   en: {
      //     alt: 'New default alt',
      //     title: 'New default title',
      //     focal_point: {
      //       x: 0.3,
      //       y: 0.6,
      //     },
      //     custom_data: {
      //       watermark: true,
      //     },
      //   },
      // },
    });
  }

  //   const fileInput = document.querySelector('input[type="file"]');
  //   fileInput.addEventListener('change', async (event) => {
  //     for (let file of files) {
  //       createUpload(file).then((upload) => console.log(upload));
  //     }
  //   });
  const handleChangeFile = (event) => {
    const file = event.target.files[0];
    console.log(file);
    createUpload(file).then((upload) => console.log(upload));
  };
  return (
    <div>
      <input type='file' onChange={handleChangeFile} />
    </div>
  );
};

export default TryingUploadImg;
