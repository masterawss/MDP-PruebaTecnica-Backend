import Cliente from './models/Cliente'
const isDev = process.env.MODE === 'dev'

const dbInit = () => {
    Cliente.sync({ alter: isDev })
}
export default dbInit