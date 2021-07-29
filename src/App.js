import { useState, useEffect } from 'react'
import './styles.css'

function App() {
  const [ personagens, setPersonagem ] = useState([])
  const [ busca, setBusca ] = useState('')
  const [ filtro, setFiltro ] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response =>response.json())
      .then(data => setPersonagem(data.results))
  },[])

  useEffect(() => {
    setFiltro(
      personagens.filter(personagem => {
        return personagem.name.includes(busca)
      })
    )
  },[ busca, personagens ])

  return (
    <div className="container">
      <input 
        placeholder="Digite o nome do personagem"
        onChange={e => {setBusca(e.target.value)}}
      />
      <div className="cards">
        {filtro.map(personagem => (
          <div className="card" key={personagem.id}>
            <p>{personagem.name}</p>
            <img src={personagem.image} alt={personagem.name}/>
          </div>
        ))}
       
      </div>
    </div>
  );
}

export default App;
