// import React from 'react';
import { Button } from '@material-tailwind/react';
import Shirt  from '../../../../assets/images/products/white-t-shirt.png'

export default function FirstStopShop() {
    return (
<div className="flex flex-wrap md:flex-nowrap justify-center items-center text-start text-white">
        {/* Left Container */}
        <div className="w-full md:w-1/2 p-4 space-y-4 sm:space-y-6 md:space-y-10 py-20 md:py-80 lg:py-80 md:pt-60">
          <h1 className="text-4xl md:text-8xl font-bold mb-4 uppercase">Shop the shop</h1>
          <p className="mb-4">
            Your text here. This is a sample paragraph for illustration purposes.
          </p>
          <Button variant="outlined" className= "border border-white text-white py-2 px-4">
            Click Me
          </Button>
        </div>
  
        {/* Right Container */}
        <div className="w-full md:w-1/3 p-4">
          <img
            src={Shirt}
            alt="Description of the Image"
            className="w-full h-auto"
          />
        </div>
      </div>
    );
  } 