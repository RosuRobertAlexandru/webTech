const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

const mysql = require('mysql2/promise')

const DB_USERNAME = 'root'
const DB_PASSWORD = '#Nigger13!'

let conn

mysql.createConnection({
    user : DB_USERNAME,
    password : DB_PASSWORD
})
.then((connection) => {
    conn = connection
    return connection.query('CREATE DATABASE IF NOT EXISTS tw_exam')
})
.then(() => {
    return conn.end()
})
.catch((err) => {
    console.warn(err.stack)
})

const sequelize = new Sequelize('tw_exam', DB_USERNAME, DB_PASSWORD,{
    dialect : 'mysql',
    logging: false
})

let Homework = sequelize.define('homework', {
    student : Sequelize.STRING,
    content : Sequelize.STRING,
    grade : Sequelize.INTEGER
},{
    timestamps : false
})


const app = express()
app.use(bodyParser.json())

app.get('/create', async (req, res) => {
    try{
        await sequelize.sync({force : true})
        const grades  = [2, 5, 7, 7, 3, 10, 9, 4, 10, 8]
        for (let i = 0; i < 10; i++){
            let homework = new Homework({
                student : `name${i}`,
                content : `some text here ${i}`,
                grade : grades[i]
            })
            await homework.save()
        }
        res.status(201).json({message : 'created'})
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})
    }
})

app.get('/homeworks', async (req, res) => {
    try{
        //verificam daca parametrul pass este fals
        //atunci returnam tot
        if (!req.query.pass) {
            let homeworks = await Homework.findAll()
            res.status(200).json(homeworks)
        }
        //verificam daca parametrul pass este true
        //atunci returnam doar ce e mai mare ca 5
        if (req.query.pass === 'true') {
            let homeworks = await Homework.findAll({
                where: {
                    grade: {
                        [Sequelize.Op.gte]: 5
                    }
                }
            })
            res.status(200).json(homeworks)
        }

    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})        
    }
})

app.get('/homeworks/:id', async (req, res) => {
    try{
        const person = await Homework.findByPk(req.params.id)
        if (person) {
            //verificam ce acceptam
            //daca acceptam doar text, trimitem doar continutul
            if(req.headers['accept'] && req.headers['accept']==='text/plain'){
                res.status(200).send(person.content) 
            }
            //altfel trimitem toata persoana
            else{
                res.status(200).json(person)
            }
        } 
        //testul 5 daca nu exista persoana, returnam null
        else {
            res.status(404).json({ message: 'not found' })
        }
        
    }
    catch(err){
        console.warn(err.stack)
        res.status(500).json({message : 'server error'})        
    }
})



module.exports = app