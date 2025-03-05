import express from 'express';
import cors from 'cors';
import mysql from 'mysql';

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1335T@l2076',
    database: 'iceAcademy'

})

db.connect(err => {
    if (err) throw err;
    console.log('Conectado ao banco de dados.')
})

// Requisição

app.get('/dados', (req, res) => {
    db.query('select * from cadastro', (err, result) => {
        if(err){
            res.status(500).send(err)
        }
        else{
            res.json(result)
        }
    })
})

// Rota post

app.post('/inserir', (req, res) => {
    const { nome, email, idade, localidade, genero } = req.body;
    
    // Validar dados
    if (!nome || !email || !idade || !localidade || !genero) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }
    
    const sql = 'INSERT INTO cadastro (nome, email, idade, localidade, genero) VALUES (?, ?, ?, ?, ?)';
    
    db.query(sql, [nome, email, idade, localidade, genero], (err, result) => {
      if (err) {
        console.error('Erro ao inserir registro:', err);
        return res.status(500).json({ error: 'Erro ao inserir no banco de dados' });
      } else {
        return res.status(200).json({ message: 'Registro realizado com sucesso', id: result.insertId });
      }
    });
  });

  // Rota delete


app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM cadastro WHERE id = ?';

    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Erro ao deletar registro:', err);
            return res.status(500).json({ error: 'Erro ao deletar no banco de dados' });
        } else if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Usuário não encontrado' });
        } else {
            return res.status(200).json({ message: 'Usuário deletado com sucesso' });
        }
    });
});


// Iniciar o servidor

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running in door ${PORT}`)
})


