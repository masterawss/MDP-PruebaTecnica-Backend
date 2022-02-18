import ExpressRouterExtended from 'express-router-extended';
import * as ClienteController from './controllers/ClienteController';
import {bodyRequestValidator} from './validator/bodyRequestValidator'
import {clienteStoreSchema} from './middlewares/clienteSchemaValidator'

const router = ExpressRouterExtended.build()

router.group({ prefix: '/api/v1/cliente' }, router => {
    router.get('/',                 ClienteController.index)
    router.get('/get-avg-edades',   ClienteController.getAvgEdades)
    router.post('/store',           bodyRequestValidator(clienteStoreSchema), ClienteController.store)
})

export default router;