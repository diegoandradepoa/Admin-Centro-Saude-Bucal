import * as Yup from 'yup';
import Schedule from '../models/Schedule'

class ScheduleController {
    // GET
    async index(req, res){
        const { page = 1 } = req.query;
        const { limit = 40 } = req.query;
            await Schedule.paginate({}, {select: '_id name date hour procedure', page, limit}).then((schedules) => {
            return res.json({
              error: false,
              schedules
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
        Schedule.findOne({_id: req.params.id}, '_id name date hour procedure').then((schedule)=> {
           return res.json({
               error: false,
               schedule
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
                name: Yup.string()
                    .required(),
                date: Yup.string()
                    .required(),
                hour: Yup.string()
                    .required(),
                procedure: Yup.string()
                    .required()
            });

            if(!(await schema.isValid(req.body))){
                    return res.status(400).json({
                        error: true,
                        code: 103,
                        message: "Error: Dados inválidos!"
                    });
                } 
            
            const schedule = Schedule.create(req.body, (err) => {
                if (err) return res.status(400).json({
                    error: true,
                    code: 101,
                    message: "Error: Os Dados não foram cadastrados!"
                });
    
                return res.status(200).json({
                    error: false,
                    message: "Os dados foram cadastrados com sucesso!",
                    dados: schedule
                })
            });       
    };
    // PUT
    async update(req, res) {
        const schema = Yup.object().shape({
            _id: Yup.string().required(),
            name: Yup.string().required(),
            date: Yup.string().required(),
            hour: Yup.string().required(),
            procedure: Yup.string().required()
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({
                erro: 108,
                message: "Erro: Dados do formulário inválido"
            });
        };

        let dados = req.body

        await Schedule.updateOne({_id: dados._id}, dados, (err) => {
            if(err) return res.status(400).json({
                error: true,
                code: 111,
                message: "Erro: Agenda não foi editada com sucesso!"
            });
            return res.json({
                error: false,
                message: "Agenda editada com sucesso!"
            });
        });
    };
    // DELETE
    async delete(req, res) {
        await Schedule.deleteOne({_id: req.params.id}, (err) => {
            if(err) return res.status(400).json({
                error: true,
                code: 122,
                message: "Error: Agenda do usuário não foi apagado com sucesso!"
            });
        });
        
        return res.json({
            error: false,
            message: "Agenda do usuário apagado com sucesso!"
        });
    };
};

export default new ScheduleController();
