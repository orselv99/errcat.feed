import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setVisible } from '../../redux/search';

type MenuType = 'LOGO' | 'SEARCH' | 'SETTING';

interface MenuData {
  type: MenuType;
  image: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const Left = (props: { fixedTop: number }) => {
  const dispatch = useDispatch();
  const [menus, setMenus] = useState([] as MenuData[]);

  useEffect(() => {
    // mockup data
    const datas: MenuData[] = [
      {
        type: 'LOGO',
        image: 'https://cdn-icons-png.flaticon.com/512/181/181669.png',
        onClick: (event: React.MouseEvent<HTMLDivElement>) => {
          console.log('clicked logo!');
        },
      },
      {
        type: 'SEARCH',
        image: 'https://cdn-icons-png.flaticon.com/512/2207/2207590.png',
        onClick: (event: React.MouseEvent<HTMLDivElement>) => {
          dispatch(setVisible(true));
        },
      },
      {
        type: 'SETTING',
        image: 'https://cdn-icons-png.flaticon.com/512/70/70115.png',
        onClick: (event: React.MouseEvent<HTMLDivElement>) => {
          console.log('clicked setting!');
        },
      }
    ];

    setMenus(datas);
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
              <div key={`left_${index}`}>
                <div
                  className='group mb-[30px] cursor-pointer'
                  onClick={value.onClick}>
                  <img className='w-[40px] h-[40px]' src={value.image} />
                  <span
                    className='hidden group-hover:block absolute max-w-[200px] z-[1000] p-[5px] bg-slate-200 text-[0.8em] font-bold rounded'
                    style={{ top: `${getTooltipTop(index)}px`, left: `50px` }}>
                    {value.type}
                  </span>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}