
# Sistema de Registro de Incidencias

## Descripción del proyecto

Aplicación web desarrollada para registrar, visualizar y buscar incidencias reportadas por los usuarios.

Este proyecto corresponde a la asignatura Gestión de la Configuración del Software de la Universidad Estatal de Milagro (UNEMI).

Su objetivo es aplicar los principios de gestión de versiones, control de cambios, despliegue continuo y mejora continua mediante Git, GitHub, GitHub Actions y GitHub Pages.

## Funcionalidades

- Registro de incidencias con título, descripción y estado.
- Visualización del listado de incidencias.
- Estados disponibles: Abierta, En proceso y Cerrada.
- Búsqueda dinámica de incidencias por título.
- Validación de campos obligatorios.
- Prevención del registro de títulos y descripciones que contienen únicamente espacios.
- Publicación automática mediante GitHub Actions y GitHub Pages.

Nota: Los registros se almacenan temporalmente en memoria y desaparecen al recargar la página.

## Tecnologías utilizadas

- HTML5: estructura de la aplicación.
- CSS3: estilos y presentación visual.
- JavaScript: funcionalidades y validaciones.
- Git: control de versiones.
- GitHub: repositorio y colaboración.
- GitHub Actions: validación y despliegue automático.
- GitHub Pages: publicación de la aplicación web.

## Estructura del proyecto

```text
Sistema-incidencias/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── styles.css
├── app.js
└── README.md
```

## Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/Ricardo14Diaz/Sistema-incidencias.git
```

2. Ingresar a la carpeta:

```bash
cd Sistema-incidencias
```

3. Abrir el archivo `index.html` en el navegador o ejecutar el proyecto mediante Live Server en Visual Studio Code.

## Aplicación desplegada

https://ricardo14diaz.github.io/Sistema-incidencias/

## Gestión de ramas

El proyecto utiliza la rama principal `main` y ramas de trabajo para desarrollar funcionalidades y correcciones.

| Rama | Descripción |
|---|---|
| main | Versión principal y estable del proyecto |
| feature/version-inicial | Desarrollo inicial del sistema |
| Steven | Mejoras de estilos y corrección de referencia CSS |
| feature/buscador-incidencias | Implementación de búsqueda dinámica |
| fix/validacion-campos | Corrección de campos vacíos |
| feature/deploy-pages | Automatización del despliegue |

Los cambios se integran a `main` mediante Pull Requests.

## Historial de versiones

### v1.0.0 - Versión inicial

- Registro de incidencias.
- Listado de incidencias.
- Estructura HTML, CSS y JavaScript.
- Documentación inicial del proyecto.

### v1.1.0 - Buscador de incidencias

- Incorporación del buscador dinámico por título.
- Filtrado de incidencias sin recargar la página.
- Mejoras en la consulta de registros.

### v1.1.1 - Corrección de validación de campos

- Corrección del registro de campos en blanco.
- Validaciones mediante `trim()`.
- Mensaje de alerta cuando se introducen datos no válidos.

## Pull Requests realizados

| PR | Descripción |
|---|---|
| #1 | Implementación de la versión inicial |
| #2 | Mejoras visuales y corrección de CSS |
| #3 | Implementación del buscador de incidencias |
| #5 | Corrección de validación de campos |
| #6 | Automatización mediante GitHub Actions |

Todos estos Pull Requests fueron fusionados con `main`.

## Convenciones de commits

Se utilizan prefijos descriptivos para identificar los cambios:

- `feat:` nuevas funcionalidades.
- `fix:` corrección de errores.
- `style:` cambios visuales.
- `docs:` actualización de documentación.
- `ci:` integración y despliegue continuo.

## Despliegue automático

Se configuró el archivo `.github/workflows/deploy.yml` para automatizar la validación y el despliegue de la aplicación.

El flujo realiza las siguientes actividades:

1. Obtiene el código del repositorio.
2. Comprueba la existencia de los archivos principales.
3. Valida la sintaxis de JavaScript.
4. Prepara los archivos de publicación.
5. Despliega la aplicación en GitHub Pages cuando se actualiza `main` y la validación es exitosa.

## Mejora continua

Se identificó el Issue #4, relacionado con el registro de incidencias que contenían solamente espacios en blanco.

La corrección fue implementada mediante la rama `fix/validacion-campos` y fusionada a través del Pull Request #5.

La solución quedó documentada en la versión `v1.1.1`.

## Colaboradores con contribuciones registradas

- Ricardo14Diaz: desarrollo inicial y gestión del repositorio.
- Jose2401jj: buscador, validación de campos y despliegue automático.
- Sgarcia27: mejoras de estilos y corrección de CSS.
- Elkinv: mejoras de estilos

## Repositorio

https://github.com/Ricardo14Diaz/Sistema-incidencias
