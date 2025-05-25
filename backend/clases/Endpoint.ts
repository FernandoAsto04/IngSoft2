import { Request, Response } from "express";

class Endpoint {
    get(req: Request, res: Response ) {
        res.send("GET ejecutado")
    }

    post() {
        return "POST ejecutado";
    }

    put() {
        return "PUT ejecutado";
    }

    delete() {
        return "DELETE ejecutado";
    }
}

export default Endpoint;