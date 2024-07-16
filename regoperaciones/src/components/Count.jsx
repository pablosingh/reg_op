import { useState } from "react";

export default function Count (){
    const [ contador, setContador ] = useState(0);
    return(
        <div>
            Contador : {contador}
            <button onClick={()=> setContador(contador+1)} >Contar</button>
        </div>
    );
}