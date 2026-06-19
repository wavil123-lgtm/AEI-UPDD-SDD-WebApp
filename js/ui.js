function renderDashboard() {
  const container = document.getElementById("projectCards");
  container.innerHTML = "";

  projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `<h3>${p.name}</h3>`;
    div.onclick = () => openProject(p.id);
    container.appendChild(div);
  });
}
