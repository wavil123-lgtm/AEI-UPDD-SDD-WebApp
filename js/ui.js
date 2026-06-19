
function renderDashboard() {
  const query = document.getElementById("searchBox")?.value?.toLowerCase() || "";
  const filtered = projects.filter(p => JSON.stringify(p.meta).toLowerCase().includes(query));
  document.getElementById("projectCount").textContent = `(${projects.length} project${projects.length === 1 ? "" : "s"})`;
  const cards = document.getElementById("projectCards");
  if (!filtered.length) {
    cards.innerHTML = `<div class="card"><h3>No projects yet</h3><p>Create your first UPDD/SDD project.</p></div>`;
    return;
  }
  cards.innerHTML = filtered.map(p => `
    <div class="card" onclick="openProject(${p.id})">
      <div class="card-actions">
        <button onclick="exportProject(${p.id}, event)">JSON</button>
        <button class="danger" onclick="deleteProject(${p.id}, event)">×</button>
      </div>
      <h3>${escapeHtml(p.meta.name)}</h3>
      <div>${escapeHtml(p.meta.number || "No project number")}</div>
      <div class="meta">
        <span>PM: ${escapeHtml(p.meta.pm || "—")}</span>
        <span>Sponsor: ${escapeHtml(p.meta.sponsor || "—")}</span>
        <span>RAG: ${escapeHtml(p.meta.rag || "green")}</span>
      </div>
    </div>`).join("");
}
function renderSidebar() {
  let lastGroup = "";
  let html = "";
  AEI_SECTIONS.forEach(s => {
    if (s.group !== lastGroup) {
      html += `<div class="group-title">${escapeHtml(s.group)}</div>`;
      lastGroup = s.group;
    }
    html += `<div class="nav-item ${s.id === currentSectionId ? "active" : ""}" onclick="renderSection('${s.id}')">${escapeHtml(s.label)}</div>`;
  });
  document.getElementById("sidebar").innerHTML = html;
}
function openProject(id) {
  currentProjectId = id;
  currentSectionId = "cover";
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("projectView").classList.remove("hidden");
  document.getElementById("btnBack").classList.remove("hidden");
  renderSidebar();
  renderSection("cover");
}
function showDashboard() {
  currentProjectId = null;
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("projectView").classList.add("hidden");
  document.getElementById("btnBack").classList.add("hidden");
  renderDashboard();
}
function openNewProject() { document.getElementById("newProjectModal").classList.remove("hidden"); }
function closeNewProject() { document.getElementById("newProjectModal").classList.add("hidden"); }
function createProject() {
  const name = document.getElementById("np_name").value.trim();
  if (!name) { alert("Project name is required"); return; }
  const p = createDefaultProject({
    name,
    number: document.getElementById("np_number").value.trim(),
    pm: document.getElementById("np_pm").value.trim(),
    sponsor: document.getElementById("np_sponsor").value.trim()
  });
  projects.push(p); saveProjects();
  ["np_name","np_number","np_pm","np_sponsor"].forEach(id => document.getElementById(id).value = "");
  closeNewProject(); renderDashboard(); openProject(p.id);
}
function deleteProject(id, event) {
  event.stopPropagation();
  if (!confirm("Delete this project?")) return;
  projects = projects.filter(p => p.id !== id);
  saveProjects(); renderDashboard();
}
function exportProject(id, event) {
  event.stopPropagation();
  const p = projects.find(x => x.id === id);
  const blob = new Blob([JSON.stringify(p, null, 2)], {type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${p.meta.name.replace(/\s+/g, "_")}_UPDD_SDD.json`;
  a.click();
}
