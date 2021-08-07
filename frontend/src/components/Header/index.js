import React from 'react';
import { Link } from 'react-router-dom';
import dente_logo3 from '../../assets/dente_logo3.png'

import { AreaHeader } from './styled'

function Header () {  
    return(
      <AreaHeader>
         <div className="container">
            <div className="logo">
                <img src={dente_logo3} alt="logomarca" />
            </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/agenda">Agenda</Link></li>
                        <li><Link to="/cadastro">Cadastros</Link></li>
                        <li><Link to="/financeiro">Financeiro</Link></li>
                    </ul>
                </nav>
         </div>
      </AreaHeader>
    )
}

export default Header;
