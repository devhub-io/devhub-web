import DataType from 'sequelize';
import Model from '../sequelize';

const Site = Model.define('Site', {

  id: {
    type: DataType.INTEGER(10),
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  user_id: {
    type: DataType.INTEGER(11),
  },

  title: {
    type: DataType.STRING(255),
    defaultValue: '',
  },

  url: {
    type: DataType.STRING(255),
    defaultValue: '',
  },

  category: {
    type: DataType.STRING(255),
    defaultValue: '',
  },

  sort: {
    type: DataType.INTEGER(6),
    defaultValue: 0,
  },

  is_enable: {
    type: DataType.BOOLEAN,
    defaultValue: true,
  },

  icon: {
    type: DataType.STRING(255),
    defaultValue: '',
  },

  description: {
    type: DataType.STRING(255),
    defaultValue: '',
  },

  level: {
    type: DataType.INTEGER(4),
    defaultValue: 1,
  },

  created_at: {
    type: DataType.TIMESTAMP,
  },

  updated_at: {
    type: DataType.TIMESTAMP,
  },

}, {

  indexes: [
    { fields: ['email'] },
  ],

});

export default Site;
