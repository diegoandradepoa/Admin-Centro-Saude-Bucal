import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from '../pages/Home'
import Agenda from '../pages/Agenda'
import Cadastros from '../pages/Cadastros'
import Financeiro from '../pages/Financeiro';
import Cadastrar from '../pages/Cadastros/Cadastrar';
import AgendaCadastrar from '../pages/Agenda/Agendar';
import CadastrarValor from '../pages/Financeiro/Valores';

function Routes(){

    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            {/* Agenda */}
            <Route exact path="/agenda">
                <Agenda />
            </Route>
            <Route exact path="/agenda-cadastrar">
                <AgendaCadastrar />
            </Route>
            {/* Cadastro */}
            <Route exact path="/cadastro">
                <Cadastros />
            </Route>
            <Route exact path="/cadastrar">
                <Cadastrar />
            </Route>
             {/* Financeiro */}
            <Route exact path="/financeiro">
                <Financeiro />
            </Route>
            <Route exact path="/cadastrar-valor">
                <CadastrarValor />
            </Route>
        </Switch>
    );
}

export default Routes;
