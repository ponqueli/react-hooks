import React, { useEffect, useState } from "react";
import SectionTitle from "../../components/layout/SectionTitle";
import changeTitle from "../../functions/useDocumentTitle";
import PageTitle from "../../components/layout/PageTitle";

const UseEffect = (props) => {
  changeTitle("UseEffect Example👽");

  //EX 1
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);  

  function calcFatorial(num) {
    const n = parseInt(num);
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calcFatorial(n - 1) * n;
  }

  useEffect(
    function () {
      if (fatorial > 100000) {
        document.title = "Eita 🤯🤯🤯....";
      } else {
        document.title = "UseEffect Example👽";
      }
    },
    [fatorial]
  );

  //EX 2
  const [status, setStatus] = useState(true);
  function numberEhPar(num){
      const n = parseInt(num);
      return n % 2 === 0 ? true: false; 
  }

  useEffect(
    function () {
      setFatorial(calcFatorial(number));
      setStatus(numberEhPar(number));
    },
    [number]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #1" />
      <div className="center">
        <div style={{ display: "flex" }}>
          <span className="text">Fatorial: </span>
          <span className="text red hvr-skew-forward">
            {fatorial === -1 ? " não existe " : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #2" />
      <div className="center" style={{display:'flex', flexDirection:'row', whiteSpace: 'pre-wrap'}}>
        <span className="text"> Nº:</span> 
          
        <span className="text red hvr-skew-forward">
          {status? " Par " : " Ímpar "}
        </span>
      </div>
    </div>
  );
};

export default UseEffect;
