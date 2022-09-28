import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '.';
import { RootState } from '../../redux';
import { setSettingVisible } from '../../redux/setting';

let timer: NodeJS.Timer;
export const Setting = () => {
  const dispatch = useDispatch();
  const visible = useSelector((state: RootState) => state.setting.visible);

  function onClickExit(event: React.MouseEvent) {
    dispatch(setSettingVisible(false));
  }

  return (
    <>
      {visible === true && (
        <Modal
          overlay={true}
          element={
            <div className="rounded-[10px] w-[800px] h-[240px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-200">
              <div
                className="relative float-right m-[10px] cursor-pointer"
                onClick={onClickExit}
              >
                <img
                  className="w-[50px] h-[50px]"
                  src="https://cdn-icons-png.flaticon.com/512/5368/5368396.png"
                  alt="exit"
                />
              </div>
              <div className='flex flex-col'>
                <div>
                  언어
                </div>
                <div>
                  어두운 테마
                </div>
              </div>
            </div>
          }
        />
      )}
    </>
  );
};
