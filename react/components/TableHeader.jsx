// @ts-nocheck

import { SortIcon } from "./SortIcon";

export function TableHeader({ sortTable, order, orderBy }) {
  return (
    <thead>
      <tr>
        <th onClick={() => sortTable('url')}>
          URL <SortIcon order={order} orderBy={orderBy} column="url" />
        </th>
        <th onClick={() => sortTable('avgScrollPercentage')}>
          Scroll <SortIcon order={order} orderBy={orderBy} column="avgScrollPercentage" />
        </th>
        <th onClick={() => sortTable('totalCount')}>
          Total count <SortIcon order={order} orderBy={orderBy} column="totalCount" />
        </th>
        <th onClick={() => sortTable('bounceCount')}>
          Bounce <SortIcon order={order} orderBy={orderBy} column="bounceCount" />
        </th>
        <th onClick={() => sortTable('startsWithCount')}>
          Enters <SortIcon order={order} orderBy={orderBy} column="startsWithCount" />
        </th>
        <th onClick={() => sortTable('endsWithCount')}>
          Exits <SortIcon order={order} orderBy={orderBy} column="endsWithCount" />
        </th>
        <th onClick={() => sortTable('totalPageviewCount')}>
          Pageviews <SortIcon order={order} orderBy={orderBy} column="totalPageviewCount" />
        </th>
        <th onClick={() => sortTable('totalVisitorCount')}>
          Visitors <SortIcon order={order} orderBy={orderBy} column="totalVisitorCount" />
        </th>
      </tr>
    </thead>
  );
}
