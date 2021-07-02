import React, { useEffect, useState } from "react";
import VeiculoItem from "../VeiculoItem";
import "../../assets/css/veiculos.css";
import VeiculoService from "../../services/VeiculoService";

export default function VeiculosList({ quantidade, randomico }) {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    VeiculoService.getVeiculos(quantidade, randomico).then((listaVeiculos) =>
      setVeiculos(listaVeiculos)
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className="flex">
      {veiculos.map((veiculo) => {
        return (
          <VeiculoItem
            key={veiculo.id}
            id={veiculo.id}
            modelo={veiculo.modelo}
            foto={veiculo.foto}
            preco={veiculo.preco}
          />
        );
      })}
    </ul>
  );
}
