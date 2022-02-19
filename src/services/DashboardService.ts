import sequelize from '../db/connection';
import Cliente from "../db/models/Cliente"
import { QueryTypes, Op } from 'sequelize'

export const calculateAvgEdades = async () => {
    try {
        const result: Array<any> = await sequelize.query(
            'SELECT AVG(AGE(fecha_nacimiento)) as "avg_ages" FROM "Clientes" WHERE "deletedAt" IS NULL',
            { type: QueryTypes.SELECT}
          )
          
        return result[0].avg_ages.years ?? 0;
    } catch (error) {
        throw error
    }
}

export const getNroClientes = async () => {
    try {
        const result = await Cliente.count()
        return result;
    } catch (error) {
        throw error
    }
}
export const getNroClientesBirth = async () => {
    try {
        const current_date = new Date()
        const result: any = await Cliente.count({
            where: {
                fecha_nacimiento: {
                    [Op.lt]: current_date,
                    [Op.gt]: new Date(current_date.valueOf() - 24 * 60 * 60 * 1000)
                }
            }
        })
        return result;
    } catch (error) {
        throw error
    }
}