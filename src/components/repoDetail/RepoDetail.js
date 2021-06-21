import React, {useState, useEffect} from 'react';

import "./repoDetails.css"
import "../../App.css"
import logoGit from "../../img/gitLogo.png"

export default function RepoDetail(props){

  const [dataRepo, setDataRepo] = useState([])

  const GitRepoUrl = localStorage.getItem("GitUrlRepo")

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(GitRepoUrl)
      const data = await response.json();


      setDataRepo(data);
    }
    fetchData()

  }, [GitRepoUrl]); 

  return(

        <div className="container">

          <button className="btn-default" onClick={() => window.history.back()} > Voltar</button>
          <h1>Detalhes do Repositório {dataRepo.name}</h1>

        <div className="container_info_repo">
    
          <ul className="lista_info_repo">
  
            <li>Descricao do repositório: {dataRepo.description}</li>
            <li>Estrelas do repositório:  {dataRepo.stargazers_count}</li>
            <li>Linguagem mais usada no repositório: {dataRepo.language}</li>

            <button className="btn-default" onClick={() => window.open(dataRepo.html_url)} > Ir para o repositório no Git Hub</button>

          </ul>

          <img src={logoGit} alt="Imagem GitHub" />

        </div>

        
      </div>

  )
}