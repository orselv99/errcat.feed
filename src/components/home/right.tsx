import { Histories } from './rightHistories';
import { Profile } from './rightProfile';

export const Right = () => {
  return (
    <div className="w-[300px] pl-[20px]">
      <div className="top-[70px] sticky">
        <Profile />
        <Histories />
      </div>
    </div>
  );
};
