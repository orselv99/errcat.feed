import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '.';
import { RootState, useDispatchAsync } from '../../redux';
import {
  getLastestRecommendHashTagAsync,
  setSearchVisible
} from '../../redux/search';

let timer: NodeJS.Timer;
export const Search = () => {
  const dispatch = useDispatch();
  const dispatchAsync = useDispatchAsync();
  const datas = useSelector((state: RootState) => state.search.datas);
  const visible = useSelector((state: RootState) => state.search.visible);

  useEffect(() => {
    if (visible === true) dispatchAsync(getLastestRecommendHashTagAsync());
  }, [visible]);

  function onClickExit(event: React.MouseEvent) {
    dispatch(setSearchVisible(false));
  }

  return (
    <>
      {visible === true && (
        <Modal
          overlay={true}
          element={
            <div className="rounded-[10px] w-[800px] h-[240px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-200">
              {/* exit */}
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
              <div className="flex h-[100%]">
                <div className="flex flex-col justify-center items-center">
                  {/* search text input */}
                  <div className="flex">
                    <div className="relative top-[15px] left-[32px] font-bold cursor-pointer">
                      <img
                        className="w-[22px] h-[22px]"
                        src="https://cdn-icons-png.flaticon.com/512/3031/3031293.png"
                        alt="clear"
                      />
                    </div>
                    <input
                      className="rounded-[10px] w-[400px] h-[50px] mb-[15px] pr-10 pl-10 bg-zinc-600 outline-none"
                      placeholder="search"
                      type={'text'}
                    />
                    <div className="relative top-[13px] right-[32px] font-bold cursor-pointer">
                      <img
                        className="w-[26px] h-[26px]"
                        src="https://cdn-icons-png.flaticon.com/512/3668/3668003.png"
                        alt="clear"
                      />
                    </div>
                  </div>
                  {/* tags from request */}
                  <div className="flex w-[800px] justify-center">
                    {datas.map((value, index) => {
                      return (
                        <div
                          key={`hash_${index}`}
                          className="ml-[5px] mr-[5px] pt-[5px] pb-[5px] pl-[10px] pr-[10px] bg-zinc-600 rounded cursor-pointer"
                        >
                          <span className="text-[1.55em] font-bold text-white">
                            {`#${value.name}`}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          }
        />
      )}
    </>
  );
};
