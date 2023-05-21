import { Select, Button } from '@mantine/core';
import styles from './Filter.module.css';
import { useEffect, useState } from 'react';
import { NumberInput, NumberInputHandlers } from '@mantine/core';
import IndustryService from '../../services/industryService';
import VacanciesService from '../../services/vacanciesService';
import { ReactComponent as CloseIcon } from '../../assets/icons/CloseIcon.svg';
import { ReactComponent as DownBtn } from '../../assets/icons/DownBtn.svg';
import { ReactComponent as UpBtn } from '../../assets/icons/UpBtn.svg';
import { ReactComponent as UpBtnNumberInput } from '../../assets/icons/UpBtnNumberInput.svg';
import LocalStorageService from '../../services/localStorageService';

const Filter = (props) => {
  const [industries, changeIndustries] = useState([]);
  const [industryVocabluary] = useState({});
  const [isOpen, setOpen] = useState(false);
  const [filterInfo, changeFilterInfo] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response = await IndustryService.getIndustries();
      const namesOfIndustries = response.reduce((acc, industry) => {
        industryVocabluary[industry.title] = industry.key;
        return [...acc, industry.title];
      }, []);
      changeIndustries(namesOfIndustries);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const options = JSON.parse(LocalStorageService.getItem('options'));
    if (filterInfo.industry !== undefined) {
      LocalStorageService.setItem({
        ...options,
        industry: filterInfo.industry,
      });
    }
    props.handleFilterOptions({
      ...filterInfo,
      industry: industryVocabluary[filterInfo.industry],
    });
  }, [filterInfo]);

  const handleResetButton = (e) => {
    e.preventDefault();
    changeFilterInfo({});
  };
  const numberInputStyles = {
    input: {
      backgroundColor: '#FFF',
      color: '#232134',
      padding: '12px',
      borderRadius: '8px',
      lineHeight: '20px',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontSize: '14px',
      fontWeight: '400',
      height: 'auto',
      padding: '11px 12px 11px 12px',
    },
  };
  return (
    <form className={styles.form}>
      <div className={styles.formHeader}>
        <span className={styles.formHeaderText}>Фильтры</span>
        <div
          className={styles.btnContainer}
          onClick={(e) => handleResetButton(e)}
        >
          <button className={styles.resetBtn}>Сбросить все </button>
          <CloseIcon className={styles.closeIcon} />
        </div>
      </div>
      <Select
        styles={{
          item: {
            '&[data-selected]': {
              '&, &:hover': {
                backgroundColor: '#5E96FC',
              },
            },
            '&[data-hovered]': {
              backgroundColor: '#DEECFF',
            },
          },
          rightSection: { pointerEvents: 'none' },
          input: {
            borderRadius: '8px',
            padding: '11px 17px 11px 12px',
            boxSizing: 'border-box',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '20px',
            border: '1px solid #D5D6DC',
            height: 'auto',
          },
        }}
        label='Отрасль'
        placeholder='Выберите отрасль'
        rightSection={isOpen ? <UpBtn /> : <DownBtn />}
        rightSectionWidth={30}
        data={industries}
        mb={20}
        onChange={(e) => {
          changeFilterInfo({ ...filterInfo, industry: e });
        }}
        value={
          filterInfo.industry ||
          JSON.parse(LocalStorageService.getItem('options'))?.industryName ||
          ''
        }
        onDropdownClose={() => setOpen(false)}
        onDropdownOpen={() => setOpen(true)}
      />

      <NumberInput
        label='Оклад'
        placeholder='От'
        max={500000}
        min={0}
        mb={8}
        step={1000}
        onChange={(e) => changeFilterInfo({ ...filterInfo, payment_from: e })}
        value={
          filterInfo.payment_from ||
          JSON.parse(LocalStorageService.getItem('options'))?.payment_from ||
          ''
        }
        radius={8}
        styles={numberInputStyles}
      />
      <NumberInput
        placeholder='До'
        max={500000}
        min={0}
        mb={20}
        step={1000}
        onChange={(e) => changeFilterInfo({ ...filterInfo, payment_to: e })}
        value={
          filterInfo.payment_to ||
          JSON.parse(LocalStorageService.getItem('options'))?.payment_to ||
          ''
        }
        radius={8}
        styles={numberInputStyles}
      />

      <button
        className={styles.applyButton}
        onClick={() =>
          props.handleFilter({
            ...filterInfo,
            industry: industryVocabluary[filterInfo.industry],
          })
        }
      >
        <span className={styles.applyBtnText}>Применить</span>
      </button>
    </form>
  );
};
export default Filter;
