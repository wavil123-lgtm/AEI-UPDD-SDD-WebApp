
document.getElementById("btnNewProject").addEventListener("click", openNewProject);
document.getElementById("btnCancelProject").addEventListener("click", closeNewProject);
document.getElementById("btnCreateProject").addEventListener("click", createProject);
document.getElementById("btnBack").addEventListener("click", showDashboard);
document.getElementById("searchBox").addEventListener("input", renderDashboard);

document.getElementById("content").addEventListener("input", e => {
  const el = e.target;
  const project = currentProject();
  if (!project) return;
  if (el.dataset.fieldIndex !== undefined) {
    project.sections[el.dataset.section].fields[Number(el.dataset.fieldIndex)].value = el.value;
    saveProjects(); return;
  }
  if (el.dataset.tableIndex !== undefined) {
    project.sections[el.dataset.section].tables[Number(el.dataset.tableIndex)].rows[Number(el.dataset.rowIndex)][Number(el.dataset.colIndex)] = el.value;
    saveProjects(); return;
  }
});

document.getElementById("content").addEventListener("change", e => {
  const el = e.target;
  const project = currentProject();
  if (!project) return;
  if (el.dataset.tableIndex !== undefined) {
    project.sections[el.dataset.section].tables[Number(el.dataset.tableIndex)].rows[Number(el.dataset.rowIndex)][Number(el.dataset.colIndex)] = el.value;
    saveProjects(); return;
  }
});

renderDashboard();
