const contenedorYear = document.querySelector('.year');
const contenedorhora = document.querySelector('.hora');

const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado',];

const mesesDelAño = [
    "Enero", "Febrero", "Marzo", "Abril", 
    "Mayo", "Junio", "Julio", "Agosto", 
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function actualizarDato () {
  const dato = new Date();
  const year = dato.getFullYear();
  let mes = dato.getMonth();
  mes = mesesDelAño[mes];
  
  const fecha = String(dato.getDate()).padStart(2, '0');
  let dia = dato.getDay();
  dia = dias[dia];
  
  const hora = String(dato.getHours()).padStart(2, '0');
  const minutos = String(dato.getMinutes()).padStart(2, '0');
  const segundos = String(dato.getSeconds()).padStart(2, '0');
  
  contenedorYear.textContent = `${dia}  ${fecha} de ${mes} del ${year}`;
  
  contenedorhora.textContent = `${hora} : ${minutos} : ${segundos}`;
}

setInterval(actualizarDato, 1000);
actualizarDato();


