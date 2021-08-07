import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerPage, TitlePage } from './styled';

function Cadastros(){
    return(
        <ContainerPage>
        <TitlePage>
            <h1>Cadastros</h1>
            <Link to="/cadastrar">Cadastre um novo paciente</Link>
        </TitlePage>
        </ContainerPage>
    )
};

export default Cadastros;

