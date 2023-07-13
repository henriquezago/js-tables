
export function SortIcon({ order, orderBy, column }) {
  if (orderBy !== column) {
    return null;
  }

  if (order === 'asc') {
    return <i className="fa-solid fa-chevron-up"></i>;
  }

  return <i className="fa-solid fa-chevron-down"></i>;
}
