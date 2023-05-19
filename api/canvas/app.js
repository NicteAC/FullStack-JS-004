const url = "https://superheroapi.com/api.php/109116261447218/";

window.addEventListener("DOMContentLoaded", () => {
  getData(115);
});
const getData = async (id) => {
  try {
    const response = await axios.get(url + id);
    let datosApi = response.data;
    console.log(datosApi)
    let superPoderesKeys = Object.keys(datosApi.powerstats);
    let superPoderesValues = Object.values(datosApi.powerstats);
    let estadistica = superPoderesValues.map((el, index) => {
      return { y: el, label: superPoderesKeys[index] };
    });
    let config = {
      animationEnabled: true,
      title: {
        text: "Estadisticas",
      },
      axisY: {
        title: "valor",
      },
      axisX: {
        title: "power stats",
      },
      data: [
        {
          indexLabel: "{label} ({y})",
          type: "pie",
          dataPoints: estadistica,
        },
      ],
    };
    let chart = new CanvasJS.Chart("chartContainer", config);
    chart.render();
  } catch (error) {
    console.error(error);
  }
};
