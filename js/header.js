const burgerIcon = document.getElementById("burgerIcon");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLink = document.querySelectorAll(".nav-link");
const authBtn = document.getElementById("authBtn");

burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("active");
});

burgerIcon.addEventListener("click", function () {
  mobileMenu.classList.toggle("scale-y-0");
  mobileMenu.classList.toggle("opacity-0");
});
mobileLink.forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.toggle("scale-y-0");
    mobileMenu.classList.toggle("opacity-0");
    burgerIcon.classList.toggle("active");
  });
});

const currentUser = JSON.parse(localStorage.getItem("currentUser"));

authBtn.innerHTML = currentUser
  ? `<button id="logoutBtn" class="bg-red-600 px-4 py-2 rounded-lg">Logout</button>`
  : `<button class=" bg-orange-800 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors">
          <a href="#login" class="w-full h-full px-4 py-2 block">Login</a>
        </button>`;

const logoutBtn = document.getElementById("logoutBtn");
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

logoutBtn?.addEventListener("click", function () {
  localStorage.removeItem("currentUser");

  authBtn.innerHTML = `<button class=" bg-orange-800 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors">
<a href="#login" class="w-full h-full px-4 py-2 block">Login</a></button>`;

  window.location.href = "index.html#login";
});
