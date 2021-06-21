import React from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from '../updateActions';

import logoGit from "../../img/gitLogo.png"
import "./home.css"
import "../../App.css"

const Home = props =>{

  document.title = "Busca de usuários GitHub";

  const { register, handleSubmit } = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
    props.history.push("./detailuser");
  };


  return(
      
    <div className="container">
      

      <div className="container_home">

        <h1>Busque um usuário do Git</h1>

        <form onSubmit={handleSubmit(onSubmit)}>

          <input  {...register("nomeUsuario")}
            className="input_busca"
            placeholder="Digite o nome de usuário..."
            required
            />
  
            <button type="submit" className="botao_buscar_usuario">Buscar</button>

        </form>

        <img src={logoGit} alt="Imagem GitHub" />

      </div>

      
    </div>

  )

}
export default withRouter(Home);