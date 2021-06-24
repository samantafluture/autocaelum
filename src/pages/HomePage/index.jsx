import React from 'react'
import { Helmet } from 'react-helmet-async';
import MasterLayout from '../../components/MasterLayout';

export default function HomePage() {
    return (
        <>
            <Helmet>
                <title>AutoCaelum | Home</title>
            </Helmet>
            <MasterLayout>
                <p>Conteúdo da Home do meu site</p>
                {/* este p é o children, então rendezira o que está no meio */}
            </MasterLayout>
        </>
    )
}
