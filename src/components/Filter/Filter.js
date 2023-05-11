import { Select, Button } from '@mantine/core';
import styles from './Filter.module.css';
import { useEffect, useState } from 'react';
import { NumberInput } from '@mantine/core';
import IndustryService from '../../services/industryService';
import VacanciesService from '../../services/vacanciesService';
import { ReactComponent as CloseIcon } from '../../assets/icons/CloseIcon.svg';
const Filter = (props) => {
  const [industries, changeIndustries] = useState([]);
  const [industryVocabluary] = useState({});

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

  const [filterInfo, changeFilterInfo] = useState({});

  const handleResetButton = (e) => {
    e.preventDefault();
    changeFilterInfo({});
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
        label='Отрасль'
        placeholder='Выберите отрасль'
        rightSection={
          <svg
            width='16'
            height='8'
            viewBox='0 0 16 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 0.999999L7.21905 6.33061C7.66844 6.7158 8.33156 6.7158 8.78095 6.33061L15 1'
              stroke='#ACADB9'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
        }
        rightSectionWidth={30}
        data={industries}
        mb={20}
        onChange={(e) => {
          changeFilterInfo({ ...filterInfo, industry: e });
        }}
        value={filterInfo.industry || ''}
      />
      <NumberInput
        label='Оклад'
        placeholder='От'
        max={500000}
        min={0}
        mb={8}
        step={1000}
        onChange={(e) => changeFilterInfo({ ...filterInfo, payment_from: e })}
        value={filterInfo.payment_from || ''}
      />
      <NumberInput
        placeholder='До'
        max={500000}
        min={0}
        mb={20}
        step={1000}
        onChange={(e) => changeFilterInfo({ ...filterInfo, payment_to: e })}
        value={filterInfo.payment_to || ''}
      />

      <Button
        w={'100%'}
        c={'white'}
        onClick={() =>
          props.handleFilter({
            ...filterInfo,
            industry: industryVocabluary[filterInfo.industry],
          })
        }
      >
        <span className={styles.applyBtnText}>Применить</span>
      </Button>
    </form>
  );
};
export default Filter;
