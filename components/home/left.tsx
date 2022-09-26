import { useEffect, useState } from 'react';

interface MenuData {
  image: string;
  text: string;
}

export const Left = (props: { fixedTop: number }) => {
  const [menus, setMenus] = useState([] as MenuData[]);

  useEffect(() => {
    // mockup data
    const menudatas: MenuData[] = [
      {
        image: 'https://cdn-icons-png.flaticon.com/512/181/181669.png',
        text: 'logo'
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/2207/2207590.png',
        text: 'find'
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/70/70115.png',
        text: 'setting'
      }
    ];

    setMenus(menudatas);
  }, []);

  function getTooltipTop(index: number) {
    if (index === 0) {
      return 3;
    }

    return 3 + ((70 * index));
  }

  return (
    <div className='min-w-[50px] max-w-[200px] pr-[20px]'>
      <div className='sticky' style={{ top: `${props.fixedTop}px` }}>
        {
          menus.map((value, index) => {
            return (
              <div
                key={`left_${index}`}
                className='group mb-[30px] cursor-pointer'>
                <img width='40px' height='40px' src={value.image} />
                <span
                  className='hidden group-hover:block absolute max-w-[200px] z-[999] p-[5px] bg-slate-200 text-[0.8em] font-bold rounded'
                  style={{ top: `${getTooltipTop(index)}px`, left: `50px` }}>
                  {value.text}
                </span>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}