const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const DatePaj = sequelize.define('DatePaj',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date:{type: DataTypes.STRING},
    time:{type: DataTypes.STRING},
})

const ScanHostParadise = sequelize.define('ScanHostParadise',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    ip:{type: DataTypes.STRING},
    mask:{type: DataTypes.STRING},
    dns_hostname:{type: DataTypes.STRING},
})

const PortsRojus = sequelize.define('PortsRojus',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    port:{type: DataTypes.STRING},
    service:{type: DataTypes.STRING},
    protocol:{type: DataTypes.STRING},
})

const ScanNetworkRaj = sequelize.define('ScanNetworkRaj',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    body:{type: DataTypes.STRING},
    interface:{type: DataTypes.STRING},
    ip:{type: DataTypes.STRING},
})

const ScanCennet = sequelize.define('ScanCennet',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    ip:{type: DataTypes.STRING, unique: true, allowNull: false},
})

const Brand = sequelize.define('brand', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.INTEGER, allowNull: false},
})


const DeviceInfo = sequelize.define('device_info', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, allowNull: false},
    description:{type: DataTypes.STRING, allowNull: false},
})


const TypeBrand = sequelize.define('type_brand',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo)
DeviceInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand})
Brand.belongsToMany(Type, {through: TypeBrand})

module.exports ={
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    DeviceInfo
}