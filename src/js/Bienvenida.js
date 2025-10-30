// Conexión con Contentful
const bienvenidaClient = contentful.createClient({
  space: "0u4txb42mvc7",
  accessToken: "plSlClZoGQp8r_A336VA7XovVx2HhFZfUOTEIDTGEWo"
});

// Función para traer los datos
async function fetchBienvenida() {
  const response = await bienvenidaClient.getEntries({ content_type: "miPagina" });
  const item = response.items[0].fields;
  return {
    titulo: item.titulo,
    subtitulo: item.subtitulo,
    imagen: item.imagen?.fields?.file?.url ? "https:" + item.imagen.fields.file.url : ""
  };
}

// Renderiza la sección
async function createBienvenidaComponent(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const data = await fetchBienvenida();
  if (!data) return;

  container.innerHTML = `
    <h1 class="Bienvenida-title">${data.titulo}</h1>
    ${data.subtitulo ? `<p class="Bienvenida-subtitulo">${data.subtitulo}</p>` : ''}
    ${data.imagen ? `<img src="${data.imagen}" alt="Imagen Bienvenida" class="Bienvenida__img">` : ''}
  `;
}

// Ejecuta cuando cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
  createBienvenidaComponent("bienvenida-component");
});


