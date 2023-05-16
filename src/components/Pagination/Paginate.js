import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Pagination } from '@mantine/core';

import styles from './Pagination.module.css';
export const Paginate = (props) => {
  return (
    <div className={styles.paginationContainer}>
      <Pagination
        total={props.total}
        onChange={(e) => props.handlePagination(e)}
        color='#5E96FC'
      />
    </div>
  );
};
