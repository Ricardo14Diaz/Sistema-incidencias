
const incidencias = [];

const form = document.getElementById("form-incidencia");
const lista = document.getElementById("lista");
const buscar = document.getElementById("buscar");

function mostrar() {
  lista.innerHTML = "";

  const textoBusqueda = buscar.value.toLowerCase().trim();

  const resultados = incidencias.filter((inc) =>
    inc.titulo.toLowerCase().includes(textoBusqueda)
  );

  resultados.forEach((inc) => {
    const li = document.createElement("li");

    const titulo = document.createElement("strong");
    titulo.textContent = `#${inc.id} ${inc.titulo}`;

    const estado = document.createElement("span");
    estado.className = "estado";
    estado.textContent = inc.estado;

    const descripcion = document.createElement("p");
    descripcion.textContent = inc.descripcion;

    li.append(titulo, estado, descripcion);
    lista.appendChild(li);
  });
}

buscar.addEventListener("input", mostrar);

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
