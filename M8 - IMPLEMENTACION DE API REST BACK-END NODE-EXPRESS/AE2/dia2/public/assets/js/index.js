"use strict";
let url = "http://localhost:3000/";
let tbody = document.getElementById("cuerpo");
let fecha = document.getElementById("fecha");
let cliente = document.getElementById("cliente");
let telefono = document.getElementById("telefono");
let correo = document.getElementById("correo");
let peluquero = document.getElementById("peluquero");
let servicio = document.getElementById("servicio");
let hora = document.getElementById("hora");
let nombre = document.getElementById("nombre");

let citas = [];
let peluqueros = [];
let clientes = [];
window.onload = getData();

async function getData() {
  await axios.get(url + "citas").then((data) => {
    console.log(data);
    citas = data.data[0];
    peluqueros = data.data[1];
    clientes = data.data[2];
    tbody.innerHTML = "";
    function formatearFecha(fecha) {
      const fechaObj = new Date(fecha);
      const dia = String(fechaObj.getDate()).padStart(2, "0");
      const mes = String(fechaObj.getMonth() + 1).padStart(2, "0");
      return `${dia}/${mes}`;
    }
    function formatearHora(hora) {
      const partes = hora.split(":");
      const horas = partes[0];
      const minutos = partes[1];
      return `${horas}:${minutos}`;
    }
    citas.forEach((c, i) => {
      tbody.innerHTML += `
      <tr>
        <td>${formatearFecha(c.fecha)}</td>
        <td>${formatearHora(c.hora)}</td>
        <td>${c.servicio}</td>
        <td>${c.NombreCliente}</td>
        <td>${c.telefono}</td>
        <td>${c.correo}</td>
        <td>${c.NombrePeluquero}</td>
        <td>${c.especialidad}</td>
        <td class="d-flex">
          <button class="btn btn-warning" onclick="prepararCita(${
            c.CitaId
          }, ${i})">Editar</button>
          <button class="btn btn-danger ml-3" onclick="eliminarCita(${i},'${
        c.CitaId
      }')">Eliminar</button>
        </td>
      </tr>
    `;
    });
    peluqueros.forEach((p, i) => {
      peluquero.innerHTML += `        
        <option value="${p.id}">${p.nombre}</option>
        `;
    });
    clientes.forEach((c, i) => {
      cliente.innerHTML += `
        
        <option value="${c.id}">${c.nombre}</option>
        `;
    });
  });
  fecha.value = "";
  cliente.value = "";
  servicio.value = "";
  document.getElementById("agregarCita").style.display = "block";
  document.getElementById("editar").style.display = "none";
}

function nuevaCita() {
  let data = {
    fecha: fecha.value,
    hora: hora.value,
    servicio: servicio.value,
    peluquero: peluquero.value,
    cliente: cliente.value,
  };
  console.log(data);
  axios.post(url + "cita", data).then(() => getData());
  (fecha.value = ""),
    (hora.value = ""),
    (servicio.value = ""),
    (peluquero.value = ""),
    (cliente.value = "");
}
function nuevoCliente() {
  nombre;
  telefono;
  correo;
  let data = {
    nombre: nombre.value,
    telefono: telefono.value,
    correo: correo.value,
  };
  axios.post(url + "cliente", data).then(() => getData());
  nombre.value = "";
  telefono.value = "";
  correo.value = "";
}
function prepararCita(id, i)  {
  let date = new Date(citas[i].fecha);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  let formattedDate = `${year}-${month}-${day}`;
  let pelu = peluqueros.find((p) => p.nombre == citas[i].NombrePeluquero);
  let client = clientes.find((c) => c.nombre == citas[i].NombreCliente);
  fecha.value = formattedDate;
  hora.value = citas[i].hora;
  servicio.value = citas[i].especialidad;
  peluquero.value = pelu.id;
  cliente.value = client.id;
  document
    .getElementById("editar")
    .setAttribute("onclick", `editarCita('${id}')`);
  document.getElementById("agregarCita").style.display = "none";
  document.getElementById("editar").style.display = "block";
}

function editarCita(id) {
  let data = {
    fecha: fecha.value,
    hora: hora.value,
    servicio: servicio.value,
    peluquero: peluquero.value,
    cliente: cliente.value,
    id: id,
  };
  console.log(data)
  axios.put(url + "cita", data).then(() => {
    document.getElementById("agregarCita").style.display = "block";
    document.getElementById("editar").style.display = "none";
  });
}

function eliminarCita(i, id) {
  axios.delete(url + "cita?id=" + id).then(() => {
    alert("Cita eliminada con exito");
    location.reload();
  });
}
async function data(event) {
  await axios.get(url + "citas").then(() => {
    let peluquero = peluqueros.find((p) => p.id == event.target.value);
    servicio.value = peluquero.especialidad;
  });
}

document.getElementById("peluquero").addEventListener("change", data);
