import React, { useState } from "react";
import changeTitle from "../../functions/useDocumentTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import PageTitle from "../../components/layout/PageTitle";

const UseState = (props) => {
  const [countCode, setCountCode] = useState(`const [count, setCount] = useState(0);`)
  const [nameCode, setNameCode] = useState(`const [name, setName] = useState("");`)
  
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  changeTitle("UseState Example 👻");

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectionTitle title="Exercício #1" />
      <div className="center">
        <span className="text hvr-grow-rotate">{count}</span>
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
      <pre style={{display:'flex', flexDirection: 'column', fontSize: '3rem'}}>
        <code className="hvr-skew-forward">{countCode}</code>
      </pre>

      <SectionTitle title="Exercício #2" />
      
      <input
        type="text"
        className="input"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default UseState;
