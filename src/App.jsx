import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './componentes/Sidebar'
import BarraDePesquisa from './componentes/Sidebar/BarraDePesquisa'
import Card from './componentes/Sidebar/Card'
import Filtro from './componentes/Sidebar/Filtro'
import Ordenacao from './componentes/Sidebar/Ordenacao'

function App() {
  const [dados, setDados] = useState([]);
  useEffect(()=> {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
    .then(resposta => resposta.json())
    .then(dados => setDados(dados))
  }, [])

  return (
    <div className='container'>
      <Sidebar/>
        <div>
          <BarraDePesquisa/>
          <Filtro/>
          <Ordenacao/>
          <ul className='lista-cards'>
            {dados ? dados.map((item, index) =>(
              <li key={index}>
                <Card 
                id = {item.id}
                imagemUrl = {item.imagem_capa}
                titulo = {item.titulo}
                resumo = {item.resumo}
                linhasDeCodigo = {item.linhas_de_codigo}
                compartilhamentos = {item.compartilhamentos}
                comentarios = {item.comentarios}
                usuario = {item.usuario}
                />
              </li>
            )) : null}
          </ul>
        </div>
    </div>
  )
}

export default App
