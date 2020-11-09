//importação do hook useContext(permite uso de um contexto)
import React, { useContext } from 'react'
//Importação do ContextCounter para ser utilizado pelo componente
import { ContextCounter } from '../contexts/ContextCounter'

export default function ButtonsOfCounter(props) {
    //Recebendo o contexto
    const [counter, setCounter] = useContext(ContextCounter)

    return (
        //Retornando o componente que manipula o estado.
        <div >
            {/* Botões e funções que manipulam o contexto*/}
            <button onClick={() => { setCounter(anterior => anterior - 1) }}>-</button>
            <button onClick={() => { setCounter(anterior => anterior + 1) }}>+</button>
        </div>
    )
}
