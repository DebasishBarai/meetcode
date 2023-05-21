'use client';
import { useState } from 'react';
const LayoutComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <main>
      <div className={`${isOpen ? 'hidden' : ''} absolute right-0 top-0 `}>
        <div className='relative left-[20%] top-0 h-20 w-[80%] border-b border-b-[#28A0F1]/[0.5]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='0.5'
            stroke='currentColor'
            onClick={toggleOpen}
            className='absolute right-1 top-1 h-16 w-16 text-[#28A0F1] hover:rounded-lg hover:bg-[#28A0F1] hover:text-[#31202B] hover:shadow-[0_0_100px_10px_#28A0F1]'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </div>
      </div>
      <div className={`${!isOpen ? 'hidden' : ''}`}>
        <div className='absolute right-0 top-0 min-h-[80%] w-96 grid-flow-row grid-rows-[5rem_auto_5rem] rounded-[0_0_0_2rem] bg-[rgba(255,_255,_255,_0.05)] shadow-2xl'>
          <div className='relative left-[20%] top-0 h-20 w-[80%] border-b border-b-[#28A0F1]/[0.5]'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='0.5'
              stroke='currentColor'
              onClick={toggleOpen}
              className='absolute right-1 top-1 h-16 w-16 text-[#28A0F1] hover:rounded-lg hover:bg-[#28A0F1] hover:text-[#31202B] hover:shadow-[0_0_100px_10px_#28A0F1]'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>
          <div>
            <div className='relative left-[20%] top-0 flex h-16 w-[80%] flex-col items-start justify-center border-b border-b-[#28A0F1]/[0.5]'>
              <button className='absolute p-4 text-[#28A0F1] hover:font-semibold'>
                Dashboard
              </button>
            </div>
            <div className='relative left-[20%] top-0 flex h-16 w-[80%] flex-col items-start justify-center border-b border-b-[#28A0F1]/[0.5]'>
              <button className='absolute p-4 text-[#28A0F1] hover:font-semibold'>
                Problems
              </button>
            </div>
            <div className='relative left-[20%] top-0 flex h-16 w-[80%] flex-col items-start justify-center border-b border-b-[#28A0F1]/[0.5]'>
              <button className='absolute p-4 text-[#28A0F1] hover:font-semibold'>
                Add User
              </button>
            </div>
            <div className='relative left-[20%] top-0 flex h-16 w-[80%] flex-col items-start justify-center border-b border-b-[#28A0F1]/[0.5]'>
              <button className='absolute p-4 text-[#28A0F1] hover:font-semibold'>
                Logout
              </button>
            </div>
          </div>
          <div className='absolute bottom-10 left-[20%] flex h-20 w-[80%] flex-row items-start justify-start'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='h-16 w-16 text-[#28A0F1]'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
            <h1 className='p-4 text-[#28A0F1] w-[80%] truncate'>User name</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LayoutComponent;
