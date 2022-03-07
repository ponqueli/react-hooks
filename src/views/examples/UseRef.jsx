import React, { useState, useRef, useEffect } from "react";
import changeTitle from "../../functions/useDocumentTitle";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  changeTitle("UseRef Example💎");

  const [valor, setValor] = useState("");
  const [valor2, setValor2] = useState("");
  const count = useRef(0);
  const myInput1 = useRef(null);
  const myInput2 = useRef(null);

  const merge = function (s1, s2) {
    return [...s1].map((e, i) =>`${e}${s2[i] || ""}`).join("");
  };

  useEffect(
    function () {
      count.current++;
      myInput2.current.focus();
    },
    [valor]
  );

  useEffect(
    function () {
      count.current++;
      myInput1.current.focus();
    },
    [valor2]
  );

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current! Não dispara uma nova renderização no componente"
      />

      <SectionTitle title="Exercício #1" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(valor, valor2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          ref={myInput1}
          type="text"
          className="input"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #2" />
      <div className="center">
        <input
          ref={myInput2}
          type="text"
          className="input"
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;
