import SearchBar from './components/SearchBar';
import './styles/main.css';
import {useState, useEffect} from 'react';
import Header from './components/Header';
import SearchResult from './components/SearchResult';


function App() {
  const [user, setUser] = useState('octocat');
  const [data, setData] = useState({});
  const [lightMode, setLightMode] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {
      fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => {
         if(data.message) {
          setError(true)
         } else {
           setData(data)
           setError(false)
         }
      })   
  }, [user])


  return (
    <div className="App">
      <Header lightMode={lightMode} setLightMode={setLightMode}/>
      <SearchBar setUser={setUser} error={error} />
      <SearchResult data={data} />
    </div>
  );
}

export default App;
