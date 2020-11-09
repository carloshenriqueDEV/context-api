// importação dos hooks useState (fornece a capacidade de uma function possuir estado)
// e creatContext (cria um contexto que poderá ser chamado em outros componentes)
import React, { useState, createContext } from 'react'

export const ContextCounter = createContext();


export function CounterProvider(props) {
    //criando e setando o estado inicial do contador.
    const [counter, setCounter] = useState(0)

    return (
        // retornando o componente que servirá de contexto para os componentes pai.
        // Passando o estado para os filhos pelo atributo value.
        <ContextCounter.Provider value={[counter, setCounter]}>
            {props.children}
        </ContextCounter.Provider>
    )
}


