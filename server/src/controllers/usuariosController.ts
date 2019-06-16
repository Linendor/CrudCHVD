import { Request, Response } from 'express';


import pool from '../database';

class UsuController {

    public async listAs(req: Request, res: Response): Promise<void> {
        const usuarios = await pool.query('SELECT * FROM asistencia');
        res.json(usuarios);
    }



    public async listaAsis(req: Request, res: Response):Promise<void>{
        const asis = await pool.query('insert into asistencia set ?', [req.body]);
        res.json({message: 'insertado en asistencia prro'});
    }

    public async list(req: Request, res: Response): Promise<void> {
        const usuarios = await pool.query('SELECT * FROM usuarios');
        res.json(usuarios);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const usuarios = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        console.log(usuarios.length);
        if (usuarios.length > 0) {
            return res.json(usuarios[0]);
        }
        res.status(404).json({ text: "El usuario no existes" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO usuarios set ?', [req.body]);
        res.json({ message: 'Usuario guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const usuarios = req.body;
        await pool.query('UPDATE usuarios set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Usuario actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
        res.json({ message: "El usuario fue eliminado" });
    }
}

const usuController = new UsuController;
export default usuController;