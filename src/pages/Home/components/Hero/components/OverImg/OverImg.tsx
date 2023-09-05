import React from 'react';
import Mountain from '../../../../../../assets/images/hero/mountainsbw-removebg-preview.png'; 

const OverImg: React.FC = () => {
  return (
    <img src={Mountain} alt="Description" 
         className="w-full h-auto mt-4 z-10 relative" />
  );
};


export default OverImg;