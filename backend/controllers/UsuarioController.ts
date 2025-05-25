import Endpoint from "../clases/Endpoint";
import { Request, Response } from "express";
// @ts-ignore
import Usuario from "../models/Usuario.js";

class UsuarioController extends Endpoint {
    override async get(req: Request, res: Response) {
        const id = req.params.id;
        try {
            const usuario = await Usuario.findAll();
            //findByPk()
            if (usuario) {
                res.status(200).json(usuario);
            } else {
                res.status(404).send("Usuario no encontrado");
            }
        } catch (error) {
            res.status(500).send("Error en el servidor");
        }
    }
}

export default UsuarioController;
