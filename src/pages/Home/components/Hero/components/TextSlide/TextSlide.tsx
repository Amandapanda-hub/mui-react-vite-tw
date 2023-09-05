import React from 'react';

const TextSlide: React.FC = () => {
  const text = "WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK "; 
  return (
    <div id="rssBlock" className="absolute top-24 h-[80px] w-full overflow-hidden text-white z-5 md:z-0">
      <p className="cnnContents tracking-widest">
        <span className="marqueeStyle">{text}{text}</span>
      </p>
    </div>
  );
};


export default TextSlide;
