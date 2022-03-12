import React, { useState, useCallback } from "react";
import UseCallbackButtons from "./UseCallbackButtons";
import PageTitle from "../../components/layout/PageTitle";

const UseCallback = (props) => {
  const [count, setCount] = useState(0);
  
  const inc = useCallback(function(delta){
    setCount(curr => curr + delta)
  },[setCount]);

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma FUNÇÃO memoizada! Renderiza uma única vez."
      />

      <div className="center">
        <span className="text">{count}</span>
        <UseCallbackButtons inc={inc} />
      </div>
    </div>
  );
};

export default UseCallback;
