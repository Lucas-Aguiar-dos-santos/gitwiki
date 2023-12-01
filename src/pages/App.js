import GitLogo from '../assets/github.png'
import Input from '../components/input'

import {Container} from './styles'
import ItemRepo from '../components/itemRepo'
import Button from '../components/button'
import { useState } from 'react'
import {api} from '../services/api'


function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


  const handleSearchRepo = async () =>{
    const {data} = await api.get(`repos/${currentRepo}`)
      if(data.id){
        const isExist = repos.find(repo => repo.id === data.id)
        
        if(!isExist){
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }alert('repositório não encontrado')
  }

  const handleRemoveRepo = (id)=>{
    setRepos(prev => prev.filter(repo => repo.id !== id))
  }

  return (
    <Container>

      <img src={GitLogo} width={72} height={72} alt='imagem do git'/>
      <Input value={currentRepo} onChange={(e)=>setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>
)}
    </Container>
  );
}

export default App;
