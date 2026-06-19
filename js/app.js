let currentProject = null;

function openProject(id) {
  currentProject = projects.find(p => p.id === id);

  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("projectView").classList.remove("hidden");

  renderProject();
}

function renderProject() {
  const content = document.getElementById("content");

  content.innerHTML = `
    <h2>Approvals</h2>
    ${renderTable(
      ["Role","Scope","Date","Signature"],
      currentProject.approvals
    )}

    <h2>SLA</h2>
    ${renderTable(
      ["Tier","Team","Type","Priority","Target"],
      currentProject.sla
    )}
  `;
}

function createProject() {
  const name = document.getElementById("np_name").value;

  const newProject = createDefaultProject(name);
  projects.push(newProject);

  saveProjects();
  renderDashboard();
}

renderDashboard();