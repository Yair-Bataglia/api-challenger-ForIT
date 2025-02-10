let plantillaHtml: string


export function addTarjet(data: any) {
  const container = document.getElementById('tarjets')
  if (!container) return;

  container.innerHTML = ''

  data.forEach((usuario: any) => {
    plantillaHtml = `<div class="tarjet">
        <h3 class="nombre">${usuario.name}</h3>
        <div class="grupo">
          <span class="separador">Datos Personales</span>
          <h4 class="username"><span class="label">Username: </span>${usuario.username}</h4>
          <h4 class="email"><span class="label">Email: </span>${usuario.email}</h4>
          <h4 class="empresa"><span class="label">Empresa: </span>${usuario.company.name}</h4>
        </div>
        <div class="grupo">
          <span class="separador">Contacto</span>
          <h4 class="ciudad"><span class="label">Ciudad: </span>${usuario.address.city}</h4>
          <h4 class="telefono"><span class="label">Telefono: </span>${usuario.phone}</h4>
        </div>
      </div>`
    if (container) {
      container.innerHTML += plantillaHtml
    }
  });

}