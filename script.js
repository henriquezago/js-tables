const ITEMS_PER_PAGE = 10;

let currentPage = 1;
let pageSize = 10;
let orderBy = 'url';
let order = 'asc';
let data;

async function initTable() {
  try {
    const response = await fetch('./pages.json');
    data = await response.json();
    renderPage(currentPage);
  } catch (error) {
    console.error(error);
  }
}

function sortTable(column) {
  if (orderBy === column) {
    order = order === 'asc' ? 'desc' : 'asc';
  } else {
    orderBy = column;
    order = 'asc';
  }
  renderPage(currentPage);
}

function sortByColumn(rows) {
  return rows.sort((a, b) => {
    if (order === 'asc') {
      return a[orderBy] > b[orderBy] ? 1 : -1;
    } else {
      return a[orderBy] < b[orderBy] ? 1 : -1;
    }
  });
}

function renderTable(rows) {
  const tableBody = document.getElementById('tableBody');

  if (!tableBody) {
    console.error('Table body not found');
    return;
  }

  tableBody.innerHTML = '';
  const sortedRows = sortByColumn(rows);
  sortedRows.forEach(row => {
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
      <td>${row.url}</td>
      <td>${row.avgScrollPercentage}%</td>
      <td>${row.totalCount}</td>
      <td>${row.bounceCount}</td>
      <td>${row.startsWithCount}</td>
      <td>${row.endsWithCount}</td>
      <td>${row.totalPageviewCount}</td>
      <td>${row.totalVisitorCount}</td>
    `;
    tableBody.appendChild(tableRow);
  });
  renderCurrentPageLabel();
  renderSortingIcon(orderBy);
}

function renderCurrentPageLabel() {
  const currentPageLabel = document.getElementById('currentPageLabel');
  if (!currentPageLabel) {
    console.error('Current page label not found');
    return;
  }

  currentPageLabel.innerHTML = currentPage.toString();
}

function renderSortingIcon(column) {
  const targetIcon = document.querySelector(`#${column} i`);
  if (!targetIcon) {
    console.error('Sorting icon not found');
    return;
  }

  const existingIcon = document.querySelector('.fa-chevron-up, .fa-chevron-down');
  if (existingIcon) {
    existingIcon.className = '';
  }

  if (orderBy === column) {
    targetIcon.className = order === 'asc' ? ' fa-solid fa-chevron-up' : ' fa-solid fa-chevron-down';
  } else {
    targetIcon.className = '';
  }
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    renderPage(currentPage);
  }
}

function nextPage() {
  if (currentPage < numPages()) {
    currentPage++;
    renderPage(currentPage);
  }
}

function renderPage(page) {
  const start = (page - 1) * ITEMS_PER_PAGE;
  const end = page * ITEMS_PER_PAGE;
  const rows = data.slice(start, end);
  renderTable(rows);
}

function numPages() {
  return Math.ceil(data.length / pageSize);
}

(function () {
  initTable();
})();