export const Bottom = () => {
  return (
    <div className='flex flex-col h-[80px] bg-white justify-center items-center bottom-0 sticky '>
      <span className='font-bold mb-[5px]'>
        © 2022 ErrCat Inc.
      </span>
      <div className='flex text-[0.8em]'>
        <a href=''>
          <p className='mx-[20px]'>이용약관</p>
        </a>
        <a href=''>
          <p className='mx-[20px]'>개인정보 처리방침</p>
        </a>
        <a href=''>
          <p className='mx-[20px]'>쿠키 정책</p>
        </a>
        <a href=''>
          <p className='mx-[20px]'>접근성</p>
        </a>
      </div>
    </div>
  );
}