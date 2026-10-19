import { useNavigate } from 'react-router-dom'
import './App.css'

function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Redireciona de volta para a tela de Login
    navigate('/')
  }

  return (
    <div>
      <h1>Painel Principal (Dashboard)</h1>
            
      <button onClick={handleLogout}>
        Sair / Voltar ao Login
      </button>
    </div>
  )
}

export default Dashboard