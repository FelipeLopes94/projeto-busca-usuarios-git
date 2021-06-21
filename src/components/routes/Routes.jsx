import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { StateMachineProvider, createStore } from 'little-state-machine';

import Home from '../home/Home';
import DetailGitUser from '../detailGitUser/DetailGitUser';
import RepoDetail from '../repoDetail/RepoDetail';


createStore({
   
      nomeUsuario: "",
      urlRepo:""
    
  })

const Routes= (props)  =>
    <StateMachineProvider>

        <Switch>

            <Route exact path='/' component={Home} />
            <Route path='/detailuser' component={DetailGitUser}/>
            <Route path='/repodetail' component={RepoDetail} />
            <Redirect from='*' to='/' />

        </Switch>

    </StateMachineProvider>
    
export default Routes