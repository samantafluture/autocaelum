import React from 'react';
import { Helmet } from 'react-helmet-async';
import MasterLayoyt from '../../components/MasterLayout';

export default function SobrePage() {
    return (
        <>
            <Helmet>
                    <title>AutoCaelum | Sobre</title>
                </Helmet>
            <MasterLayoyt>
                <p>Essa é a página sobre a empresa</p>
            </MasterLayoyt>
        </>
    )
}
