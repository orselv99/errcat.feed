import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  const MOCK_UPS = [
    {
      thumbnail: 'https://images.unsplash.com/photo-1574007557239-acf6863bc375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      profile: {
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        name: 'Joseph Therrien',
      },
      content: {
        indicator: [
          {
            // view
            key: 'v',
            value: 2350,
          },
          {
            // reply
            key: 'r',
            value: 624,
          },
          {
            // thumbsup
            key: 't',
            value: 1470,
          },
        ],
        title: 'White Mountains',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
      }
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1574007557239-acf6863bc375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      profile: {
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        name: 'Joseph Therrien',
      },
      content: {
        indicator: [
          {
            // view
            key: 'v',
            value: 2350,
          },
          {
            // reply
            key: 'r',
            value: 624,
          },
          {
            // thumbsup
            key: 't',
            value: 1470,
          },
        ],
        title: 'White Mountains',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
      }
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1574007557239-acf6863bc375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      profile: {
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        name: 'Joseph Therrien',
      },
      content: {
        indicator: [
          {
            // view
            key: 'v',
            value: 2350,
          },
          {
            // reply
            key: 'r',
            value: 624,
          },
          {
            // thumbsup
            key: 't',
            value: 1470,
          },
        ],
        title: 'White Mountains',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
      }
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1574007557239-acf6863bc375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      profile: {
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        name: 'Joseph Therrien',
      },
      content: {
        indicator: [
          {
            // view
            key: 'v',
            value: 2350,
          },
          {
            // reply
            key: 'r',
            value: 624,
          },
          {
            // thumbsup
            key: 't',
            value: 1470,
          },
        ],
        title: 'White Mountains',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
      }
    },
    {
      thumbnail: 'https://images.unsplash.com/photo-1574007557239-acf6863bc375?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
      profile: {
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        name: 'Joseph Therrien',
      },
      content: {
        indicator: [
          {
            // view
            key: 'v',
            value: 2350,
          },
          {
            // reply
            key: 'r',
            value: 624,
          },
          {
            // thumbsup
            key: 't',
            value: 1470,
          },
        ],
        title: 'White Mountains',
        preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...'
      }
    }
  ]

  return (
    <div>
      {
        MOCK_UPS.map((value, index) => {
          // ** NOTE 
          // https://tailwindcss.com/docs/content-configuration
          //  It could also be that you are trying to use dynamic class names,
          //  which won’t work because Tailwind doesn’t actually evaluate your source code 
          //  and can only detect static unbroken class strings.
          //
          // tailwind CSS 는 template literal 지원하지 않음. 
          // 반드시 completed string 으로 넣어야함
          return (
            <div key={`feed_${index}`} className='rounded-[10px] w-[300px] h-[400px] relative mb-10'>
              {/* thumbnail & view/reply/thumbsup */}
              <div
                className='bg-no-repeat bg-center bg-cover w-[300px] h-[200px] relative'
                style={{ backgroundImage: `url('${value.thumbnail}')` }} >
                <div className='flex items-end p-[5px] absolute right-0 left-0 bottom-0 text-white'>
                  {value.content.indicator.map((item, idx) => {
                    return (
                      <p key={`indicator_${idx}`} className='p-[5px]'>
                        {item.key} {item.value}
                      </p>
                    );
                  })}
                </div>
              </div>
              {/* author & preview */}
              <div className='bg-[#e4f2fd] h-[200px] p-[20px] absolute right-0 left-0 bottom-0'>
                <div className='flex items-center'>
                  {/* profile - picture */}
                  <Image
                    className='w-[60px] h-[60px] rounded-[50%] object-center object-cover m-[10px]'
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

export default Home;