//pegar estado atual (initialState) e pra cada ação eu vou evoluir o estado alterando algum atributo
export function numberReducer(state, action) {
  switch (action.type) {
    case "number_add2":
      return { ...state, number: state.number + 2 };
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