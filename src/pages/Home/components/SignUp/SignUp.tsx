import { Button } from '@material-tailwind/react';

export default function SignUp() {
  return (
    <>
<div className="bg-black text-white flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8 py-8 sm:py-0">
        <div className='flex flex-col justify-center items-center text-center space-y-4 sm:space-y-6 md:space-y-10 py-20 md:py-40 lg:py-60 md:pt-60'>
        
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl uppercase">Join Our Waitlist</h1>
          <p className="text-xs sm:text-sm md:text-lg font-thin">There is no beginning or end, only updates and reminders to buy your tickets when available.</p>
        
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 py-2 text-left">
            <label htmlFor="email" className="block mb-2">Email Address:</label>
            <input id="email" className="w-full h-[35px] sm:h-[40px] md:h-[50px] py-1 sm:py-2 px-3 sm:px-4" placeholder="Enter your email"></input>
          </div>
        
          <Button variant="outlined" className= "border border-white text-white py-1 sm:py-2 px-3 sm:px-4">
            Sign Up
          </Button>
      
        </div>
      </div>
    </>
  )
}
