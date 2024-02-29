import React, { useState } from 'react';
import facebook from '../asset/facebook.png';
import instagram from '../asset/instagram.png';
import youtube from '../asset/youtube.png';
import googlemaps from '../asset/googleMaps.png';
import whatsapp from '../asset/whatsapp.png';
function Linktree() {
  const [links, setLinks] = useState([]);

  return (
    <div className="flex flex-col items-center bg-gray-100 text-gray-800 min-h-screen">
      {/* Top Section: Business Name and Keywords */}
      <div className='flex flex-col items-center bg-white w-full py-2 text-indigo-950'>
        <h1 className='text-4xl font-serif font-extrabold mb-2'>Dream Work Builder</h1>
        <div className='flex flex-row items-center text-lg'>
          <hr className='border-t-2 border-indigo-950 my-4 w-8' />
          <p className='mx-2'>Always There For You</p>
          <hr className='border-t-2 border-indigo-950 my-4 w-8' />
        </div>
        <div className='flex flex-row items-center text-lg my-2'>
          <p className='mx-2'>Hassle-Free</p>
          <div className='border-l-2 border-indigo-950	 h-3 mx-2'></div>
          <p className='mx-2'>100% Transparent</p>
          <div className='border-l-2 border-indigo-950 h-3 mx-2'></div>
          <p className='mx-2'>Reliable</p>
        </div>
      </div>

      {/* Middle Section: Social Media Links */}
      <div className='flex flex-col items-center p-8 bg-indigo-950 text-white w-full shadow-md'>
      <a href="https://www.youtube.com/@dreamworkbuilder954" className='flex items-center pt-2 bg-indigo-950 border-2 border-white w-[95%] h-24 text-white font-semibold py-2 px-4 rounded-lg mb-4 shadow-md'>
          <img src={youtube} alt="Youtube Logo" className="w-14 h-14 mr-3" />
          <div className='flex flex-col items-center'>
            <p className='pb-1'>Latest Properties Virtual Tours</p>
            <p className='bg-white text-indigo-950 p-1 rounded-md text-sm'>Tap To Open</p>
          </div>
        </a>
        <a href="#" className='flex items-center  pt-2 bg-indigo-950 border-2 border-white w-[95%] h-24 text-white font-semibold py-2 px-4 rounded-lg mb-4 shadow-md'>
          <img src={facebook} alt="Youtube Logo" className="w-14 h-14 mr-3" />
          <div className='flex flex-col items-center'>
            <p className='pb-1'>Connect with us on Facebook</p>
            <p className='bg-white text-indigo-950 p-1 rounded-md text-sm'>Tap to Open</p>
          </div>
        </a>
        <a href="https://maps.app.goo.gl/cz8zTn2pd5riZ1ZC6" className='flex items-center pt-2 bg-indigo-950 border-2 border-white w-[95%] h-24 text-white font-semibold py-2 px-4 rounded-lg mb-4 shadow-md'>
          <img src={googlemaps} alt="Youtube Logo" className="w-14 h-14 mr-3" />
          <div className='flex flex-col items-center'>
            <p className='pb-1'>Office Location (Google Maps)</p>
            <p className='bg-white text-indigo-950 p-1 rounded-md text-sm'>Tap to Open</p>
          </div>
        </a>
      </div>

      {/* Bottom Section: Contact Details and Office Address */}
      <div className='pt-2 flex flex-col items-center bg-white w-full text-gray-700  rounded-md shadow-md'>
        <h1 className='ml-8 text-3xl font-bold'>Contact us:</h1>
        <div className='flex flex-row space-x-4 p-4'>
            <div className='flex flex-col items-center bg-indigo-950 text-white p-2 rounded-xl'>
              <h2 className='text-2xl font-semibold'>Dinesh Mittal</h2>
              <p className=' font-semibold text-md'>Mobile: 9810280078</p>
              <a href="https://maps.app.goo.gl/cz8zTn2pd5riZ1ZC6" className='mt-3 rounded-md p-2 flex flex-row bg-white text-indigo-950'>
                <img src={whatsapp} alt="Youtube Logo" className="w-6 h-6 mr-1 " />
                  <p className='pb-1'>Send Message</p>
              </a>
            </div>
            <div className='flex flex-col items-center  bg-indigo-950 text-white p-2 rounded-xl'>
              <h2 className='text-2xl font-semibold'>Aditya Mittal</h2>
              <p className= 'font-semibold text-md'>Mobile: 9999958872</p>
              <a href="https://maps.app.goo.gl/cz8zTn2pd5riZ1ZC6" className='mt-3 rounded-md p-2 flex flex-row bg-white text-indigo-950'>
                <img src={whatsapp} alt="Youtube Logo" className="w-6 h-6 mr-1" />
                  <p className='pb-1'>Send Message</p>
              </a>
            </div>
        </div>
        <div className='p-4 flex flex-col items-center'>
          <p className='ml-8 font-semibold text-xl'>Office Address:</p>
          <p className='ml-8 mb-2 text-xl'> A-2217 Greenfield Colony, Faridabad</p>
        </div>
       
        
      </div>
    </div>
  );
}

export default Linktree;
