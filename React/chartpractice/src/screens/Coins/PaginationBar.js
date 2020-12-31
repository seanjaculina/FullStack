import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
const PaginationBar = ({ setPagination }) => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Pagination
      aria-label="Page navigation example"
      style={{ marginTop: '10px' }}
    >
      {nums.map((num) => {
        return (
          <PaginationItem key={num} onClick={() => setPagination(num)}>
            <PaginationLink first>{num}</PaginationLink>
          </PaginationItem>
        );
      })}
    </Pagination>
  );
};

export default PaginationBar;
