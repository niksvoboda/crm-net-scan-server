const sequelize = require('../db')
const {DataTypes} = require('sequelize')

//Date
const Paj = sequelize.define('Paj',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date:{type: DataTypes.STRING},
    time:{type: DataTypes.STRING},
})

//ScanHost
const Paradise = sequelize.define('Paradise',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    ip:{type: DataTypes.STRING},
    mask:{type: DataTypes.STRING},
    dns_hostname:{type: DataTypes.STRING},
})

//Ports
const Rojus = sequelize.define('Rojus',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    port:{type: DataTypes.STRING},
    service:{type: DataTypes.STRING},
    protocol:{type: DataTypes.STRING},
})

//ScanNetwork
const Raj = sequelize.define('Raj',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    body:{type: DataTypes.STRING},
    interface:{type: DataTypes.STRING},
    ip:{type: DataTypes.STRING},
})

//Scan
const Info = sequelize.define('Info', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    ip:{type: DataTypes.STRING},
    mask:{type: DataTypes.STRING},
    interface:{type: DataTypes.STRING},
    dns_hostname:{type: DataTypes.STRING},

})

//Report
const Cennet = sequelize.define('Cennet', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    ip:{type: DataTypes.STRING},
    mask:{type: DataTypes.STRING},
    interface:{type: DataTypes.STRING},
    dns_hostname:{type: DataTypes.STRING},

})



module.exports ={
    Paj,
    Paradise,
    Rojus,
    Raj,
    Info,
    Cennet,

}