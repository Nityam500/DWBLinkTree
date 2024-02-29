import React, { useState } from 'react';

function Linktree() {
  const [links, setLinks] = useState([]);

  return (
    <div className="flex flex-col items-center bg-white">
      {/* Top Section: Business Name and Keywords */}
      <div className='flex flex-col items-center bg-gradient-to-r from-purple-500 to-pink-500 w-full py-8'>
        <h1 className='text-3xl text-white font-bold'>Dream Work Builder</h1>
        <div className='flex flex-row'>
          <hr className='border-t-2 border-white my-4 w-8' />
          <h3 className='textb-xl text-white pl-2 pr-2 font-semibold'>Always There For You</h3>
          <hr className='border-t-2 border-white my-4 w-8' />
        </div>
        <div className='flex flex-row items-center text-lg'>
          <p className='text-white'>Hassle-Free</p>
          <div className='border-l-2 border-white h-3 mx-2'></div>
          <p className='text-white'>100% Transparent</p>
          <div className='border-l-2 border-white h-3 mx-2'></div>
          <p className='text-white'>Reliable</p>
        </div>
        
      </div>

      {/* Middle Section: Social Media Links */}
      <div className='flex flex-col items-center  w-full mt-8'>
        <div className='flex justify-center w-4/5  rounded-full mb-4'>
          Property Tours
        </div>
        <div className='flex justify-center w-4/5 rounded-full mb-4'>
          Instagram
        </div>
        <div className='flex justify-center w-4/5  rounded-full mb-4'>
          {/* Add more social media links here */}
          Twitter
        </div>
        <div className='flex justify-center w-4/5 rounded-full mb-4'>
          Facebook
        </div>
      </div>

      {/* Bottom Section: Contact Details and Office Address */}
      <div className='flex flex-col items-center bg-white w-full mt-8 text-sm'>
        <p className='text-lg text-slate-800 font-semibold'>Contact us:</p>
        <p className='text-sm text-slate-700 font-semibold'>Phone: 9810280078</p>
        <p className='text-sm text-slate-700 font-semibold'>Phone: 9999958872</p>

        <p className='mt-4 text-lg text-slate-800 font-semibold'>Office Address:</p>
        <p className='text-md text-slate-700 font-semibold'>A-2217 Greenfield Colony, Faridabad</p>
      </div>
    </div>
  );
}

export default Linktree;
