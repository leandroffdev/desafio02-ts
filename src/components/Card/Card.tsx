import { Login } from '../../services/login';
import { Button } from '../Button/Button';
import './Card.css';
import { useState } from 'react';


export const Card = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return(
    <div className='card'>
      <form action="">
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder='email' 
          onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name='password' 
          id='password' 
          placeholder='password' 
          onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={() => Login(email, password)}>ENTRAR</Button>
      </form>
    </div>
  )
}