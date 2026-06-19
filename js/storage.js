
const STORAGE_KEY = "AEI_UPDD_SDD_PROJECTS_FIXED_V1";
let projects = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
let currentProjectId = null;
let currentSectionId = "cover";
function saveProjects() { localStorage.setItem(STORAGE_KEY, JSON.stringify(projects)); }
function clone(value) { return JSON.parse(JSON.stringify(value)); }
function currentProject() { return projects.find(p => p.id === currentProjectId); }
