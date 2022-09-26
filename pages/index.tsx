import type { NextPage } from 'next';
import { useEffect } from 'react';
import { Bottom, Feed, Left, Right, Top } from '../components/home';

const Home: NextPage = () => {
  useEffect(() => {
    // 접속한 사용자의 브라우저 확인
    const agent = (() => {
      let agent = navigator.userAgent.toLowerCase();
      console.log(agent);
      if (agent.indexOf('trident') >= 0) {
        return 'IE';
      }
      else if (agent.indexOf('firefox') >= 0) {
        return 'FIREFOX';    // Chrome과 Safari, Edge는 같이 웹킷을 사용한다. 역순으로 배치.
      }
      else if (agent.indexOf('edg') >= 0) {
        return 'EDGE';
      }
      else if (agent.indexOf('safari') >= 0) {
        return 'SAFARI';
      }
      else if (agent.indexOf('chrome') >= 0) {
        /**
         * mozilla/5.0 (windows nt 10.0; win64; x64) applewebkit/537.36 (khtml, like gecko) chrome/105.0.0.0 safari/537.36
         * safari 
         * 
         * http://detectmobilebrowsers.com/
         */
        return 'CHROME';
      }
      else {
        return '';
      }
    })();
  }, []);

  return (
    <div>
      <Top />
      <div className='flex justify-center w-auto h-auto ' >
        <Left fixedTop={70} />
        <div className='h-auto min-w-[600px] max-w-[600px]'>
          <div className='flex justify-center'>
            <Feed />
          </div>
        </div>
        <Right />
      </div>
      <Bottom />
    </div>
  );
};

export default Home;