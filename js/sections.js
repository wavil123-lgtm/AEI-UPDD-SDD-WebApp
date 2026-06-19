
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",""":"&quot;"}[c]));
}
function createDefaultProject(meta) {
  return {
    id: Date.now(),
    createdAt: new Date().toISOString(),
    meta: {
      name: meta.name || "Untitled Project",
      number: meta.number || "",
      pm: meta.pm || "",
      sponsor: meta.sponsor || "",
      rag: "green"
    },
    sections: clone(AEI_SECTION_DEFAULTS)
  };
}
function renderField(sectionId, fieldIndex, field) {
  const value = escapeHtml(field.value);
  const common = `data-section="${sectionId}" data-field-index="${fieldIndex}"`;
  if (field.kind === "textarea") {
    return `<div class="form-field"><label>${escapeHtml(field.label)}</label><textarea ${common}>${value}</textarea></div>`;
  }
  return `<div class="form-field"><label>${escapeHtml(field.label)}</label><input ${common} value="${value}"></div>`;
}
function renderTable(sectionId, tableIndex, table) {
  let html = `<h3 class="table-title">${escapeHtml(table.title)}</h3><div class="table-wrap"><table><thead><tr>`;
  table.headers.forEach(h => html += `<th>${escapeHtml(h)}</th>`);
  html += `<th></th></tr></thead><tbody>`;
  table.rows.forEach((row, rowIndex) => {
    html += `<tr>`;
    row.forEach((cell, colIndex) => {
      const opts = table.selects && table.selects[colIndex];
      if (opts) {
        html += `<td><select data-section="${sectionId}" data-table-index="${tableIndex}" data-row-index="${rowIndex}" data-col-index="${colIndex}">`;
        opts.forEach(o => html += `<option value="${escapeHtml(o)}" ${o === cell ? "selected" : ""}>${escapeHtml(o)}</option>`);
        html += `</select></td>`;
      } else {
        html += `<td><textarea data-section="${sectionId}" data-table-index="${tableIndex}" data-row-index="${rowIndex}" data-col-index="${colIndex}">${escapeHtml(cell)}</textarea></td>`;
      }
    });
    html += `<td class="delete-cell"><button type="button" onclick="deleteRow('${sectionId}', ${tableIndex}, ${rowIndex})">×</button></td></tr>`;
  });
  html += `</tbody></table></div><button type="button" onclick="addRow('${sectionId}', ${tableIndex})">+ Add Row</button>`;
  return html;
}
function renderSection(sectionId) {
  currentSectionId = sectionId;
  renderSidebar();
  const project = currentProject();
  const section = project.sections[sectionId];
  let html = `<div class="section"><h2>${escapeHtml(section.title)}</h2><div class="guidance">${escapeHtml(section.guidance)}</div>`;
  html += `<div class="form-grid">` + section.fields.map((f, i) => renderField(sectionId, i, f)).join("") + `</div>`;
  section.tables.forEach((t, i) => html += renderTable(sectionId, i, t));
  html += `</div>`;
  document.getElementById("content").innerHTML = html;
}
function addRow(sectionId, tableIndex) {
  const project = currentProject();
  const table = project.sections[sectionId].tables[tableIndex];
  table.rows.push(table.headers.map(() => ""));
  saveProjects();
  renderSection(sectionId);
}
function deleteRow(sectionId, tableIndex, rowIndex) {
  const table = currentProject().sections[sectionId].tables[tableIndex];
  table.rows.splice(rowIndex, 1);
  saveProjects();
  renderSection(sectionId);
}
