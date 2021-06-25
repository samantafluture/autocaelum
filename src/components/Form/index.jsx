import React from "react";
import { useRef } from 'react';

export default function Form( ) {

    const inputNome = useRef();
    const inputEmail = useRef();
    const inputTelefone = useRef();
    const inputAssunto = useRef();
    const inputMensagem = useRef();

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let nome = inputNome.current.value; 
        let email = inputEmail.current.value;
        let telefone = inputEmail.current.value;
        let assunto = inputEmail.current.value;
        let mensagem = inputEmail.current.value;

        if (!nome || !email || !telefone || !assunto || !mensagem) {
            alert('Por favor, preencha todos os campos!');
        } 
        else {
            alert('Mensagem enviada com sucesso!');
        }
    }

    return (
        <form onSubmit={handleLoginSubmit}>
        <div className="campo">
            <input ref={inputNome} type="text" placeholder="* Seu nome:" />
        </div>
        <div className="campo">
            <input ref={inputEmail} type="text" placeholder="* Seu e-mail:" />
        </div>
        <div className="campo">
            <input ref={inputTelefone} type="text" placeholder="Seu telefone:" />
        </div>
        <div className="campo">
            <input ref={inputAssunto} type="text" placeholder="* Assunto da mensagem:" />
        </div>
        <div className="campo">
            <textarea ref={inputMensagem} placeholder="* Digite sua mensagem aqui..."></textarea>
        </div>
        <div className="campo">
            <button className="btn lnk-destaque">Enviar</button>
        </div>
        </form>
    );
}
