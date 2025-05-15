import { createContext, useEffect, useState } from "react";
import { buscarGeneros } from "../services/generos";

const CONTEXTO_INICIAL = {
    generos: ["Terror", "Ficção Científica"]
}

const ListasContext = createContext(CONTEXTO_INICIAL);

export const ListasProvider = props => {
    const { children } = props;
    const [ generos, setGeneros ] = useState();

    const carregarGeneros =  () => {
        const generos = buscarGeneros();
        setGeneros(generos);
    }
    
    useEffect(() => {
        carregarGeneros();
    }, []);
    
    return <ListasContext.Provider value={{generos: generos}}>
        {children}
    </ListasContext.Provider>
}

export default ListasContext;