// Configuración de Contentful
const serviciosClient = contentful.createClient({
  space: "0u4txb42mvc7",
  accessToken: "jiWWFsK3PZqu_ajgTI-Vd3IysWnIqQDYV0WYt5UPhR0",
  environment: "master"
});

// Función helper para obtener URL de imagen
const getImageUrl = (imageField) => {
  if (!imageField) {
    console.log("⚠️ imageField es null o undefined");
    return null;
  }
  
  console.log("🔎 Procesando imagen:", imageField);
  
  // Intentar diferentes estructuras posibles
  let url = null;
  
  // Opción 1: imageField.fields.file.url (más común)
  if (imageField.fields?.file?.url) {
    url = imageField.fields.file.url;
    console.log("✅ URL encontrada en fields.file.url:", url);
  }
  // Opción 2: imageField.file.url
  else if (imageField.file?.url) {
    url = imageField.file.url;
    console.log("✅ URL encontrada en file.url:", url);
  }
  // Opción 3: Es una URL directa (string)
  else if (typeof imageField === 'string') {
    url = imageField;
    console.log("✅ URL es string directo:", url);
  }
  // Opción 4: Tiene sys.id (necesita resolverse)
  else if (imageField.sys?.id) {
    console.warn("⚠️ Imagen tiene sys.id pero no está resuelta. Usa include parameter.");
    return null;
  }
  
  if (!url) {
    console.error("❌ No se pudo extraer URL de:", imageField);
    return null;
  }
  
  // Agregar https: si no lo tiene
  const finalUrl = url.startsWith('//') ? `https:${url}` : url;
  console.log("🎯 URL final:", finalUrl);
  
  return finalUrl;
};

// Traer datos desde Contentful
async function fetchServicios() {
  try {
    console.log("🔍 Intentando conectar con Contentful...");
    
    const response = await serviciosClient.getEntries({
      content_type: "servicios",
      include: 10 // Esto resuelve referencias de imágenes
    });

    console.log("✅ Respuesta de Contentful:", response);
    console.log("📦 Total de items:", response.items.length);

    if (response.items.length === 0) {
      console.warn("⚠️ No se encontraron entries con content_type 'servicios'");
      return null;
    }

    const item = response.items[0]?.fields;
    if (!item) {
      console.warn("⚠️ No se encontraron fields en el primer item");
      return null;
    }

    console.log("📋 Fields disponibles:", Object.keys(item));
    console.log("📝 Título raw:", item.misServicios);
    console.log("🖼️ Imagen 1 RAW:", item.imagen);
    console.log("🖼️ Imagen 2:", item.imagen2);
    console.log("🖼️ Imagen 3:", item.imagen3);

    // Función para obtener datos completos de cada imagen
    const getImageData = (imageField) => {
      if (!imageField) return null;
      
      return {
        url: getImageUrl(imageField),
        title: imageField.fields?.title || imageField.title || "",
        description: imageField.fields?.description || imageField.description || ""
      };
    };

    const imagenes = [
      getImageData(item.imagen),
      getImageData(item.imagen2),
      getImageData(item.imagen3)
    ].filter(img => img && img.url);

    console.log("🎨 Imágenes procesadas:", imagenes);

    // Obtener título
    const titulo = item.misServicios || "Mis Servicios";
    console.log("✅ Título final:", titulo);

    return {
      titulo: titulo,
      imagenes: imagenes
    };
  } catch (error) {
    console.error("❌ Error al traer los servicios:", error);
    console.error("📝 Detalles del error:", error.message);
    return null;
  }
}

// Renderizar
async function createServiciosComponent(containerId) {
  const container = document.getElementById(containerId);
  
  if (!container) {
    console.error(`❌ No se encontró el contenedor con id: ${containerId}`);
    return;
  }

  console.log("🎯 Contenedor encontrado, obteniendo datos...");

  const data = await fetchServicios();
  
  if (!data) {
    console.error("❌ No se pudieron obtener los datos");
    return;
  }

  console.log("✅ Datos obtenidos:", data);

  const section = document.createElement("section");
  section.id = "servicios";
  section.classList.add("servicios");

  section.innerHTML = `
    <div class="servicios__contenedor">
      <h2 class="servicios__title">${data.titulo}</h2>
      <div class="servicios__cards">
        ${data.imagenes
          .map(
            (img) => `
          <div class="section__servicio">
            <img class="servicio-img" src="${img.url}" alt="${img.title || 'Servicio'}" loading="lazy">
            ${img.title ? `<h3 class="servicio-title">${img.title}</h3>` : ''}
            ${img.description ? `<p class="servicio-parrafo">${img.description}</p>` : ''}
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;

  container.appendChild(section);
  console.log("🎉 Componente renderizado exitosamente");
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 DOM cargado, iniciando componente de servicios...");
  createServiciosComponent("servicios-component");
});

