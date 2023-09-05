import React from 'react';

const SignUpSlide: React.FC = () => {
  const text = "SIGN UP SIGN UP SIGN UP SIGN UP SIGN UP SIGN UP SIGN UP "; 
  return (
    <div id="rssBlockWhite" className="relative w-full py-20 overflow-hidden text-black">
      {/* Default size for larger screens is text-base, on smaller screens it'll be text-xl */}
      <p className="cnnContentsSign text-xl md:text-base tracking-widest">
        <span className="marqueeStyle">{text}{text}</span>
      </p>
    </div>
  );
};
  
  export default SignUpSlide;
 