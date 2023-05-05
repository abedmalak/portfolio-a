import Image from 'next/image';
import React from 'react';
import Capstone from '../public/assets/projects/capstone.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const inventory = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={Capstone}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Inventory Management System</h2>
          <h3>MERN stack</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Full stack inventory management application, follow the steps in order to use it. Step 1: click on the Manager Demo button and login with User: abedtestuser@gmail.com with Password: test123.
             Step 2: open the Viewer demo
             Step 3: open the Manager demo side by side with the viewer demo and change the inventory.

            In case you were not able to follow the steps, you can watch the video for the clear demonstration
          </p>
        
          <a
            href='https://github.com/abedmalak/manager'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-6'>Manager Code</button>
          </a>
          <a
            href='https://sultansteeladmin.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4  mr-6'>Manager Demo</button>
          </a>
          <a
            href='https://github.com/abedmalak/viewer'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-6'>Viewer Code</button>
          </a>
          <a
            href='https://sultansteelinventory.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-6'>Viewer Demo</button>
          </a>

          <a
            href='https://www.youtube.com/watch?v=6nhD7vMoYNw'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4  mr-6'>Live Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node
              </p>

            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default inventory;
