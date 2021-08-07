import React from 'react';

import {ContainerPage,TitlePage, ContainerForm, Form, Input, TextArea, Button } from './styled'

function AgendaCadastrar (){
    return (
        <ContainerPage>
        <TitlePage>
            <h1>Cadastre o dia e horário da consulta</h1>
        </TitlePage>
       <ContainerForm>
                <Form action="#" method="post" tabindex="1">
                    <Input type="text" name="name" placeholder="Nome" required />
                    <Input type="text" name="date" placeholder="Data" required />
                    <Input type="text" name="hour" placeholder="Hora" required />
                    <TextArea name="procedure" placeholder="Descreva o Procedimento..." required></TextArea>
                    <Button type="submit" className="form-contact-button">Cadastrar</Button>
                </Form>
        </ContainerForm>
    </ContainerPage>
    )
}

export default AgendaCadastrar;
