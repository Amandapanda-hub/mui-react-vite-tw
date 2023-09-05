import React from "react";

const SignUpSlide: React.FC = () => {
    const text = "WORK WORK WORK WORK WORK WORK WORK WORK WORK WORK "; 
    return (
      <div id="rssBlock" className="bg-white absolute h-[80px] w-full overflow-hidden text-black">
        <p className="cnnContents tracking-widest">
          <span className="marqueeStyle">{text}{text}</span>
        </p>
      </div>
    );
  };
  
  export default SignUpSlide;
  