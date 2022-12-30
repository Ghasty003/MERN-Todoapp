import { useReducer, createContext } from "react";

const TodosContext = createContext();

const todoReducer = (state, action) => {
    
}


export const TodosContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(todoReducer, {
        todos: ["Hello", "World"]
    });

    return (
        <TodosContext.Provider value={{...state, dispatch}}>
            { children }
        </TodosContext.Provider>
    )
}


export default TodosContext;