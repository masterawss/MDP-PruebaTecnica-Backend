import Cliente from "../db/models/Cliente"

import sequelize from '../db/connection';
import { QueryTypes } from 'sequelize'

export const getAll = async () => {
    try {
        return await Cliente.findAll()
    } catch (error) {
        console.log('ERROR', error);
        throw error
    }
}

export const store = async (req: any) => {
    try {
        await Cliente.create({
            nombres: req.nombres,
            apellidos: req.apellidos,
            fecha_nacimiento: req.fecha_nacimiento,
        });
    } catch (error) {
        console.log('ERROR', error);
        throw error
    }
}

export const calculateAvgEdades = async () => {
    try {
        const result = await sequelize.query(
            'SELECT AVG(AGE(fecha_nacimiento)) as "avg_ages" FROM "Clientes"',
            { type: QueryTypes.SELECT}
          )
        return result;
    } catch (error) {
        throw error
    }
}