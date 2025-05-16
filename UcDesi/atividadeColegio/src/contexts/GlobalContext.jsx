import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [alunos, setAlunos] = useState([])
    return (
        <GlobalContext.Provider value={{alunos, setAlunos}}>
            {children}
        </GlobalContext.Provider>
    )
}
