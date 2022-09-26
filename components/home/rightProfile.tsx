import { useEffect, useState } from 'react';
import { makeUnitString } from '../../lib/common';

export const Profile = () => {
  const [follower, setFollower] = useState(0);
  const [following, setFollowing] = useState(0);
  useEffect(() => {
    setFollowing(Math.random() * 100);
    setFollower(Math.random() * 10000);
  }, []);

  return (
    <div className='mb-[30px] border'>
      {/* picture */}
      <div className='flex justify-center pt-[15px]'>
        <img
          className='w-[200px] h-[200px]'
          src='https://cdn-icons-png.flaticon.com/512/4202/4202843.png'
          alt='profile image'
        />
      </div>
      <div className='m-3'>
        {/* string information */}
        <div className='pb-[15px]'>
          <div>
            <div className='flex items-center'>
              <span className='text-[1.05rem] font-bold'>Joseph Therrien</span>
              <img
                className='w-[20px] h-[20px] ml-[5px]'
                src='https://cdn-icons-png.flaticon.com/512/8539/8539214.png'
                alt='celebrity'
              />
            </div>
            <p className='text-[0.85rem]'>@Joseph</p>
          </div>
          <div>
            <span className='text-[0.85rem]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
            </span>
          </div>
        </div>
        {/* follow information */}
        <div className='flex justify-center items-center pb-[15px]'>
          <div className='flex items-center rounded-[10px] bg-slate-200 px-[6px] mr-[10px]'>
            <p className='mr-[4px] text-[0.85em]'>following</p><span className='font-bold'>{makeUnitString(following)}</span>
          </div>
          <div className='flex items-center rounded-[10px] bg-slate-200 px-[6px]'>
            <p className='mr-[4px] text-[0.85em]'>follower</p><span className='font-bold'>{makeUnitString(follower)}</span>
          </div>
        </div>
        {/* register date & sns link icons */}
        <div className='flex justify-center items-center flex-col'>
          <p className='text-[0.85em]'>register date 00/00/0000</p>
          <div className='flex mt-[10px]'>
            <img
              className='w-[20px] h-[20px] mx-[5px] opacity-50'
              src='https://cdn-icons-png.flaticon.com/512/1384/1384028.png'
              alt='sns1'
            />
            <img
              className='w-[20px] h-[20px] mx-[5px] opacity-50'
              src='https://cdn-icons-png.flaticon.com/512/733/733609.png'
              alt='sns1'
            />
            <img
              className='w-[20px] h-[20px] mx-[5px] opacity-50'
              src='https://cdn-icons-png.flaticon.com/512/3128/3128212.png'
              alt='sns1'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

