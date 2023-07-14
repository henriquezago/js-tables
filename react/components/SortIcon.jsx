
export function SortIcon({ order, orderBy, column }) {
  if (orderBy !== column) {
    return null;
  }

  const iconClass = order === 'asc' ? 'fa-chevron-up' : 'fa-chevron-down';
  return <i className={`fa-solid ${iconClass}`}></i>;
}
