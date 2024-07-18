import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { showState, addOperation } from '../redux/actions'

export default function AddOp () {
    const [ data, setData ] = useState({});
    const dispatch = useDispatch();
    const state = useSelector( state => state );
    const changing = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    const sending = e => {
        // console.log(data);
        dispatch(addOperation(data));
    };
    const showing = e => {
        console.log(state);
    }
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
            <Btn onClick={showing}>Estado</Btn>
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