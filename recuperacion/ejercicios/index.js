//Empresa, Importacion Aduana
class Empresa {
  constructor(id, nombre, rut) {
    this.id = id;
    this.nombre = nombre;
    this.rut = rut;
    this.importaciones = [];
  }
  agregarImportacion(idImportacion, producto, cantidad, precioUnitario) {
    const importacion = {
      idImportacion,
      producto,
      cantidad,
      precioUnitario,
    };
    this.importaciones.push(importacion);
  }
  obtenerTotalImportaciones() {
    let total = 0;
    for (const importacion of this.importaciones) {
      //+=   -----> total = total + (importacion.cantidad * importacion.precioUnitario)
      total += importacion.cantidad * importacion.precioUnitario;
    }
    return total;
  }
}
class Importacion extends Empresa {
  constructor(id, nombre, rut, rubro, tamanio) {
    super(id, nombre, rut);
    this.rubro = rubro;
    this.tamanio = tamanio;
  }
}
class Aduana {
  constructor() {
    this.empresas = [];
  }
  agregarEmpresa(empresa) {
    this.empresas.push(empresa);
  }
  generarTablaImportaciones(empresaId) {
    const empresa = this.empresas.find((emp) => emp.id === empresaId);
    if (empresa) {
      let tabla = `<table>`;
      tabla += `<thead>
        <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
        </tr>
      </thead>
      <tbody>`;

      for (const importacion of empresa.importaciones) {
        tabla += `<tr>
            <td>${importacion.idImportacion}</td>
            <td>${importacion.producto}</td>
            <td>${importacion.cantidad}</td>
            <td>${importacion.precioUnitario}</td>
        </tr>`;
      }
      tabla += `</tbody>
      </table>`;
      return tabla;
    } else {
      return "Empresa no encontrada";
    }
  }
}
const tabla1 = document.getElementById("tabla1");
const tabla2 = document.getElementById("tabla2");
const aduana = new Aduana();
const empresa1 = new Empresa(1, "Empresa A", "12345678-9");
empresa1.agregarImportacion(1, "Producto 1", 10, 100);
empresa1.agregarImportacion(2, "Producto 2", 5, 200);
aduana.agregarEmpresa(empresa1);

const importacion1 = new Importacion(
  2,
  "Importador B",
  "98765432-1",
  "Mineria",
  "Grande"
);
importacion1.agregarImportacion(1, "Producto 1", 20, 150);
aduana.agregarEmpresa(importacion1);

console.log(empresa1.obtenerTotalImportaciones());
console.log(aduana.generarTablaImportaciones(1));
console.log(aduana.generarTablaImportaciones(2));

tabla1.innerHTML = aduana.generarTablaImportaciones(1);
tabla2.innerHTML = aduana.generarTablaImportaciones(2);
