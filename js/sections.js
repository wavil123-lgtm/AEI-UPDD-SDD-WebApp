function renderTable(headers, rows) {
  let html = "<table border='1'><tr>";

  headers.forEach(h => html += `<th>${h}</th>`);
  html += "</tr>";

  rows.forEach(r => {
    html += "<tr>";
    r.forEach(c => html += `<td contenteditable='true'>${c}</td>`);
    html += "</tr>";
  });

  html += "</table>";
  return html;
}