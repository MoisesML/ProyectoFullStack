import React from "react";
import { Bar } from "react-chartjs-2";

export default function Grafica({ productos }) {
  let nombresProductos = productos.map((prod) => prod.nombre_prod);

  let stockProductos = productos.map((prod) => prod.stock_prod);

  let options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const data = {
    labels: [...nombresProductos],
    datasets: [
      {
        label: "Stock",
        data: [...stockProductos],
      },
    ],
  };

  return (
    <div>
      <h2>Estadísticas</h2>
      <Bar data={data} options={options} />
    </div>
  );
}
