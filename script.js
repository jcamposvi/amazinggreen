function saludar() {
    alert("¡Hola! Gracias por visitarmos 😀");
}

/*window.onload = function() {
    saludar();
};*/


/*<!-- INICIO - HERO-->*/

  const hero = document.querySelector('.hero');
  const imagenes = [
    'img/campo.jpg',
    'img/campo1.jpg',
    'img/campo2.jpg'
  ];
  let i = 0;

  setInterval(() => {
    hero.style.backgroundImage = `url(${imagenes[i]})`;
    i = (i + 1) % imagenes.length;
  }, 5000); // cambia cada 5 segundos


/*<!-- LIBRO DE RECLAMACIONES -->*/

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".ldr-form");
  const mensajeExito = document.getElementById("mensaje-exito");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // evita recargar

    // Capturar los datos
    const formData = new FormData(form);
    let datos = "=== Datos del formulario ===\n";
    for (let [campo, valor] of formData.entries()) {
      datos += `${campo}: ${valor}\n`;
    }

    // Obtener la fecha actual (YYYY-MM-DD)
    const hoy = new Date();
    const fecha = hoy.toISOString().split("T")[0]; // "2025-09-22"

    // Nombre del archivo con fecha
    const nombreArchivo = `datos_${fecha}.txt`;

    // Crear un archivo .txt y descargarlo
    const blob = new Blob([datos], { type: "text/plain" });
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(blob);
    enlace.download = nombreArchivo;
    enlace.click();

    // Mostrar mensaje
    mensajeExito.style.display = "block";

    // Limpiar formulario
    form.reset();

    // Ocultar mensaje después de 3s
    setTimeout(() => {
      mensajeExito.style.display = "none";
    }, 3000);
  });
});


//  animación + cerrar menú + fondo blur

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Crear overlay para efecto blur
let overlay = document.createElement('div');
overlay.classList.add('menu-overlay');
document.body.appendChild(overlay);

function toggleMenu() {
  menu.classList.toggle('active');
  overlay.style.display = menu.classList.contains('active') ? 'block' : 'none';
}

// Abrir/Cerrar menú
toggle.addEventListener('click', toggleMenu);

// Cerrar menú al hacer clic en opción
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.style.display = 'none';
  });
});

// Cerrar tocando afuera
overlay.addEventListener('click', toggleMenu);


// Sombra en el header al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
