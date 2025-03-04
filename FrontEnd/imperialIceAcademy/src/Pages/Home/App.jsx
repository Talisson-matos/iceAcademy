
import styles from './App.module.css';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios'

function App() {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ age, setAge ] = useState('');
  const [ locality, setLocality ] = useState('');
  const [ gender, setGender ] = useState('');
  

 const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    axios.post('http://localhost:3000/registrar', {
      name, 
      email, 
      age, 
      locality, 
      gender
    }).then(() => {
      alert('Usúario registrado com sucesso.')
    })
    .catch(err => {
      console.error(err)
    });
    navigate('/register')
  }

  return (
    <div className={styles.container}>
      
      <div className={styles.logo_container}>
          <h1 className={styles.logo_title}>Imperia Ice Academy</h1>
      </div>

      <div className={styles.form_container}>
        <form  className={styles.form_field} >
          <h2>Cadastro</h2>
          <Input onChange={(e) => setName(e.target.value)} type={'text'} placeholder={'Digite o seu nome...'} label={'nome'} htmlFor={'name'} id={'name'} />
          <Input onChange={(e) => setEmail(e.target.value)} type={'email'} placeholder={'Digite o seu email...'} label={'email'} htmlFor={'email'} id={'email'}/>
          <Input onChange={(e) => setAge(e.target.value)} type={'number'} placeholder={'Digite a sua idade...'} label={'idade'} htmlFor={'idade'} id={'idade'}/>
          <div className={styles.select}>
            <select name="" id="" onChange={(e) => setLocality(e.target.value)}>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
              <option value="Volta Redonda">Volta Redonda</option>
              <option value="Muriaé">Muriaé</option>
              <option value="Ribeirão Preto">Ribeirão Preto</option>
              <option value="São José dos Campos">São José dos Campos</option>
              <option value="Londrina">Londrina</option>
              <option value="Araxá">Araxá</option>
              <option value="Belo Horinzonte">Belo Horizonte</option>
            </select>
          </div>
          <div className={styles.gender}>
            <input onChange={(e) => setGender(e.target.value)} type="radio" name="genero"  id="feminino" /><label htmlFor="feminino">Feminino</label>
            <input onChange={(e) => setGender(e.target.value)} type="radio" name="genero" id="masculino" /><label htmlFor="masculino">Masculino</label>
          </div>
          <div className={styles.agree}>
            <input type="checkbox" checked='checked' name="agree" id="agree" /><label htmlFor="agree">Você concorda com nossos termos e condições. </label>
          </div>
            <Button type={'submit'} onclick={handleSubmit}  text={'Registrar'} />

        </form>
      </div>
      
    </div>
  )
}

export default App
