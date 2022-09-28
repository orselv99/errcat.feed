import { useTranslation } from 'react-i18next';

export const Top = () => {
  const { t } = useTranslation();
  return (
    <div className="flex h-[70px] bg-white top-0 sticky z-[999] items-center justify-between">
      <div className="ml-[20px]">
        <span className="text-[2em] font-bold">{t('title')}</span>
      </div>
    </div>
  );
};
