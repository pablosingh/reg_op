import styled from 'styled-components';
import AddOp from './AddOp';
import Tenencia from './Tenencia';

export default function Body () {
    return (
        <Container>
            <AddOp/>
            <Tenencia/>
        </Container>
    );
};

const Container = styled.div`
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    background-color: #e5e5e5;
    justify-content: center;
    padding: 2em 0em;
`;