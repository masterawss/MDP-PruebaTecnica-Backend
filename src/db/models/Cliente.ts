import sequelizeConnection from '../connection'
import { DataTypes, Model } from 'sequelize'

// export interface ClienteAttributes {
//   id: number;
//   nombres: string;
//   apellidos: string;
//   fecha_nacimiento?: Date;

//   createdAt?: Date;
//   updatedAt?: Date;
//   deletedAt?: Date;
// }

class Cliente extends Model {
  public id!: number
  public nombres!: string
  public apellidos!: string
  public fecha_nacimiento!: Date;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Cliente.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_nacimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
  paranoid: true
})

export default Cliente