// @ts-nocheck
import { useCallback, useEffect, useState } from 'react';

const PAGE_SIZE = 10;

export function useTableData(data) {
  const [rows, setRows] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState('url');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = currentPage * PAGE_SIZE;
    const sortedRows = sortByColumn(data);
    const rows = sortedRows.slice(start, end);
    setRows(rows);
  }, [currentPage, order, setRows, data]);


  const sortTable = useCallback((column) => {
    if (orderBy === column) {
      setOrder(order === 'asc' ? 'desc' : 'asc');
    } else {
      setOrderBy(column);
      setOrder('asc');
    }
  }, [orderBy, order, setOrderBy, setOrder]);

  const sortByColumn = useCallback((rows) => {
    return rows.sort((a, b) => {
      if (order === 'asc') {
        return a[orderBy] > b[orderBy] ? 1 : -1;
      } else {
        return a[orderBy] < b[orderBy] ? 1 : -1;
      }
    });
  }, [order, orderBy]);

  const goToNextPage = useCallback(() => {
    setCurrentPage((currentPage) => currentPage + 1);
  }, [setCurrentPage]);

  const goToPreviousPage = useCallback(() => {
    setCurrentPage((currentPage) => currentPage - 1);
  }, [setCurrentPage]);

  return {
    rows,
    currentPage,
    goToNextPage,
    goToPreviousPage,
    sortTable,
    order,
    orderBy,
  }
}