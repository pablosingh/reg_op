import React from "react";
import { useState } from "react";
import styled from 'styled-components';

export default function Count (){
    const [ contador, setContador ] = useState(0);
    return(
        <div>
            Contador : {contador}
            {/* <button onClick={()=> setContador(contador+1)} >Contar</button> */}
            <Btn onClick={()=> setContador(contador+1)}>Contar</Btn>
            <button onClick={()=> setContador(0)}>resetear</button>
        </div>
    );
}

const Btn = styled.button`
    background-color: rgba(8,108,9,1);
    color: white;
    border-radius: 1em;
    padding: 0.2em 1em;
    margin: 1em;
    transition: all .4s ease;
    &:hover{
        background-color: rgba(8,108,9,0.5);
        color: black;
    }
`;