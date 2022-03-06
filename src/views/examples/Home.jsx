import React from "react";
import changeTitle from "../../functions/useDocumentTitle";
import PageTitle from "../../components/layout/PageTitle";

const Home = (props) => {
  changeTitle("Módulo Hooks 👾");
  
  return (
    <div className="Home">
      <PageTitle
        title="Módulo Hooks"
        subtitle="Hooks são uma nova adição ao React 16.8."
      />
    </div>
  );
};

export default Home;
