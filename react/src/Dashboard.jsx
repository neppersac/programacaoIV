import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Redireciona de volta para a tela de Login
    navigate('/')
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Painel Principal (Dashboard)</h1>
      <p>Bem-vindo! Você está logado no sistema.</p>
      
      <button onClick={handleLogout} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Sair / Voltar ao Login
      </button>
    </div>
  )
}

export default Dashboard