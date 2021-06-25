import React from "react";
import { useRef } from 'react';

export default function Form( ) {

    const inputNome = useRef();
    const inputEmail = useRef();
    const inputTelefone = useRef();
    const inputAssunto = useRef();
    const inputMensagem = useRef();

    const handleContatoSubmit = (e) => {
        e.preventDefault();
        let nome = inputNome.current.value.trim(); 
        let email = inputNome.current.value.trim(); 
        let telefone = inputNome.current.value.trim(); 
        let assunto = inputNome.current.value.trim(); 
        let mensagem = inputNome.current.value.trim(); 

        if (!nome || !email || !assunto || !mensagem) {
            alert('Por favor, preencha os campos obrigatório!');
        } 
        else {
            alert('Mensagem enviada com sucesso!');
        }
    }

    return (
        <form onSubmit={handleContatoSubmit}>
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
