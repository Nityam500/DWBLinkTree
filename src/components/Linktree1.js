import React, { useState } from 'react';
import facebook from '../asset/FB_Logo.svg';
import youtube from '../asset/YT_Logo.svg';
import googlemaps from '../asset/Drop_Pin.svg';
import whatsapp from '../asset/WA_Logo.svg';
function Linktree() {
  const [links, setLinks] = useState([]);

  return (
    <div className="flex flex-col items-center mt-2 bg-white text-gray-800 min-h-screen">
      {/* Top Section: Business Name and Keywords */}
      <div className='flex flex-col items-center bg-white w-full py-2 text-indigo-950'>
        <h1 className='text-3xl font-serif font-extrabold mb-2'>Dream Work Builder</h1>
        <div className='flex flex-row items-center text-lg'>
          <hr className='border-t-2 border-indigo-950 my-4 w-8' />
          <p className='mx-2'>Always There For You</p>
          <hr className='border-t-2 border-indigo-950 my-4 w-8' />
        </div>
        <div className='flex flex-row items-center text-md my-2'>
          <p className='mx-2'>Hassle-Free</p>
          <div className='border-l-2 border-indigo-950 h-3 mx-2'></div>
          <p className='mx-2'>100% Transparent</p>
          <div className='border-l-2 border-indigo-950 h-3 mx-2'></div>
          <p className='mx-2'>Reliable</p>
        </div>
      </div>
      <div className='ml-8 flex flex-col bg-white w-full p-1'>
        <h1 className='text-xl font-bold'>Contact us:</h1>
        <div className='flex flex-row justify-around space-x-4 px-4 py-2'>
            <div className='flex flex-col w-1/2 bg-slate-400/50 backdrop-filter backdrop-blur-[20px] text-indigo p-2 rounded-xl shadow-lg'>
              <h2 className='text-xl font-semibold'>Dinesh Mittal</h2>
              <p className='font-semibold text-sm'>Mobile: 9810280078</p>
              <a href="https://api.whatsapp.com/send/?phone=%2B919810280078&text&type=phone_number&app_absent=0" className='mt-3 rounded-md p-2 flex flex-row text-indigo-950'>
                <img src={whatsapp} alt="Youtube Logo" className="w-6 h-6 mr-1 " />
                <p className='pb-1 text-sm'>Message on Whatsapp</p>
              </a>
            </div>
            <div className='flex flex-col w-1/2 bg-slate-400/50 backdrop-filter backdrop-blur-[20px] text-indigo p-2 rounded-xl shadow-lg'>
              <h2 className='text-xl font-semibold'>Aditya Mittal</h2>
              <p className= 'font-semibold text-sm'>Mobile: 9999958872</p>
              <a href="https://api.whatsapp.com/send/?phone=%2B919999958872&text&type=phone_number&app_absent=0" className='mt-3 rounded-md p-2 flex flex-row text-indigo-950'>
                <img src={whatsapp} alt="Youtube Logo" className="w-6 h-6 mr-1" />
                  <p className='pb-1 text-sm'>Message on Whatsapp</p>
              </a>
            </div>
        </div>
      </div>

      {/* Office Address */}
      <div className='ml-8 py-4 px-1 flex flex-col w-full text-gray-700'>
      <h1 className='text-xl font-bold'>Office:</h1>
        <a href="https://maps.app.goo.gl/cz8zTn2pd5riZ1ZC6" className='flex items-center pt-2  w-[95%] h-24 text-indigo font-semibold py-2'>
            <img src={googlemaps} alt="Google Maps Logo" className="w-14 h-14 mr-3" />
            <div className='flex flex-col items-center'>
              <p className='pb-1'>Click to View us on Google Maps</p>
              {/* <p className='bg-white text-indigo-950 p-1 rounded-md text-sm'>Tap to Open</p> */}
            </div>
          </a>

          <p className='ml-8 mb-2 text-xl'><strong>Address: </strong>A-2217 Greenfield Colony, Faridabad</p>
        </div>

      {/* Middle Section: Social Media Links */}
      <div className='flex flex-col items-center p-8 bg-white text-white w-full'>
      <a href="https://www.youtube.com/@dreamworkbuilder954" className='flex items-center pt-2 bg-white border-1 border-slate-200 w-[95%] h-24 text-indigo-900 font-semibold py-2 px-4 rounded-2xl mb-4 shadow-md'>
          <img src={youtube} alt="Youtube Logo" className="w-14 h-14 mr-3" />
          <div className='flex flex-col items-center'>
            <p className='pb-1'>Latest Properties Virtual Tours</p>
            {/* <p className='bg-white text-indigo-950 p-1 rounded-md text-sm'>Tap To Open</p> */}
          </div>
        </a>
        <a href="#" className='flex items-center  pt-2 bg-white border-1 border-slate-200 w-[95%] h-24 text-indigo-900 font-semibold py-2 px-4 rounded-2xl mb-4 shadow-md'>
          <img src={facebook} alt="Youtube Logo" className="w-14 h-14 mr-3" />
          <div className='flex flex-col items-center'>
            <p className='pb-1'>Connect with us on Facebook</p>
            {/* <p className='bg-white text-indigo-950 p-1 rounded-md text-sm'>Tap to Open</p> */}
          </div>
        </a>
      </div>
    </div>
  );
}

export default Linktree;
