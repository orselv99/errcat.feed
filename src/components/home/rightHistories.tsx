import { useEffect, useState } from 'react';

interface HistoryData {
  image: string;
  text: string;
}

export const Histories = () => {
  const [histories, setHistories] = useState([] as HistoryData[]);

  useEffect(() => {
    // mockup data
    const datas: HistoryData[] = [
      {
        image: 'https://cdn-icons-png.flaticon.com/512/181/181669.png',
        text: 'logo',
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/2207/2207590.png',
        text: 'find',
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/70/70115.png',
        text: 'setting',
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/3395/3395548.png',
        text: 'logo',
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/3395/3395548.png',
        text: 'find',
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/512/3395/3395548.png',
        text: 'setting',
      },
    ];

    setHistories(datas);
  }, []);

  return (
    <div className="mb-[30px]">
      {histories.length <= 0 ? (
        <div className="bg-slate-200 rounded-[40px] h-[70px]">
          <div className="flex h-[70px] justify-center items-center flex-col">
            <img
              className="w-[30px] h-[30px] opacity-10"
              src="https://cdn-icons-png.flaticon.com/512/3395/3395548.png"
              alt="warn"
            />
            <span>no histories</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex">
            {
              // TODO
              // 6개 나열할 다른 방법 찾아보자
              histories.map((value, index) => {
                if (index > 2) return;
                return (
                  <div key={`history_a_${index}`}>
                    <img
                      className="w-[90px] h-[90px] opacity-10 m-[2px]"
                      src={value.image}
                      alt="warn"
                    />
                  </div>
                );
              })
            }
          </div>
          <div className="flex">
            {histories.map((value, index) => {
              if (index < 3) return;
              return (
                <div key={`history_b_${index}`}>
                  <img
                    className="w-[90px] h-[90px] opacity-10 m-[2px]"
                    src={value.image}
                    alt="warn"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
