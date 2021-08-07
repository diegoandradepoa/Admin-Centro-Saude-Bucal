import * as Yup from 'yup';
import Register from '../models/Register';
import mongoose from 'mongoose';

class RegisterController {
    // GET
    async index(req, res){
        const { page = 1 } = req.query;
        const { limit = 40 } = req.query;
            await Register.paginate({}, {select: '_id name address_street address_number district city state zipcode age email phone whatsapp rg cpf dependent exams observation id_schedule id_financial createdAt updatedAt', page, limit}).then((registers) => {
            return res.json({
              error: false,
              registers: registers
            });
        }).catch((err) => {
            return res.status(400).json({
                error: true,
                code: 107,
                message: "Erro: Não foi possível executar a solicitação!"
            });
        });
    };

    async show(req, res){
        Register.findOne({_id: req.params.id}, '_id name address_street address_number district city state zipcode age email phone whatsapp rg cpf dependent exams observation id_schedule id_financial createdAt updatedAt').then((register)=> {
           return res.json({
               error: false,
               register
           });
        }).catch((err)=> {
            return res.status(400).json({
                error: true,
                message: "Erro: Não foi possível executar a solicitação!"
                });
            });
        };

        // POST
        async store(req, res) { 

            const schema = Yup.object().shape({
                name: Yup.string().required(),
                address_street: Yup.string().required(),
                address_number: Yup.string().required(),
                district: Yup.string().required(),
                city: Yup.string().required(),
                state: Yup.string().required(),
                zipcode: Yup.string().required(),
                age: Yup.string().required(),
                email: Yup.string().email().required(),
                phone: Yup.string().required(),
                whatsapp: Yup.string().required(),
                rg: Yup.string().required(),
                cpf: Yup.string().required().min(11).max(11),
                dependent: Yup.string().required(),
                exams: Yup.string().required(),
                observation: Yup.string().required(),
                id_schedule: Yup.string().required(),
                id_financial: Yup.string().required()
            });
    
            if(!(await schema.isValid(req.body))){
                return res.status(400).json({
                    error: true,
                    code: 103,
                    message: "Error: Dados inválidos!"
                });
            };

            const emailExiste = await Register.findOne({ email: req.body.email });
            const cpfExiste = await Register.findOne({ cpf: req.body.cpf });
                if (emailExiste || cpfExiste) {
                return res.status(400).json({
                    error: true,
                    code: 102,
                    message: "Error: Este e-mail ou cpf já está cadastrado!"
                });
            };
    
            const register = Register.create(req.body, (err) => {
                if (err) return res.status(400).json({
                    error: true,
                    code: 101,
                    message: "Error: Os Dados não foram cadastrados!"
                });
    
                return res.status(200).json({
                    error: false,
                    message: "Os dados foram cadastrados com sucesso!",
                    dados: register
                });
            });
        }    
    // PUT

    async update(req, res) {
            const schema = Yup.object().shape({
                _id: Yup.string().required(),
                name: Yup.string().required(),
                address_street: Yup.string().required(),
                address_number: Yup.string().required(),
                district: Yup.string().required(),
                city: Yup.string().required(),
                state: Yup.string().required(),
                zipcode: Yup.string().required(),
                age: Yup.string().required(),
                email: Yup.string().email(),
                phone: Yup.string().required(),
                whatsapp: Yup.string().required(),
                rg: Yup.string().required(),
                cpf: Yup.string().required().min(11).max(11),
                dependent: Yup.string().required(),
                exams: Yup.string().required(),
                observation: Yup.string().required(),
            });

            if(!(await schema.isValid(req.body))) {
                return res.status(400).json({
                    erro: 108,
                    message: "Erro: Dados do formulário inválido, verifique os campos!"
                });
            };

            let dados = req.body
            
            await Register.updateOne({_id: dados._id}, dados, (err) => {
                if(err) return res.status(400).json({
                    error: true,
                    code: 111,
                    message: "Erro: Usuário não foi editado com sucesso!"
                });

                return res.json({
                    error: false,
                    message: "Usuário editado com sucesso!"
                });
            });
    };
    // DELETE

    async delete(req, res) {
        try {
            const clientExist = await Register.findOne({ _id: req.params.id});
            if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
                return res.status(400).json({
                    error: true,
                    code: 121,
                    message: "Erro: Usuário não encontrado"
                });
                };

            if(!clientExist){
                return res.status(400).json({
                    error: true,
                    code: 121,
                    message: "Erro: Usuário não encontrado"
                })
            };

            await Register.deleteOne({_id: req.params.id}, (err) => {
                if(err) return res.status(400).json({
                    error: true,
                    code: 122,
                    message: "Error: Usuário não foi apagado com sucesso!"
                });
            });
            
            return res.json({
                error: false,
                message: "Usuário apagado com sucesso!"
            });
        } catch (err){
            return res.status(400).json({
                error: true,
                code: 107,
                message: "Erro: Não foi possível executar a solicitação. Verifique os dados informados!"
            });
        }
    };
};
export default new RegisterController();
