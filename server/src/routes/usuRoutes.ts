import express, { Router } from 'express';

import usuariosController from '../controllers/usuariosController';

class Routes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
      this.router.get('/as',usuariosController.listAs);
        this.router.get('/', usuariosController.list);
        
        this.router.get('/:id', usuariosController.getOne);
        this.router.post('/', usuariosController.create);
        this.router.put('/:id', usuariosController.update);
        this.router.delete('/:id', usuariosController.delete);
    }

}

export default new Routes().router;

