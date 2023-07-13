// @ts-nocheck

import { useTableData } from "../hooks/useTableData";
import { Header } from "./Header";
import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";

export function Table({ data }) {
  const { rows, currentPage, goToNextPage, goToPreviousPage, sortTable, order, orderBy } = useTableData(data);

  return (
    <>
      <Header currentPage={currentPage} goToNextPage={goToNextPage} goToPreviousPage={goToPreviousPage} />
      <table>
        <TableHeader sortTable={sortTable} order={order} orderBy={orderBy} />
        <TableBody data={rows} />
      </table>
    </>
  );
}
