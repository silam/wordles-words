import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


const URI = 'https://raw.githubusercontent.com/tabatkins/wordle-list/main/words'

function Tile() {
  return (
    <div className="Tile">

    </div>
  )
}

function Board() {
  return(
    <div>
        <Tile></Tile><Tile></Tile>
        <Tile></Tile>
        <Tile></Tile>
    </div>
    

  )
}
function App() {

  const [solution, setSolution] = useState('')

  useEffect(()=>{
    const fetchData = async ()=>{
      const data = await fetch(URI);
      const words = await (await data.text()).split('\n');
      
      console.log(words.length);
      const randomWord = words[Math.floor(Math.random() * words.length)]
      setSolution(randomWord);
    }

    fetchData();
  },[])

  return (
    <div className="App">
      <p>{solution}</p>
      <p>
        <Board></Board>
      </p>
    </div>
  );
}

export default App;
