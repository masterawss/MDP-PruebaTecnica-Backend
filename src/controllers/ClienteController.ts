import { Response, Request } from 'express';
import { getAll, store as storeCliente, calculateAvgEdades } from '../services/ClienteService';
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
        await storeCliente(req.body)
        return response.json('success')
    } catch (error) {
        return response.status(500).send(error)
    }
}
export const getAvgEdades = async (_req: Request, response: Response) => {
    try {
        const avg_edades = await calculateAvgEdades()
        return response.json(avg_edades)
    } catch (error) {
        return response.status(500).send(error)
    }
}