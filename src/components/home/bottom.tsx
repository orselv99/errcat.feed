import { useTranslation } from 'react-i18next';

export const Bottom = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col h-[80px] bg-white justify-center items-center bottom-0 sticky z-[999]">
      <span className="font-bold mb-[5px]">© 2022 ErrCat Inc.</span>
      <div className="flex text-[0.8em]">
        <a href="">
          <p className="mx-[20px]">{t('terms')}</p>
        </a>
        <a href="">
          <p className="mx-[20px]">{t('privacy')}</p>
        </a>
        <a href="">
          <p className="mx-[20px]">{t('cookies')}</p>
        </a>
      </div>
    </div>
  );
};
