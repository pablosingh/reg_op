import { useSelector } from "react-redux";
import styled from "styled-components";
import CardTicker from "./CardTicker";

export default function Tenencia() {
    const state = useSelector( state => state?.operationsReducer.operations );
    return (
        <Container>
            {state && state.map( t => <CardTicker ticker={t} /> )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;