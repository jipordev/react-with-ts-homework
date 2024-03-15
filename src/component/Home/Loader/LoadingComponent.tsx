
'use client';

import { Spinner } from 'flowbite-react';

function LoadingComponent() {
  return (
    <div className='flex justify-center items-center'>
      <Spinner aria-label="Default status example" />
    </div>
  )
}
export default LoadingComponent
