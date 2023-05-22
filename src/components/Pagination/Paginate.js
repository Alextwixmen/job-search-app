import React, { useEffect, useLayoutEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Pagination } from '@mantine/core';
import { MediaQuery } from '@mantine/core';
import styles from './Pagination.module.css';
export const Paginate = (props) => {
  return (
    <div
      className={`${styles.paginationContainer} ${
        styles[props.favoritePagination]
      }`}
    >
      <Pagination
        total={props.total}
        onChange={(e) => props.handlePagination(e)}
        color='#5E96FC'
        value={props.page}
        sx={{
          '@media (max-width: 400px)': {
            gap: '0px',
          },
        }}
      />
    </div>
  );
};
