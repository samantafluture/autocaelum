import React from 'react';
import { Helmet } from 'react-helmet-async';
import MasterLayoyt from '../../components/MasterLayout';
import '../../assets/css/fale-conosco.css';
import Form from '../../components/Form';

export default function ContatoPage( {props}) {


    return (
        <>
            <Helmet>
                    <title>AutoCaelum | Contato</title>
            </Helmet>
            <MasterLayoyt>

                <main class="container fale-conosco">
                    <h1 class="cabecalho-pagina">Fale conosco</h1>
                    <p>Para entrar em contato conosco, preencha o formulário abaixo:</p>

                    <div class="flex">

                        <Form />

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.448598130898!2d-46.634653385383224!3d-23.588239368469686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2ed7f3a1%3A0xab35da2f5ca62674!2sCaelum%20-%20Escola%20de%20Tecnologia!5e0!3m2!1spt-BR!2sbr!4v1624224472643!5m2!1spt-BR!2sbr" style={{ border: 0 }} allowfullscreen="" loading="lazy" title="Google Maps"
                        />
                    
                    </div>
                    
                </main>
            </MasterLayoyt>
        </>
    )
}
