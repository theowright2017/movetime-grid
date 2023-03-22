export const getRows = () => {
  const rows = [
    { day: "Mon", subRows: 3 },
    { day: "Tue", subRows: 3 },
    { day: "Wed", subRows: 3 },
    { day: "Thur", subRows: 3 },
    { day: "Fri", subRows: 3 },
  ];

  const gridTemplateRows = ["[times] 0.2fr"];
  rows.forEach((row) => {
    Array(row.subRows)
      .fill()
      .forEach((_, idx) => {
        gridTemplateRows.push(`[day-${row.day}-${idx + 1}] 0.3fr`);
      });
  });

  return gridTemplateRows;
};
