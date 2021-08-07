import React from 'react'

import {ContainerPage,ContainerForm, Form, Input, TitlePage, TextArea, Button} from './styled'

function Cadastrar () {
    return (
        <ContainerPage>
        <TitlePage>
            <h1>Cadastre aqui o paciente</h1>
        </TitlePage>
       <ContainerForm>
                <Form action="#" method="post" tabindex="1">
                    <Input type="text" name="name" placeholder="Nome" required />
                    <Input type="text" name="address_street" placeholder="Endereço" required />
                    <Input type="text" name="address_number" placeholder="Número da residência" required />
                    <Input type="text" name="district" placeholder="Bairro" required />
                    <Input type="text" name="city" placeholder="Cidade" required />
                    <Input type="text" name="state" placeholder="Estado" required />
                    <Input type="text" name="zipcode" placeholder="CEP" required />
                    <Input type="text" name="age" placeholder="Idade" required />
                    <Input type="text" name="email" placeholder="Email" required />
                    <Input type="text" name="phone" placeholder="Telefone" required />
                    <Input type="text" name="whatsapp" placeholder="WhatsApp" required />
                    <Input type="text" name="rg" placeholder="RG" required />
                    <Input type="text" name="cpf" placeholder="CPF" required />
                    <Input type="text" name="dependent" placeholder="Dependentes sim ou não?" required />
                    <TextArea name="exams" placeholder="Informe os exames" required></TextArea>
                    <TextArea name="observation" placeholder="Observação" required></TextArea>
                    <Button type="submit" className="form-contact-button">Cadastrar</Button>
                </Form>
        </ContainerForm>
    </ContainerPage>
    )
}

export default Cadastrar;

