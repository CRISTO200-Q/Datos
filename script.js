function evaluarFaltaMantenimiento() {
  let salitre = parseInt(document.getElementById("salitre").value);
  let fisuras = parseInt(document.getElementById("fisuras").value);
  let humedad = parseInt(document.getElementById("humedad").value);
  let pintura = parseInt(document.getElementById("pintura").value);
  let techo = parseInt(document.getElementById("techo").value);
  let electrica = parseInt(document.getElementById("electrica").value);
  let agua = parseInt(document.getElementById("agua").value);

  let faltaMantenimiento = 1 + 0.5 * salitre + 0.5 * fisuras + 0.4 * humedad + 0.3 * pintura + 0.3 * techo + 0.2 * electrica + 0.2 * agua;
  return faltaMantenimiento;
}

function calcularFaltaMantenimiento() {
  let faltaMantenimiento = evaluarFaltaMantenimiento();
  document.getElementById("resultadoMantenimiento").innerHTML = `La falta de mantenimiento de la vivienda es: ${faltaMantenimiento}`;
  document.getElementById("faltaMantenimiento").innerHTML = `Falta de Mantenimiento: ${faltaMantenimiento}`;
}

function calcularVulnerabilidad() {
  let resistencia = parseFloat(document.getElementById("resistencia").value);
  let altura = parseFloat(document.getElementById("altura").value);
  let edad = parseInt(document.getElementById("edad").value);
  let faltaMantenimiento = parseFloat(document.getElementById("faltaMantenimiento").innerHTML.split(":")[1].trim());

  let vulnerabilidad = 1.5 - 0.2 * resistencia + 0.4 * altura + 0.2 * edad + 0.5 * faltaMantenimiento;

  document.getElementById("resultado").innerHTML = `La vulnerabilidad sísmica del edificio es: ${vulnerabilidad}`;

  // Crear el gráfico de barras apilables
  let chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // Puedes elegir otros temas: "light1", "light2", "dark1", "dark2"
    title: {
      text: "Componentes de la Vulnerabilidad Sísmica"
    },
    axisY: {
      title: "Valor"
    },
    data: [{
      type: "stackedBar",
      showInLegend: "true",
      legendText: "Edificio",
      dataPoints: [
        { y: 1.5, label: "Base", color: "#fdd" },
        { y: -0.2 * resistencia, label: "Calidad de Materiales", color: "#e0ffff" },
        { y: 0.4 * altura, label: "Altura del Edificio", color: "#fff0e0" },
        { y: 0.2 * edad, label: "Edad del Edificio", color: "#e0ffff" },
        { y: 0.5 * faltaMantenimiento, label: "Falta de Mantenimiento", color: "#ffe0e0" },
      ]
    }]
  });
  chart.render();
}