import React from "react";
import { Helmet } from "react-helmet-async";
import MasterLayoyt from "../../components/MasterLayout";
import VeiculosList from "../../components/VeiculosList";

export default function VeiculosPage() {
  return (
    <>
      <Helmet>
        <title>AutoCaelum | Veículos</title>
      </Helmet>
      <MasterLayoyt>
        <main className="container lista-veiculos">
          <h1 className="cabecalho-pagina">Veículos</h1>
            <VeiculosList quantidade={8} />
        </main>
      </MasterLayoyt>
    </>
  );
}
