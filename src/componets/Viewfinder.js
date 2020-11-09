import React,{useContext} from 'react'
import {ContextCounter} from '../contexts/ContextCounter'

export default function Viewfinder() {
    const [counter,setCounter] = useContext(ContextCounter)

    return (
        <div className='viewfinder'>
            <h5>Compenente que mostra o estado</h5>
            {counter}
        </div>
    )
}
