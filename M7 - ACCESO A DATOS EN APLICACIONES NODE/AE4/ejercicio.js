const mysql = require("mysql2/promise");

async function transferirDinero(cuentaOrigenId, cuentaDestinoId, cantidad) {
  // Crear la conexión
  const conexion = await mysql.createConnection({
    /* tus datos de conexión */
  });

  try {
    // Inicio de la transacción
    await conexion.beginTransaction();

    // Reducir el balance de la cuenta del remitente
    const [filas1] = await conexion.execute(
      "UPDATE cuentas SET balance = balance - ? WHERE id = ?",
      [cantidad, cuentaOrigenId]
    );
    if (filas1.affectedRows === 0) {
      throw new Error("No se pudo debitar de la cuenta origen");
    }

    // Aumentar el balance de la cuenta del receptor
    const [filas2] = await conexion.execute(
      "UPDATE cuentas SET balance = balance + ? WHERE id = ?",
      [cantidad, cuentaDestinoId]
    );
    if (filas2.affectedRows === 0) {
      throw new Error("No se pudo acreditar a la cuenta destino");
    }

    // Confirmación de la transacción
    await conexion.commit();
    console.log("Transferencia exitosa!");
  } catch (error) {
    // Vuelta atrás de la transacción en caso de error
    await conexion.rollback();
    console.error("Error durante la transferencia, se hizo ROLLBACK", error);
  } finally {
    // Cerrar la conexión
    conexion.close();
  }
}
