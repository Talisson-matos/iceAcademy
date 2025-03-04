import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = app.express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    localhost: 'localhost',
    user: 'root',
    password: '1335T@l2076',
    database: 'iceAcademy'

})

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados.')
})

const door = '3000'
app.listen(door, () => {
    console.log('Server is running!!!!!')
})