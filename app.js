const incidencias = [];

const form = document.getElementById("form-incidencia");
const lista = document.getElementById("lista");

function mostrar() {
  lista.innerHTML = "";
  incidencias.forEach((inc) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>#${inc.id} ${inc.titulo}</strong>
      <span class="estado">${inc.estado}</span>
      <p>${inc.descripcion}</p>`;
    lista.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  incidencias.push({
    id: incidencias.length + 1,
    titulo: document.getElementById("titulo").value,
    descripcion: document.getElementById("descripcion").value,
    estado: document.getElementById("estado").value,
  });
  form.reset();
  mostrar();
});