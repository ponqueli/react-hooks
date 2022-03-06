import React, { useState } from "react";
import SectionTitle from "../../components/layout/SectionTitle";
import PageTitle from "../../components/layout/PageTitle";

const UseState = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercício #1" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button
            className="btn hvr-wobble-vertical"
            onClick={() => setCount(count + 1)}
          >
            +1
          </button>
          <button
            className="btn hvr-wobble-vertical"
            onClick={() => setCount(count - 1)}
          >
            -1
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseState;
