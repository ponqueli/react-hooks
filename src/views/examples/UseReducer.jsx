import React, { useReducer } from "react";
import SectionTitle from "../../components/layout/SectionTitle";
import PageTitle from "../../components/layout/PageTitle";
import { initialState, reducer } from "../../store/index";
import { number_add2, login } from "../../store/actions";

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
            onClick={()=>login(dispatch,"Sophia")}
          >
            Logar
          </button>
          <button
            className="btn"
            onClick={()=>number_add2(dispatch)}
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
