window.oland = function () {
  const cards = document.querySelectorAll('.card');
 document.querySelector('#card-count').textContent = `Hay ${cards.length} conceptos en esta página.`;
};

// Mostrar/ocultar información extra
function toggleInfo(button) {
  const card = button.closest('.card');
  const info = card.querySelector('.extra-info');

  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block";
    button.textContent = "Ver menos";
  } else {
    info.style.display = "none";
    button.textContent = "Ver más";
  }
}

function toggleTheme() {
  console.log("Botón de tema clickeado");
  document.body.classList.toggle("dark-mode");
}


window.onload = function () {
  const cards = document.querySelectorAll('.card');
  const countElement = document.getElementById('card-count');
  if (countElement) {
    countElement.textContent = `Hay ${cards.length} conceptos en esta página.`;
  }

  // Cargar tema guardado
  if (localStorage.getItem("tema") === "oscuro") {
    document.body.classList.add("dark-mode");
  }
};


function toggleInfo(button) {
  const card = button.closest('.card');
  const info = card.querySelector('.extra-info');
  const contador = card.querySelector('.contador');

  info.classList.toggle('visible');
  button.textContent = info.classList.contains('visible') ? "Ver menos" : "Ver más";

  // Actualizar contador
  let veces = parseInt(contador.textContent.match(/\d+/)[0]);
  contador.textContent = `Visto: ${veces + 1} veces`;
}


function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const tema = document.body.classList.contains("dark-mode") ? "oscuro" : "claro";
  localStorage.setItem("tema", tema);
}


function filtrarTarjetas() {
  const input = document.getElementById('buscador').value.toLowerCase();
  const tarjetas = document.querySelectorAll('.card');

  tarjetas.forEach(card => {
    const titulo = card.querySelector('h2')?.textContent.toLowerCase() || "";
    const texto = card.querySelector('p')?.textContent.toLowerCase() || "";
    const extra = card.querySelector('.extra-info')?.textContent.toLowerCase() || "";

    const coincide = titulo.includes(input) || texto.includes(input) || extra.includes(input);

    card.style.display = coincide ? "block" : "none";
  });
}


