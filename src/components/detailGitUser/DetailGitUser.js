import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useStateMachine } from "little-state-machine";

import "./DetailGitUser.css"
import "../../App.css"


const DetailUser = props =>{

  const [repositories, setRepositories] = useState([])
  const [userGitData, setUserGitData] = useState([])

  const { state } = useStateMachine();

  let emailUser = ""

  if (userGitData.email != null) {  
    emailUser = userGitData.email

  }else {
    emailUser = "Email do usuário privado"
  }

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(`https://api.github.com/users/${state.nomeUsuario}/repos`)
      const data = await response.json();
      
      const responseUserGit = await fetch(`https://api.github.com/users/${state.nomeUsuario}`)
      const dataUserGit = await responseUserGit.json();

      // console.log(dataUserGit)

      setRepositories(data);
      setUserGitData(dataUserGit)
    }
    fetchData()

  }, [state]);

  //  Effect para alterar o Tittle da Pagina.

  useEffect(() => {
    const NomeUserGit = userGitData.name

    document.title = `Detalhes de ${NomeUserGit}`;
    
  }, [userGitData]);
  

  return(
    <div className="container">

      <div className="container_detail_user">

        <button className="btn-default" onClick={() => window.history.back()} > Voltar</button>

        <h1>Informações de {userGitData.name} no GitHub</h1>
        
        <div className="container_info_user">

          <img className="img_avatar" src={userGitData.avatar_url} alt="Foto usuario Git" onClick={() => window.open(userGitData.html_url)} title="Ir para perfil no GitHub" />

          <ul className="lista_info_user">

            <li>número de Repositórios: {userGitData.public_repos}</li>
            <li>número de seguidores: {userGitData.followers}</li>
            <li>número de Seguidos: {userGitData.following}</li>
            <li>Nome de usuário no Git: {userGitData.login}</li>
            <li>Email do usuário: {emailUser}</li>
            <li>Bio do usuário: {userGitData.bio}</li>

          </ul>

        </div>

        <h2>Lista de Repositórios</h2>

        <ul className="lista_repos">

          {repositories.map(repo => (

            <li className="li" key={repo.id} onClick={() => localStorage.setItem("GitUrlRepo", repo.url)}> 
              {repo.name} 
              
              <Link to="/repodetail">
                  
                  <button  className="botao_detalhes_repo">Detalhes</button>

              </Link>
              
            </li>

          ))}

        </ul>

      </div>

    </div>

  )
}
export default DetailUser