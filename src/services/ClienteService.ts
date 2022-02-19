import Cliente from "../db/models/Cliente"
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
        
        return await Cliente.create({
            nombres: req.nombres,
            apellidos: req.apellidos,
            fecha_nacimiento: req.fecha_nacimiento,
        });
    } catch (error) {
        console.log('ERROR', error);
        throw error
    }
}
export const destroy = async (id: any) => {
    try {
        
        return await Cliente.destroy({
            where: {id},
        });
    } catch (error) {
        console.log('ERROR', error);
        throw error
    }
}