import { Request, Response } from 'express';


import pool from '../database';

class UsuController {




    public async listAs(req: Request, res: Response): Promise<void> {
        const asis = await pool.query('SELECT * FROM users');
        res.json(asis);
    }



    public async listaAsis(req: Request, res: Response):Promise<void>{
        const asis = await pool.query('insert into users set ?', [req.body]);
        res.json({message: 'insertado en asistencia prro'});
    }

    public async list(req: Request, res: Response): Promise<void> {
        const usuarios = await pool.query('SELECT * FROM personal');
        res.json(usuarios);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const usuarios = await pool.query('SELECT * FROM personal WHERE id = ?', [id]);
        console.log(usuarios.length);
        if (usuarios.length > 0) {
            return res.json(usuarios[0]);
        }
        res.status(404).json({ text: "El usuario no existes" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO personal set ?', [req.body]);
        res.json({ message: 'Usuario guardado' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const usuarios = req.body;
        await pool.query('UPDATE personal set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "Usuario actualizado" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM personal WHERE id = ?', [id]);
        res.json({ message: "El usuario fue eliminado" });
    }
}

const usuController = new UsuController;
export default usuController;