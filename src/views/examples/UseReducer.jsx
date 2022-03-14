import React, { useReducer } from "react";
import SectionTitle from "../../components/layout/SectionTitle";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  //foco
  number: 0,
};

//pegar estado atual (initialState) e pra cada ação eu vou evoluir o estado alterando algum atributo
function reducer(state, action) {
  switch (action.type) {
    case "number_add2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { payload: action.payload } };
    case "number_multiply_by_7":
      return { ...state, number: state.number * 7 };
    case "number_div_by_25":
      return { ...state, number: state.number / 25 };
    case "number_add_n":
        return { ...state, number: state.number + +action.payload };
    case "number_parse_int":
    return { ...state, number: parseInt(state.number) };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #1 e Desafios" />
      <div className="center">
        {state.user && state.user.payload ? (
          <span className="text">{state.user.payload}</span>
        ) : (
          <span className="text">Sem usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Sophia" })}
          >
            Logar
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_add2" })}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_multiply_by_7" })}
          >
             *7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_div_by_25" })}
          >
             /25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_parse_int" })}
          >
             Int
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_add_n", payload: "-9" })}
          >
             -9
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "number_add_n", payload: 21 })}
          >
             21
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
