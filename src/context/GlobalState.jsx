import { createContext, useContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [],
};

export const Context = createContext();

// Hook personalizado para usar el contexto global
export const useGlobalState = () => {
  const context = useContext(Context);
  return context;
};

// Proveedor global para envolver la aplicación
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : initialState;
  });

  // para guardar en el local storage y estar pendiente de los cambios en el state
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
};
