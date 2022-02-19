import { Response, Request } from 'express';
import { calculateAvgEdades, getNroClientes, getNroClientesBirth } from "../services/DashboardService"

export const getKpis = async (_req: Request, response: Response) => {
    try {
        const avg_age = await calculateAvgEdades()
        const nro_clientes = await getNroClientes()
        const nro_clientes_birth = await getNroClientesBirth()
        return response.json({avg_age,nro_clientes,nro_clientes_birth})
    } catch (error) {
        return response.status(500).send(error)
    }
}