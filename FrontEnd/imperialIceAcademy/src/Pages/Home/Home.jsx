import styles from './Home.module.css';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios'

function Home() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [locality, setLocality] = useState('Rio de Janeiro');
  const [gender, setGender] = useState('');
  const [message, setMessage] = useState('');

  // post 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      const response = await axios.post('http://localhost:3000/inserir', {
        nome: name,
        email: email,
        idade: age,
        localidade: locality,
        genero: gender
      });
      
      setMessage('Cadastro realizado com sucesso!');
     
      
      console.log('Resposta do servidor:', response.data);
      navigate('/register');
    } catch (error) {
      setMessage('Erro ao realizar cadastro. Tente novamente.');
      console.error('Erro ao enviar dados:', error);
    }
  };
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleLocalityChange = (e) => {
    setLocality(e.target.value);
  };

  const handleGenderChange = (value) => {
    setGender(value);
  };

  return (
    <div className={styles.container}>
      {message && <div className={message.includes('Erro') ? styles.error : styles.success}>{message}</div>}
      <div className={styles.logo_container}>
        <h1 className={styles.logo_title}>Imperia Ice Academy</h1>
      </div>

      <div className={styles.form_container}>
        <form className={styles.form_field} onSubmit={handleSubmit}>
          <h2>Cadastro</h2>

          <Input
            onChange={handleNameChange}
            type="text"
            placeholder="Digite o seu nome..."
            label="nome"
            htmlFor="name"
            id="name"
            value={name}
          />

          <Input
            onChange={handleEmailChange}
            type="email"
            placeholder="Digite o seu email..."
            label="email"
            htmlFor="email"
            id="email"
            value={email}
          />

          <Input
            onChange={handleAgeChange}
            type="number"
            placeholder="Digite a sua idade..."
            label="idade"
            htmlFor="idade"
            id="idade"
            value={age}
          />

          <div className={styles.select}>
            <select
              id="localidade"
              value={locality}
              onChange={handleLocalityChange}
            >
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Volta Redonda">Volta Redonda</option>
              <option value="Muriaé">Muriaé</option>
              <option value="Ribeirão Preto">Ribeirão Preto</option>
              <option value="São José dos Campos">São José dos Campos</option>
              <option value="Londrina">Londrina</option>
              <option value="Araxá">Araxá</option>
              <option value="Belo Horizonte">Belo Horizonte</option>
            </select>
          </div>

          <div className={styles.gender}>
            <input
              onChange={() => handleGenderChange('Feminino')}
              type="radio"
              name="genero"
              id="feminino"
              checked={gender === 'Feminino'}
            />
            <label htmlFor="feminino">Feminino</label>

            <input
              onChange={() => handleGenderChange('Masculino')}
              type="radio"
              name="genero"
              id="masculino"
              checked={gender === 'Masculino'}
            />
            <label htmlFor="masculino">Masculino</label>
          </div>

          <div className={styles.agree}>
            <input type="checkbox" required name="agree" id="agree" />
            <label htmlFor="agree">Você concorda com nossos termos e condições.</label>
          </div>

          <Button type="submit" text="Registrar" />
        </form>
      </div>
    </div>
  );
}

export default Home
