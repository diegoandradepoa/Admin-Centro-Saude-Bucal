import React from 'react';
import { Link } from 'react-router-dom';

import { ContainerPage, TitlePage } from './styled';

function Agenda(){
    return(
        <ContainerPage>
        <TitlePage>
            <h1>Agenda</h1>
            <Link to="/agenda-cadastrar">Cadastre uma nova consulta</Link>
        </TitlePage>
        </ContainerPage>
    )
};

export default Agenda;

