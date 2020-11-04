import React, {useEffect, useState} from "react";
import api from "./services/api";
export default App;
import "./styles.css";


function App() {

const [repositories, setRepositories] = useState([]);

  useEffect(() =>{
    api.get('repository').then(response=> {
      setRepository(response.data)
    });
  },[]);

  async function handleAddRepository() {
    const response = await api.post('repositories', {
      title:'Vitor',
      url:'https://github.com/vitorcrl',
      techs:['Node.js', 'React.js']
    })
    setRepositories([...repositories, response.data])
  }
 api.post('repository',{
      title:`Novo  ${Date.now()}`,
  });

  async function handleRemoveRepository(id) {
  }

  return (
    <div>
      <ul data-testid="repository-list">
       {repositories.map(repository => (
          <li key={repository.id}>
             {repository.title}
          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
         </li>
         ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
  
    </div>
    );
       }     
