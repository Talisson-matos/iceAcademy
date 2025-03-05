import React from 'react'
import styles from './Register.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Register = () => {

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/dados')
      .then(response => setUser(response.data))
      .catch(error => console.error('Erro ao buscar dados', error))
  }, [])

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/delete/${id}`);
      setUser(user.filter(item => item.id !== id));
    } catch (err) {
      console.error('Erro ao deletar o usuário', err);
    }
  }

  return (
    <div className={styles.container_register}>
      <div className={styles.data_register}>

        {user.map(item => (
          <div key={item.id}>
            <h3>{`User ${item.id}`}</h3>
            <li>Nome: {item.nome}</li>
            <li>Email: {item.email}</li>
            <li>Idade: {item.idade}</li>
            <li>Localidade: {item.localidade}</li>
            <li>Gênero: {item.genero}</li>
            <button onClick={() => handleDelete(item.id)}>Excluir</button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Register