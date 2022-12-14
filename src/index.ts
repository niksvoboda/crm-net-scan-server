require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
//const router = require('./routes/index.js')
const fileUpload = require('express-fileupload')

const PORT = process.env.PORT

const app = express()
/** 
 * @description  Настраиваем CORS, разрешаем обращения с фронтенда, работа которого предполагается на порту 3000
 *  если в этом ограничении нет необходимости, то используем просто app.use(cors()) без аргумента
 */
const corsOptions = {
    origin : ['http://localhost:3000'],
}
app.use(cors(corsOptions))
/** Подключаем возможность обращения к нашему API с помощью JSON-запросов */
app.use(express.json())
/** Подключаем возможность загрузки статических файлов */
app.use(fileUpload({}))
/** Указываем папку для статических файлов */
app.use(express.static(path.resolve(__dirname, 'static')))
/** Подключаем роутер API */
//app.use('/api', router)
/** Подключаем модуль для загрузки статических файлов */

/**
 * @description Запускаем сервер и подключаемся к базе данных
 */
const start = async () =>{
    try{
       
        app.listen(PORT, () => console.log('start on: '+ PORT))
    } catch(e) {
        console.log(e)
    }
}

start()