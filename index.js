const fs = require ('fs');
const path = require ('path');

const axios = require ('axios');
;async()=>{
    const {data} = await axios.get ('https://jsonplaceholder.typicode.com/todos/1');
    console.log(data);
};


const { Sequelize } = require('sequelize')

//  передача `URI` для подключения
const sequelize = new Sequelize('sqlite::memory:') // для `sqlite`
const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname') 


try {
    await sequelize.authenticate()
    console.log('Соединение с БД было успешно установлено')
  } catch (e) {
    console.log('Невозможно выполнить подключение к БД: ', e)
  }
//создадим модель User с полями firstName и lastName//
const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')
  
const User = sequelize.define(
    'User',
    {
      // Здесь определяются атрибуты модели
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull по умолчанию имеет значение true
      },
    },
    {
      // Здесь определяются другие настройки модели
    }
  )
  
// `sequelize.define` возвращает модель
  console.log(User === sequelize.models.User) // true


class User extends Model {}


  User.init(
    {
      // Здесь определяются атрибуты модели
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
      },
    },
    {
      // Здесь определяются другие настройки модели
      sequelize, // Экземпляр подключения (обязательно)
      modelName: 'User', // Название модели (обязательно)
    }
  )
  
  console.log(User === sequelize.models.User) // true

 
const sequelize = new Sequelize('sqlite::memory:', {
    define: {
      freeTableName: true,
    },
  })

  