export function Header({ currentPage, goToNextPage, goToPreviousPage }) {
  return (
    <header className="table-header">
      <h2>Pages</h2>
      <div>
        <button disabled={currentPage === 1} onClick={goToPreviousPage}><i className="fa-solid fa-chevron-left"></i></button>
        <span>{currentPage}</span>
        <button onClick={goToNextPage}><i className="fa-solid fa-chevron-right"></i></button>
      </div>
    </header>
  );
}
