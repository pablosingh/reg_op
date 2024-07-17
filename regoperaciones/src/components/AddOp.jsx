import React, { useState } from "react";
import styled from "styled-components";

export default function AddOp () {
    const [ data, setData ] = useState({});
    const changing = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
        // console.log(data);
    };
    const sending = e => {
        console.log(data);
    };
    return(
        <div>
            <label>Fecha</label>
            <input type="text" name="date" className="" onChange={changing}/>
            <br/>
            <label>Ticker</label>
            <input type="text" name="ticker" className="" onChange={changing}/>
            <br/>
            <label>Cantidad</label>
            <input type="text" name="amount" className="" onChange={changing}/>
            <br/>
            <label>Precio</label>
            <input type="text" name="price" className="" onChange={changing}/>
            <br/>
            <Btn onClick={sending}>Agregar</Btn>
        </div>
    );
};

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