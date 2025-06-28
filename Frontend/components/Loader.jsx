import React from 'react'
import { RotateLoader } from 'react-spinners';
function Loader() {
  return (
    <div className='abolute min-h-screen w-full flex justify-center items-center bg-transparent z-100'>
      <RotateLoader />
    </div>
  )
}

export default Loader
