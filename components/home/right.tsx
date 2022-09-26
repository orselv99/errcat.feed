import { Histories } from './rightHistories';
import { Profile } from './rightProfile';

export const Right = () => {
  return (
    <div className='w-[300px] h-auto pl-[20px]'>
      <div className='top-[70px] sticky'>
        <Profile />
        <Histories />
        <div>
          <div>extra content 1</div>
          <div>extra content 2</div>
          <div>extra content 3</div>
          <div>extra content 1</div>
          <div>extra content 2</div>
          <div>extra content 3</div>
          <div>extra content 1</div>
          <div>extra content 2</div>
          <div>extra content 3</div>
        </div>
      </div>
    </div>
  );
}

