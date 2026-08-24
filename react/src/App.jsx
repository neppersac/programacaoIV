import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const [cpf, setCpf] = useState('')
  const [senha, setSenha] = useState('')
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault()

    if (!cpf || !senha) {
      alert('Por favor, preencha todos os campos!')
      return
    }

    console.log('Dados enviados:', { cpf, senha })
    // Navega para a tela de Dashboard
    navigate('/dashboard')
  }

  return (
    <form className="login" onSubmit={handleLogin}>
      <img src="logo.png" alt="Logo" />
      
      <input 
        type="number" 
        placeholder="CPF (somente números)"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      
      <input 
        type="password" 
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      
      <button type="submit">Entrar</button>
      
      <a href="#">Primeiro acesso</a>
      <a href="#">Esqueci a senha</a>
      <a href="#">Sou responsável - primeiro acesso</a>
    </form>    
  )
}

export default App