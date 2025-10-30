// contact-form.js
function loadContactForm() {
  const container = document.getElementById("contacto");
  if (!container) {
    console.log('No se encontró el div #contacto');
    return;
  }

  // Insertamos el HTML del formulario
  container.innerHTML = `
    <div class="contact-section">
      <h2 class="title-contact">Escribime</h2>
      <form class="contact-form" id="contact-form">
        <label for="nombre" class="label">Nombre</label>
        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" class="contact-form-input" required>

        <label for="email" class="label">Email</label>
        <input type="email" id="email" name="email" placeholder="tu@mail.com" class="contact-form-input" required>

        <label for="mensaje" class="label">Mensaje</label>
        <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje..." class="textarea" required></textarea>

        <button type="submit">Enviar</button>
      </form>
      <div id="form-status" class="form-status"></div>
    </div>
  `;

  const form = document.getElementById("contact-form");
  const statusDiv = document.getElementById("form-status");

  // Event listener para enviar el formulario
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !email || !mensaje) {
      statusDiv.textContent = "Por favor completá todos los campos.";
      statusDiv.style.color = "red";
      return;
    }

    statusDiv.textContent = "Enviando mensaje...";
    statusDiv.style.color = "black";

    try {
      const res = await fetch("https://apx.school/api/utils/email-to-student", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          to: "mauromartinez771@gmail.com",
          message: `De: ${nombre} (${email})\n\n${mensaje}`
        })
      });

      if (!res.ok) throw new Error(`Error al enviar: ${res.status}`);

      statusDiv.textContent = "Mensaje enviado correctamente ✅";
      statusDiv.style.color = "green";
      form.reset();
    } catch (err) {
      console.error(err);
      statusDiv.textContent = "Error al enviar el mensaje ❌";
      statusDiv.style.color = "red";
    }
  });
}

// Ejecutamos la función cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", loadContactForm);
console.log('contact-form.js cargado correctamente');
