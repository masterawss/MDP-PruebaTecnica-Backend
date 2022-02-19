import sequelizeConnection from '../connection'
import { DataTypes, Model } from 'sequelize'
import moment from 'moment'
moment.locale('es');
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
  fecha_nacimiento_formatted: {
    type: DataTypes.VIRTUAL,
    get() {
      const parsed_date = moment(this.fecha_nacimiento)
      return +parsed_date.format('D')+1 +' '+ parsed_date.format('MMMM YYYY');
    },
    set(value) {
      throw new Error('Do not try to set the `fecha_nacimiento_formatted` value!');
    }
  },
  age: {
    type: DataTypes.VIRTUAL,
    get() {
      return moment().diff(this.fecha_nacimiento, 'years');
    },
    set(value) {
      throw new Error('Do not try to set the `age` value!');
    }
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
  paranoid: true
})

export default Cliente