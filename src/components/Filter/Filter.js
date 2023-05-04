import { Select, Button } from '@mantine/core';
import styles from './Filter.module.css';
const Filter = () => {
  return (
    <form className={styles.form}>
      <div className={styles.formHeader}>
        <span className={styles.formHeaderText}>Фильтры</span>
        <div className={styles.btnContainer}>
          <button className={styles.resetBtn}>Сбросить все </button>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line
              x1='11.7425'
              y1='4.44219'
              x2='4.44197'
              y2='11.7427'
              stroke='#ACADB9'
              stroke-width='1.25'
            />
            <line
              x1='11.9013'
              y1='11.7425'
              x2='4.60082'
              y2='4.44197'
              stroke='#ACADB9'
              stroke-width='1.25'
            />
          </svg>
        </div>
      </div>
      <Select
        label='Отрасль'
        placeholder='Выберите область'
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
              stroke-width='1.5'
              stroke-linecap='round'
            />
          </svg>
        }
        rightSectionWidth={30}
        styles={{ rightSection: { pointerEvents: 'none' } }}
        data={['React', 'Angular', 'Svelte', 'Vue']}
        mb={20}
      />
      <Select
        clearable
        label='Оклад'
        placeholder='От'
        data={[
          { value: '100', label: '100' },
          { value: '200', label: '200' },
          { value: '300', label: '300' },
          { value: '400', label: '400' },
        ]}
        mb={8}
      />
      <Select
        searchable
        clearable
        placeholder='До'
        data={[
          { value: '500', label: '500' },
          { value: '1000', label: '1000' },
          { value: '2000', label: '2000' },
          { value: '3000', label: '3000' },
        ]}
        mb={20}
      />
      <Button w={'100%'} c={'white'}>
        <span className={styles.applyBtnText}>Применить</span>
      </Button>
    </form>
  );
};
export default Filter;
