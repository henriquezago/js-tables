export function TableBody({ data }) {
  return (
    <tbody>
      {data.map((row) => (
        <tr key={row.url}>
          <td>{row.url}</td>
          <td>{row.avgScrollPercentage}%</td>
          <td>{row.totalCount}</td>
          <td>{row.bounceCount}</td>
          <td>{row.startsWithCount}</td>
          <td>{row.endsWithCount}</td>
          <td>{row.totalPageviewCount}</td>
          <td>{row.totalVisitorCount}</td>
        </tr>
      ))}
    </tbody>
  );
}
