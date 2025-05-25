"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Endpoint {
    get(req, res) {
        res.send("GET ejecutado");
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
exports.default = Endpoint;
