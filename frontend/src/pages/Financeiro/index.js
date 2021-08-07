import React from 'react';
import { Link } from 'react-router-dom'


import { ContainerPage, TitlePage } from './styled';

function Financeiro(){
    return(
        <ContainerPage>
        <TitlePage>
            <h1>Financeiro</h1>
            <Link to="/cadastrar-valor">Cadastre um novo valor</Link>
        </TitlePage>
        </ContainerPage>
    )
};

export default Financeiro;

