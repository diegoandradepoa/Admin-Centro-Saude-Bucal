import React  from 'react'

import {ContainerPage, TitlePage} from './styled'

function CadastrarValor() {
    return (
        <ContainerPage>
        <TitlePage>
            <h1>Cadastre um recebimento de consulta ou procedimento</h1>
        </TitlePage>
            <div>
                <ul>
                    <li>
                     Nome
                    </li>
                    <li>
                    Orçamentos
                    </li>
                    <li>
                    Débito
                    </li>
                    <li>
                    Crédito
                    </li>
                    <li>
                    Observação
                    </li>
                </ul>
            </div>
    </ContainerPage>
    )
}

export default CadastrarValor
