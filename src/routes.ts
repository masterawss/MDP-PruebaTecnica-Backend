import ExpressRouterExtended from 'express-router-extended';
import * as ClienteController from './controllers/ClienteController';
import * as DashboardController from './controllers/DashboardController';
import {bodyRequestValidator} from './validator/bodyRequestValidator'
import {clienteStoreSchema, clienteDeleteSchema} from './middlewares/clienteSchemaValidator'

const router = ExpressRouterExtended.build()

router.group({ prefix: '/api/v1' }, router => {

    router.group({ prefix: '/cliente'}, router => {
        router.get('/',                 ClienteController.index)
        router.post('/store',           bodyRequestValidator(clienteStoreSchema), ClienteController.store)
        router.delete('/destroy/:id',   ClienteController.destroy)
    })

    router.group({ prefix: '/dashboard'}, router => {
        router.get('/get-kpis',   DashboardController.getKpis)
    })

    
})

export default router;