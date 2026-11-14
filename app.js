const CLAVE_ALMACENAMIENTO = "sistema-incidencias";
const ESTADOS_VALIDOS = ["Abierta", "En proceso", "Cerrada"];

const form = document.getElementById("form-incidencia");
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");
let incidencias = cargarIncidencias();

function cargarIncidencias() {
  try {
    const datos = localStorage.getItem(CLAVE_ALMACENAMIENTO);
    if (!datos) {
      return [];
    }

    const registros = JSON.parse(datos);
    const sonValidos =
      Array.isArray(registros) &&
      registros.every(
        (inc) =>
          Number.isInteger(inc.id) &&
          inc.id > 0 &&
          typeof inc.titulo === "string" &&
          typeof inc.descripcion === "string" &&
          ESTADOS_VALIDOS.includes(inc.estado)
      );

    if (!sonValidos) {
      throw new Error("El formato de las incidencias almacenadas no es válido.");
    }

    return registros;
  } catch (error) {
    console.error("No se pudieron cargar las incidencias guardadas.", error);
    mostrarMensaje(
      "No se pudieron recuperar los datos guardados. Registra una nueva incidencia.",
      true
    );
    return [];
  }
}

function guardarIncidencias() {
  try {
    localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(incidencias));
    return true;
  } catch (error) {
    console.error("No se pudieron guardar las incidencias.", error);
    return false;
  }
}

function mostrarMensaje(texto, esError) {
  mensaje.textContent = texto;
  mensaje.classList.toggle("error", esError);
}

function mostrar() {
  lista.replaceChildren();

  if (incidencias.length === 0) {
    const vacio = document.createElement("li");
    vacio.textContent = "Todavía no hay incidencias registradas.";
    lista.appendChild(vacio);
    return;
  }

  incidencias.forEach((inc) => {
    const li = document.createElement("li");
    const titulo = document.createElement("strong");
    const estado = document.createElement("span");
    const descripcion = document.createElement("p");

    titulo.textContent = `#${inc.id} ${inc.titulo}`;
    estado.className = "estado";
    estado.textContent = inc.estado;
    descripcion.textContent = inc.descripcion;

    li.append(titulo, estado, descripcion);
    lista.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const titulo = document.getElementById("titulo").value.trim();
  const descripcion = document.getElementById("descripcion").value.trim();
  if (!titulo || !descripcion) {
    mostrarMensaje("El título y la descripción no pueden estar vacíos.", true);
    return;
  }

  const siguienteId =
    incidencias.reduce((mayorId, inc) => Math.max(mayorId, inc.id), 0) + 1;
  incidencias.push({
    id: siguienteId,
    titulo,
    descripcion,
    estado: document.getElementById("estado").value,
  });

  form.reset();
  mostrar();


  if (guardarIncidencias()) {
    mostrarMensaje("Incidencia registrada y guardada en este navegador.", false);
  } else {
    mostrarMensaje(
      "La incidencia se registró, pero no se pudo guardar en este navegador.",
      true
    );
  }
});

mostrar();