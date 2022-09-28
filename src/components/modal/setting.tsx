import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from '.';
import { changeLanguage, getLanguage, LANGUAGES } from '../../assets/lang';
import { RootState } from '../../redux';
import { setSettingVisible } from '../../redux/setting';

export const Setting = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const visible = useSelector((state: RootState) => state.setting.visible);

  function onClickExit(event: React.MouseEvent) {
    dispatch(setSettingVisible(false));
  }
  function onChangeLanguageSelect(event: any, child: any) {
    changeLanguage(event.target.value);
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
              <div className="flex w-[100%] items-center justify-center">
                <div className="flex flex-col">
                  <div className='flex items-center mb-[20px]'>
                    <div className='w-[150px] font-bold'>
                      <span>{t('language')}</span>
                    </div>
                    <FormControl size='small'>
                      <Select
                        className='w-[200px] overflow-auto'
                        MenuProps={{ disableScrollLock: true }}
                        value={getLanguage()}
                        onChange={onChangeLanguageSelect}>
                        {
                          LANGUAGES.map((value, index) => {
                            return (
                              <MenuItem
                                key={`menuitem_${index}`}
                                value={value.value}>
                                {value.name}
                              </MenuItem>
                            )
                          })
                        }
                      </Select>
                    </FormControl>
                  </div>
                  <div className='flex items-center'>
                    <div className='w-[150px] font-bold'>
                      <span>{t('dark theme')}</span>
                    </div>
                    <div className='flex w-[200px] justify-center' >
                      <Switch />
                    </div>
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
