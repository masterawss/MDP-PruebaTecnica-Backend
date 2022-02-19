import { Response, Request } from 'express';
import { getAll, store as storeCliente, destroy as destroyCliente } from '../services/ClienteService';
export const index = async (_req: Request, response: Response) => {
    try {
        const clientes = await getAll()
        return response.json(clientes)
    } catch (error) {
        return response.status(500).send(error)
    }
}
export const store = async (req: Request, response: Response) => {
    try {
        let cliente = await storeCliente(req.body)
        return response.json(cliente)
    } catch (error) {
        return response.status(500).send(error)
    }
}
export const destroy = async (req: Request, response: Response) => {
    try {
        let id = req.params.id
        await destroyCliente(id)
        return response.json(id)
    } catch (error) {
        return response.status(500).send(error)
    }
}
