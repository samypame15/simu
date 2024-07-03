document.addEventListener("DOMContentLoaded", () => {
  const registrationContainer = document.getElementById(
    "registrationContainer"
  );
  const loginContainer = document.getElementById("loginContainer");
  const toLoginLink = document.getElementById("toLogin");
  const toRegisterLink = document.getElementById("toRegister");
  const registrationForm = document.getElementById("registrationForm");
  const loginForm = document.getElementById("loginForm");

  toLoginLink.addEventListener("click", () => {
    registrationContainer.classList.remove("active");
    loginContainer.classList.add("active");
  });

  toRegisterLink.addEventListener("click", () => {
    loginContainer.classList.remove("active");
    registrationContainer.classList.add("active");
  });

  const users = {};

  registrationForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("regName").value;
    const surname = document.getElementById("regSurname").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    if (users[email]) {
      alert("Este correo electrónico ya está registrado.");
    } else {
      users[email] = { name, surname, password };
      alert("Registro exitoso. Ahora puedes iniciar sesión.");
      registrationForm.reset();
      alert(`Bienvenido, ${users[email].name} ${users[email].surname}!`);
      registrationContainer.classList.remove("active");
      loginContainer.classList.add("active");
    }
  });

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (users[email] && users[email].password === password) {
      alert(`Bienvenido, ${users[email].name} ${users[email].surname}!`);
      loginForm.reset();
    } else {
      alert("Correo electrónico o contraseña incorrectos.");
    }
  });
});
