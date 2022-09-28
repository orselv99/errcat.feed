import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { makeUnitString } from '../../common';
import { RootState, useDispatchAsync } from '../../redux';
import { getFeedsAsync } from '../../redux/feed';

const WIDTH = 500;

export const Feed = () => {
  const dispatchAsync = useDispatchAsync();
  const datas = useSelector((state: RootState) => state.feed.datas);

  function getScrollY() {
    const body = document.body;
    const html = document.documentElement;
    const documentHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    // 현재 로드된 feeds 목록의 끝에 도달하기 150px 전에 다음 feeds 를 요청
    if (window.scrollY >= documentHeight - window.innerHeight - 150) {
      // TODO
      // 다음 feeds 를 전달받지 못한경우 처리
      dispatchAsync(getFeedsAsync());
    }
  }

  useEffect(() => {
    dispatchAsync(getFeedsAsync());
    window.addEventListener('scroll', getScrollY);
    return () => {
      window.removeEventListener('scroll', getScrollY);
    };
  }, []);

  function onClick() {
    console.log('clicked');
  }

  return (
    <div>
      {datas.map((value, index) => {
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
            className="rounded-[10px] h-[400px] relative mb-10 cursor-pointer shadow-xl"
            style={{ width: `${WIDTH}px` }}
            onClick={onClick}
          >
            {/* thumbnail & view/reply/thumbsup */}
            <div
              className="rounded-t-[10px] bg-no-repeat bg-center bg-cover h-[200px] relative"
              style={{
                width: `${WIDTH}px`,
                backgroundImage: `url('${value.thumbnail}')`,
              }}
            >
              <div className="flex items-end p-[5px] absolute right-0 left-15 bottom-0 text-white">
                {value.content.indicator.map((item, idx) => {
                  return (
                    <p
                      key={`indicator_${idx}`}
                      className="p-[5px] text-[0.8em]"
                    >
                      {item.key} {makeUnitString(item.value)}
                    </p>
                  );
                })}
              </div>
            </div>
            {/* author & preview */}
            <div className="rounded-b-[10px] bg-[#e4f2fd] h-[200px] p-[20px] absolute right-0 left-0 bottom-0">
              <div className="flex items-center">
                {/* profile - picture */}
                <img
                  className="w-[60px] h-[60px] rounded-[50%] object-center object-cover m-[10px]"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                  src={value.profile.image}
                  alt="profile-picture"
                />
                <div>
                  {/* content - title */}
                  <h2 className="text-[#334454] text-[1.2rem] font-bold">
                    {value.content.title}
                  </h2>
                  {/* profile - name */}
                  <p className="text-[#a1b2bc] text-[0.8rem] italic">
                    {value.profile.name}
                  </p>
                </div>
              </div>
              {/* content - preview */}
              <div className="h-[50px] mt-[10px] text-[0.7rem]">
                {value.content.preview}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
