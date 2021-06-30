import React from "react";
import { useRef } from 'react';
import useValidations from "../../hooks/useValidations";
import useFormValidator from "../../hooks/useFormValidator";

export default function Form( ) {

    const inputNome = useRef();
    const inputEmail = useRef();
    const inputTelefone = useRef();
    const inputAssunto = useRef();
    const inputMensagem = useRef();

    const { isEmpty, isEmail, isTelefoneOuCelular } = useValidations();
    const { erros, isFormValid, validate } = useFormValidator({
        nome: isEmpty("Nome é obrigatório!"),
        email: isEmail("Email inválido!"),
        telefone: isTelefoneOuCelular("Telefone inválido", false),
        assunto: isEmpty("Assunto é obrigatório!"),
        mensagem: isEmpty("Mensagem é obrigatório!")
  });

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
            <input 
                ref={inputNome} 
                onBlur={validate}
                type="text" 
                placeholder="* Seu nome:" 
                name="nome"
            />
            {erros.nome && (
                  <span className="fale-conosco erro">{erros.nome}</span>
            )}
        </div>
        <div className="campo">
            <input 
                ref={inputEmail} 
                onBlur={validate}
                type="text" 
                placeholder="* Seu e-mail:" 
                name="email"
            />
            {erros.email && (
                  <span className="fale-conosco erro">{erros.email}</span>
            )}
        </div>
        <div className="campo">
            <input 
                ref={inputTelefone} 
                onBlur={validate}
                type="text" 
                placeholder="Seu telefone:" 
                name="telefone"
            />
            {erros.telefone && (
                  <span className="fale-conosco erro">{erros.telefone}</span>
            )}
        </div>
        <div className="campo">
            <input 
                ref={inputAssunto} 
                onBlur={validate}
                type="text" 
                placeholder="* Assunto da mensagem:" 
                name="assunto"
            />
            {erros.assunto && (
                  <span className="fale-conosco erro">{erros.assunto}</span>
            )}
        </div>
        <div className="campo">
            <textarea 
                ref={inputMensagem} 
                onBlur={validate}
                placeholder="* Digite sua mensagem aqui..."
                name="mensagem"
            >    
            </textarea>
            {erros.mensagem && (
                  <span className="fale-conosco erro">{erros.mensagem}</span>
            )}
        </div>
        <div className="campo">
            <button 
                className="btn lnk-destaque"
                disabled={!isFormValid}
                type="submit"
            >
                Enviar
            </button>
        </div>
        </form>
    );
}
