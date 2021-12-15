import React, { useEffect, useState } from "react";
import FormularioPesquisa from "./components/FormularioPesquisa/FormularioPesquisa";
import CriaTable from "./components/CriaTabela/CriaTabela";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [tipo, setTipo] = useState();
  const [error, setError] = useState(null);
  const [inputField,setInputField] = useState();
//refatorar
  useEffect(async () => {
    if (tipo == "usuario") {
      await fetch(`https://api.github.com/users/${inputField}/repos`)
        .then((response) => response.json())
        .then((data) => {
          if (data.message) {
            setError(data.message);
          } else {
            setRepositories(data);
            setError(null);
          }  
        });
    } else if (tipo == "linguagem") {
      await fetch(
        `https://api.github.com/search/repositories?q=language%3A${inputField}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.message) {
            setError(data.message);
          } else {
            setRepositories(data.items);
            setError(null);
          }   
        });
    } else if (tipo == "organizacao") {
      await fetch(`https://api.github.com/orgs/${inputField}/repos`)
        .then((response) => response.json())
        .then((data) => {
          if (data.message) {
            setError(data.message);
          } else {
            setRepositories(data);
            setError(null);
          }
        });
    }
  }, [inputField, tipo]);

  function exibeRepositorios(dados) {
    setTipo(dados.tipo);
    setInputField(dados.nome);
  }
  return (
    <>
      <FormularioPesquisa aoEnviar={exibeRepositorios}/>
      <CriaTable repositories={repositories} error={error} />
    </>
  );
}

export default App;
