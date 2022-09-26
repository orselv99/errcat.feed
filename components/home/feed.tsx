import { useEffect, useState } from 'react';
import { makeUnitString } from '../../lib/common';

interface FeedData {
  thumbnail: string;
  profile: {
    image: string;
    name: string;
  };
  content: {
    title: string;
    preview: string;
    indicator: {
      key: string;
      value: number;
    }[];
  }
}

const WIDTH = 500;

export const Feed = () => {
  const [mockUps, setMockUps] = useState([] as FeedData[]);

  useEffect(() => {
    // mockup data
    function generateFeedData(): FeedData {
      const visited = (() => {
        if (Math.random() * 10 > 4) return true;
        return false;
      })();
      return {
        thumbnail: 'https://images.unsplash.com/photo-1574007557239-acf6863bc375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        profile: {
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          name: 'Joseph Therrien',
        },
        content: {
          title: 'White Mountains',
          preview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint...',
          indicator: [
            {
              // view
              key: (visited === true ? '✔' : '👁‍🗨'),
              value: Math.random() * 100000,
            },
            {
              // reply
              key: '💬',
              value: Math.random() * 100,
            },
            {
              // thumbsup
              key: (visited && (Math.random() * 10 > 4) ? '✨' : '⭐'),
              value: Math.random() * 1000,
            },
          ],
        }
      }
    }

    let feeddatas = [];
    for (let i = 0; i < 10; i++)
      feeddatas.push(generateFeedData());

    setMockUps(feeddatas);
  }, []);

  function onClick() {
    console.log('clicked');
  }

  return (
    <div>
      {
        mockUps.map((value, index) => {
          // ** NOTE 
          // https://tailwindcss.com/docs/content-configuration
          //  It could also be that you are trying to use dynamic class names,
          //  which won’t work because Tailwind doesn’t actually evaluate your source code 
          //  and can only detect static unbroken class strings.
          //
          // tailwind CSS 는 template literal 지원하지 않음. 
          // 반드시 completed string 으로 넣어야함
          return (
            <div
              key={`feed_${index}`}
              className='rounded-[10px] h-[400px] relative mb-10 cursor-pointer shadow-xl'
              style={{ width: `${WIDTH}px` }}
              onClick={onClick}>
              {/* thumbnail & view/reply/thumbsup */}
              <div
                className='rounded-t-[10px] bg-no-repeat bg-center bg-cover h-[200px] relative'
                style={{ width: `${WIDTH}px`, backgroundImage: `url('${value.thumbnail}')` }} >
                <div className='flex items-end p-[5px] absolute right-0 left-15 bottom-0 text-white'>
                  {value.content.indicator.map((item, idx) => {
                    return (
                      <p key={`indicator_${idx}`} className='p-[5px] text-[0.8em]'>
                        {item.key} {makeUnitString(item.value)}
                      </p>
                    );
                  })}
                </div>
              </div>
              {/* author & preview */}
              <div className='rounded-b-[10px] bg-[#e4f2fd] h-[200px] p-[20px] absolute right-0 left-0 bottom-0'>
                <div className='flex items-center'>
                  {/* profile - picture */}
                  <img
                    className='w-[60px] h-[60px] rounded-[50%] object-center object-cover m-[10px]'
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                    src={value.profile.image}
                    alt='profile-picture'
                  />
                  <div>
                    {/* content - title */}
                    <h2 className='text-[#334454] text-[1.2rem] font-bold'>
                      {value.content.title}
                    </h2>
                    {/* profile - name */}
                    <p className='text-[#a1b2bc] text-[0.8rem] italic'>
                      {value.profile.name}
                    </p>
                  </div>
                </div>
                {/* content - preview */}
                <div className='h-[50px] mt-[10px] text-[0.7rem]'>
                  {value.content.preview}
                </div>
              </div>
            </div>
          );
        })
      }
    </div >
  );
};