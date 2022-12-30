import { createContext } from "react";


const TodosContext = createContext();


export const TodosContextProvider = ({ children }) => {

    return (
        <TodosContext.Provider value={{}}>
            { children }
        </TodosContext.Provider>
    )
}


export default TodosContext;