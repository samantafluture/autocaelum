import React from 'react';
import { Helmet } from 'react-helmet-async';
import MasterLayoyt from '../../components/MasterLayout';

export default function VeiculosPage() {
    return (
        <>
            <Helmet>
                    <title>AutoCaelum | Veículos</title>
                </Helmet>
            <MasterLayoyt>
                <p>Essa é a página de veículos</p>
            </MasterLayoyt>
        </>
    )
}
