import React from 'react';
import { Helmet } from 'react-helmet-async';
import MasterLayoyt from '../../components/MasterLayout';

export default function ContatoPage() {
    return (
        <>
            <Helmet>
                    <title>AutoCaelum | Contato</title>
                </Helmet>
            <MasterLayoyt>
                <p>Essa é a página de contato</p>
            </MasterLayoyt>
        </>
    )
}
