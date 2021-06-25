import React from "react";
import VeiculoItem from "../VeiculoItem";
import "../../assets/css/veiculos.css";

export default function VeiculosList({ quantidade }) {
  const listaVeiculos = [];
  for (let i = 1; i <= quantidade; i++) {
    listaVeiculos.push(<VeiculoItem key={i} />);
  }

  return <ul className="flex">{listaVeiculos}</ul>;
}
