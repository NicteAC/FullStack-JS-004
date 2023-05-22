class Auto {
  constructor(motor, color, ruedas, anioFab) {
    this.motor = motor;
    this.color = color;
    this.ruedas = ruedas;
    this.anioFab = anioFab;
    this.encendido = false;
    this.acelerador = false;
    this.freno = false;
  }

  encender() {
    this.encendido = true;
  }
  acelerar() {
    this.acelerador = true;
  }
  frenar() {
    this.freno = true;
  }
}
class Puerta extends Auto {
  constructor(motor, color, ruedas, anioFab, colorPuerta, ubicacion, ventana) {
    super(motor, color, ruedas, anioFab);
    this.colorPuerta = colorPuerta;
    this.ubicacion = ubicacion;
    this.ventana = ventana;
    this.abierta = false;
  }
  abrir() {
    this.abierta = true;
  }
  cerrar() {
    this.abierta = false;
  }
}
