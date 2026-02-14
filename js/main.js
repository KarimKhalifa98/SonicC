import { routes } from "./routes.js";

//Loads an HTML component into a specific element by ID
async function loadComponent(id, file) {
  const res = await fetch(file);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

let currentScript;
// Dynamically loads a JavaScript module for the current page
function loadJS(src) {
  // Removes the previous script to avoid conflicts
  if (currentScript) currentScript.remove();
  if (!src) return;

  currentScript = document.createElement("script");
  currentScript.src = src;
  currentScript.type = "module";
  document.body.appendChild(currentScript);
}

// Extracts the current page name from the URL hash Defaults to 'home'
function getPage() {
  return location.hash.split("?")[0].replace("#", "") || "home";
}

// Main router function
// Handles page navigation and layout visibility
async function router() {
  const page = getPage();

  // Redirect based on authentication status
  // if (authService.isAuthenticated()) {
  //   if (page === "login" || page === "register") {
  //     window.location.hash = "#home";
  //     return;
  //   }
  // }

  const route = routes[page] || routes.home;

  // Load page HTML and JavaScript
  await loadComponent("content", route.html);
checkUser()
  loadJS(route.js);
}

// Load header and initialize theme

loadComponent("header", "pages/header.html").then(() => {
  const script = document.createElement("script");
  script.src = "js/header.js"
  script.type = "module";
  document.body.appendChild(script);
});

// Load footer

loadComponent("footer", "pages/footer.html");

router();
// Re-run router when URL hash changes
window.addEventListener("hashchange", router);


const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const logoutBtn = document.getElementById("logoutBtn");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");


export function checkUser() {
  if (currentUser) {
    loginBtn?.classList.add("hidden");
    logoutBtn?.classList.remove("hidden");
  } else {
    loginBtn?.classList.remove("hidden");
    logoutBtn?.classList.add("hidden");
  }
}
