const sequelize = require('./db')
const {DataTypes} = require('sequelize')

const Feedback = sequelize.define('feedback',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    feedback: {type: DataTypes.TEXT}
})

module.exports = Feedback