const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users"));

  if (!users) {
    alert("No registered users found");
    return;
  }

  const validUser = users.find(
    (user) => user.email === email && user.password === password,
  );

  if (!validUser) {
    alert("Invalid email or password");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(validUser));

  window.location.href = "index.html";
});
