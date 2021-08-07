import { Router } from 'express';
import multer from 'multer';
import multerUpImgUsers from './app/middlewares/uploadImgUser';


//CONTROLLERS
import UserController from './app/controllers/UserController';
import LoginController from './app/controllers/LoginController';
import RegisterController from './app/controllers/RegisterController';
import ScheduleController from './app/controllers/ScheduleController';
import FinancialController from './app/controllers/FinancialController';
import PerfilController from './app/controllers/PerfilController';
import PerfilImgController from './app/controllers/PerfilImgController';


import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const uploadImgUser = multer(multerUpImgUsers)

//ROTAS USER
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);
routes.delete('/users/:id',authMiddleware, UserController.delete);

// ROTAS PERFIL
routes.get('/perfil', authMiddleware, PerfilController.show);
routes.put('/perfil', authMiddleware, PerfilController.update);
routes.put('/perfil-img', authMiddleware, uploadImgUser.single('file'), PerfilImgController.update);

// ROTAS LOGIN
routes.post('/login', LoginController.store);

//ROTAS CLIENTE
routes.get('/clientes', RegisterController.index);
routes.get('/cliente/listar/:id', RegisterController.show);
routes.post('/cliente/cadastrar', RegisterController.store);
routes.put('/cliente/listar', RegisterController.update);
routes.delete('/cliente/:id', RegisterController.delete);


//ROTAS AGENDA
routes.get('/agenda/clientes', ScheduleController.index);
routes.get('/agenda/cliente/:id', ScheduleController.show);
routes.post('/agenda/cliente/cadastrar', ScheduleController.store);
routes.put('/agenda/cliente/atualizar', ScheduleController.update);
routes.delete('/agenda/cliente/apagar/:id', ScheduleController.delete);


//ROTAS FINANCEIRO
routes.get('/financeiro/clientes', FinancialController.index);
routes.get('/financeiro/clientes/:id', FinancialController.show);
routes.post('/financeiro/cadastrar', FinancialController.store);
routes.put('/financeiro/cliente/atualizar', FinancialController.update);
routes.delete('/financeiro/cliente/apagar/:id', FinancialController.delete);

export default routes;
