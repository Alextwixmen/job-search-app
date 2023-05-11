import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { Pagination } from '@mantine/core';

export const Paginate = (props) => {
  return (
    <Pagination
      total={props.total}
      onChange={(e) => props.handlePagination(e)}
    />
  );
};
