document.addEventListener("DOMContentLoaded", function () {
  const secciones = document.querySelectorAll(".seccion");
  const botonesInicio = document.querySelectorAll(".btnRegresarInicio");
  const botonesConsulta = document.querySelectorAll(".btnRegresarConsulta");
  const botonesDocumento = document.querySelectorAll(".btnRegresarDocumento");
  const links = document.querySelectorAll("a.link");

  document.getElementById("btnConsulta").addEventListener("click", function () {
    mostrarSeccion("consulta");
  });

  document
    .getElementById("btnDocumento")
    .addEventListener("click", function () {
      mostrarSeccion("documento");
    });

  document
    .getElementById("btnRepresentacion")
    .addEventListener("click", function () {
      mostrarSeccion("representacion");
    });

  botonesInicio.forEach((boton) => {
    boton.addEventListener("click", function () {
      mostrarSeccion("inicio");
    });
  });

  botonesConsulta.forEach((boton) => {
    boton.addEventListener("click", function () {
      mostrarSeccion("consulta");
      alert("Consulta enviada.");
    });
  });

  botonesDocumento.forEach((boton) => {
    boton.addEventListener("click", function () {
      mostrarSeccion("documento");
      alert("Solicitud enviada.");
    });
  });

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const seccionId = this.getAttribute("href").substring(1);
      mostrarSeccion(seccionId);
    });
  });

  function mostrarSeccion(id) {
    secciones.forEach((seccion) => {
      seccion.style.display = seccion.id === id ? "block" : "none";
    });
  }

  document
    .querySelectorAll('button[id^="btnEnviarConsulta"]')
    .forEach((button) => {
      button.addEventListener("click", function () {
        const textarea = this.previousElementSibling;
        if (textarea.value.trim() === "") {
          alert("Por favor, describa su caso antes de enviar.");
        } else {
          alert("Consulta enviada.");
          textarea.value = "";
          mostrarSeccion("inicio");
        }
      });
    });

  document.querySelectorAll('button[id^="btnEnviar"]').forEach((button) => {
    button.addEventListener("click", function () {
      const textarea = this.previousElementSibling;
      if (textarea.value.trim() === "") {
        alert("Por favor, describa su caso antes de enviar.");
      } else {
        alert("Solicitud enviada.");
        textarea.value = "";
        mostrarSeccion("inicio");
      }
    });
  });
});
