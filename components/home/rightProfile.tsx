import { useEffect, useState } from 'react';
import { makeUnitString } from '../../lib/common';

interface ProfileData {
  id: string;
  displayname: string;
  picture: string;
  represented: string;
  introduce: string;
  relation: {
    follower: number;
    following: number;
  };
  register: string;
  sns: {
    id: string;
    type: 'YOUTUBE' | 'GITHUB' | 'TWITER' | 'EMAIL';
  }[];
  badges: {
    src: string;
    tooltip: string;
  }[];
}

export const Profile = () => {
  const [profile, setProfile] = useState({} as ProfileData);
  useEffect(() => {
    // mockup data
    const data: ProfileData = {
      id: 'joseph',
      displayname: 'Joseph Therrien',
      picture: 'https://cdn-icons-png.flaticon.com/512/4202/4202843.png',
      represented: '',
      introduce: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt',
      relation: {
        follower: Math.random() * 100,
        following: Math.random() * 10000,
      },
      register: '1664174376935',
      sns: [
        {
          id: 'joseph',
          type: 'YOUTUBE'
        },
        {
          id: 'joseph',
          type: 'GITHUB'
        },
        {
          id: 'joseph',
          type: 'TWITER'
        },
        {
          id: 'joseph@google.com',
          type: 'EMAIL'
        },
      ],
      badges: [
        {
          src: 'https://cdn-icons-png.flaticon.com/512/1329/1329016.png',
          tooltip: 'developer',
        },
        {
          src: 'https://cdn-icons-png.flaticon.com/512/1329/1329016.png',
          tooltip: 'developer',
        },
        {
          src: 'https://cdn-icons-png.flaticon.com/512/1329/1329016.png',
          tooltip: 'developer',
        },
        {
          src: 'https://cdn-icons-png.flaticon.com/512/1329/1329016.png',
          tooltip: 'developer',
        },
        {
          src: 'https://cdn-icons-png.flaticon.com/512/1329/1329016.png',
          tooltip: 'developer',
        },
        {
          src: 'https://cdn-icons-png.flaticon.com/512/1329/1329016.png',
          tooltip: 'developer',
        },
      ]
    }

    setProfile(data);
  }, []);

  return (
    <div className='mb-[30px] border'>
      {/* picture */}
      <div className='flex justify-center pt-[15px]'>
        <img
          className='w-[200px] h-[200px]'
          src={profile.picture}
          alt='profile image'
        />
      </div>
      <div className='m-3'>
        <div className='pb-[15px]'>
          {/* nickname, id, represented icon */}
          <div>
            {/* height 고정, represented icon 에 hover 시, 불편한 애니메이션 발생됨 */}
            <div className='flex items-center h-[30px]'>
              {/* displayname */}
              <span className='text-[1.05rem] font-bold'>
                {profile.displayname}
              </span>
              {/* represented icon */}
              <div className='group flex items-center'>
                <img
                  className='w-[20px] h-[20px] ml-[5px] mr-[5px]'
                  src='https://cdn-icons-png.flaticon.com/512/8539/8539214.png'
                  alt='represent'
                />
                <span className='hidden group-hover:block max-w-[200px] z-[999] p-[5px]  bg-slate-200 text-[0.8em] font-bold rounded'>
                  celebrity
                </span>
              </div>
            </div>
            {/* id */}
            <div>
              <p className='text-[0.85rem]'>
                {`@${profile.id}`}
              </p>
            </div>
          </div>
          {/* introduce string */}
          <div>
            <span className='text-[0.85rem]'>
              {profile.introduce}
            </span>
          </div>
        </div>
        {/* relation information */}
        <div className='flex justify-center items-center mb-[15px]'>
          <img
            className='w-[20px] h-[20px] opacity-50 mr-[5px]'
            src='https://cdn-icons-png.flaticon.com/512/2118/2118701.png'
            alt='follow'
          />
          <div className='flex items-center rounded-[10px] bg-slate-200 px-[6px] mr-[5px]'>
            <p className='mr-[4px] text-[0.85em]'>following</p><span className='font-bold'>{makeUnitString(profile.relation?.following)}</span>
          </div>
          <div className='flex items-center rounded-[10px] bg-slate-200 px-[6px]'>
            <p className='mr-[4px] text-[0.85em]'>follower</p><span className='font-bold'>{makeUnitString(profile.relation?.follower)}</span>
          </div>
        </div>
        {/* register date & sns link icons */}
        <div className='flex justify-center items-center flex-col mb-[15px]'>
          <div className='flex flex-col items-center mb-[15px]'>
            <p className='text-[0.85em]'>
              Joined on
            </p>
            <span className='text-[0.85em]'>
              {new Date(Number(profile.register)).toUTCString()}
            </span>
          </div>
          <div className='flex'>
            {
              profile.sns?.map((value, index) => {
                let data = {} as { href: string; src: string; };
                switch (value.type) {
                  case 'EMAIL':
                    data.href = `mailto:${value.id}`;
                    data.src = 'https://cdn-icons-png.flaticon.com/512/712/712040.png';
                    break;
                  case 'YOUTUBE':
                    data.href = `http://www.youtube.com/c/${value.id}`;
                    data.src = 'https://cdn-icons-png.flaticon.com/512/1384/1384028.png';
                    break;
                  case 'GITHUB':
                    data.href = `http://www.github.com/${value.id}`;
                    data.src = 'https://cdn-icons-png.flaticon.com/512/733/733609.png';
                    break;
                  case 'TWITER':
                    data.href = `http://www.twiter.com/${value.id}`;
                    data.src = 'https://cdn-icons-png.flaticon.com/512/3128/3128212.png';
                    break;
                }
                return (
                  <div key={`sns_${index}`}>
                    {
                      /* 
                      * https://stackoverflow.com/questions/50709625/link-with-target-blank-and-rel-noopener-noreferrer-still-vulnerable
                      * target=_blank 만 사용하면 보안취약점이 생기고 perfomance 이슈가 있으므로 rel=noopener noreferrer 와 함께 사용할 것 
                      * NOTE
                      * 2021 년 이후, 주요 브라우저에서는 noopener 를 자동적으로 처리해준다 noreferrer 만 적어주면 됨
                      * noreferrer 가 없으면 next-js build 시 error 발생함
                      */
                    }
                    <a href={data.href} target={'_blank'} rel={'noreferrer'}>
                      <img
                        className='w-[20px] h-[20px] mx-[5px] opacity-50'
                        src={data.src}
                        alt='sns'
                      />
                    </a>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* TODO: badges */}
        {/* <div className='flex border-t-[1px] pt-[14px]'>
          {
            profile.badges?.length > 0 ?
              profile.badges.map((value, index) => {
                return (
                  <div
                    key={`badge_${index}`}
                    className='group flex justify-center items-center w-[40px] h-[40px] rounded-[5px] border-[1px] border-dotted border-slate-400' >
                    <img
                      className='w-[35px] h-[35px]'
                      src={value.src}
                      alt='badge'
                    />
                    <span className='hidden group-hover:block max-w-[200px] z-[999] p-[5px] absolute bg-slate-200 text-[0.8em] font-bold rounded'>{value.tooltip}</span>
                  </div>
                )
              })
              :
              <div className='flex justify-center items-center w-[40px] h-[40px] rounded-[5px] border-[1px] border-dotted border-slate-400 text-[0.8em]'>
                <span>
                  none
                </span>
              </div>
          }
        </div> */}
      </div>
    </div>
  );
}

