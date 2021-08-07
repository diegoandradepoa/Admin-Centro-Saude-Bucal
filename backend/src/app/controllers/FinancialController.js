import * as Yup from 'yup';
import Financial from '../models/Financial';

class FinancialController {
    // GET
    async index(req, res){
        const { page = 1 } = req.query;
        const { limit = 40 } = req.query;
            await Financial.paginate({}, {select: '_id name budgets debit credit observation', page, limit}).then((finacials) => {
            return res.json({
              error: false,
              finacials
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
        Financial.findOne({_id: req.params.id}, '_id name budgets debit credit observation').then((finacial)=> {
           return res.json({
               error: false,
               finacial
           });
        }).catch((err)=> {
            return res.status(400).json({
                error: true,
                message: "Erro: Não foi possível executar a solicitação!"
                });
            });
        };

    //POST
    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string()
                .required(),
            budgets: Yup.string()
                .required(),
            debit: Yup.string()
                .required(),
            credit: Yup.string()
                .required(),
            observation:Yup.string()
                .required()
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({
                error: true,
                code: 103,
                message: "Error: Dados inválidos!"
            });
        } 
    
        const financial = Financial.create(req.body, (err) => {
            if (err) return res.status(400).json({
                error: true,
                code: 101,
                message: "Error: Os Dados não foram cadastrados!"
            });

            return res.status(200).json({
                error: false,
                message: "Os dados foram cadastrados com sucesso!",
                dados: financial
            });
        });       
    };
    // PUT
    async update(req, res) {
        const schema = Yup.object().shape({
            _id: Yup.string().required(),
            name: Yup.string().required(),
            budgets: Yup.string().required(),
            debit: Yup.string().required(),
            credit: Yup.string().required(),
            observation: Yup.string().required()
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({
                erro: 108,
                message: "Erro: Dados do formulário inválido"
            });
        };

        let dados = req.body

        await Financial.updateOne({_id: dados._id}, dados, (err) => {
            if(err) return res.status(400).json({
                error: true,
                code: 111,
                message: "Erro: Dados Financeiros não foram editados com sucesso!"
            });
            return res.json({
                error: false,
                message: "Dados financeiros editados com sucesso!"
            });
        });
    };
    // DELETE
    async delete(req, res) {
        await Financial.deleteOne({_id: req.params.id}, (err) => {
            if(err) return res.status(400).json({
                error: true,
                code: 122,
                message: "Error: Dados financeiros não foram apagados com sucesso!"
            });
        });
        
        return res.json({
            error: false,
            message: "Dados financeiros do usuário apagado com sucesso!"
        });
    };
};

export default new FinancialController();
