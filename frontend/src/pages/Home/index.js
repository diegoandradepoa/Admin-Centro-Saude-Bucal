import React from 'react';

import { ContainerPage, SectionPage, TitlePage } from './styled';

function Home(){
    return(
      <ContainerPage>
      <TitlePage>
          <div>
            <h1>Seja bem-vindo!</h1>
          </div>
          </TitlePage>
      <SectionPage>
          <div>
              <p>No momento temos 3 consultas para hoje 13/10</p>
              <p>Há 2000 cadastros na base</p>
          </div>
          </SectionPage>
      </ContainerPage>
    )
};

export default Home;
