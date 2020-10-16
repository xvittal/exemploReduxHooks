import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; //=> necessário para funcionar o redux

function addTesteAction(title){ //=> função teste para demostrar o useDispatch
    return {type:'ADD_TESTE', title}
}

export default function TestesList(){
    // const quantidade  = 2; //=> variavel apenas para o segundo teste!

    const testes = useSelector(state => state.data) //=> exemplo sem o segundo parametro.
    
    // #SEGUNDO TESTE
    // const testes = useSelector(
    //     state => state.data.slice(0, quantidade), //=> passando a primeiro parametro...
    //     [quantidade]) //=> ...segundo parametro serve igual ao useState, sempre que essa variavel for atualizada ela será executada

    const dispacth = useDispatch();

    function  addTeste() {
        dispacth(addTesteAction('teste 55. 6')) //=> passando uma função no caso!
    }

    // function  addTeste() {
    //     dispacth({type:'ADD_TESTE', title: 'teste 55'})
    // } versão que recebe diretamente o valor desejado!
    
    return(
        <>
        <ul>
            { testes.map(teste => <li key={teste}>{teste}</li>)}
        </ul>
        <button onClick={addTeste}>teste com botão que dispara uma ação!</button>
        </>
    )
}