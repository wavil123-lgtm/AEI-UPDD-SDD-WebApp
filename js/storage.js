let projects = JSON.parse(localStorage.getItem("projects") || "[]");

function saveProjects() {
  localStorage.setItem("projects", JSON.stringify(projects));
}
``