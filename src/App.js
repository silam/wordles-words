import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


const URI = 'https://raw.githubusercontent.com/tabatkins/wordle-list/main/words'

function Tile(props) {
  return (
    <div className="Tile">
      {props.chr}
    </div>
  )
}

function Board() {


  var rows = [], i = 0, len = 30;
  while (++i <= len) rows.push(i);

  return(
    <div className='Board'>
        
        {rows.map((i) => 
          {
              if ( i <= 5)
                return <Tile key={i} chr='a'></Tile>
          })
        
        }
        

    </div>
    

  )
}
function App() {

  const [solution, setSolution] = useState('')

  useEffect(()=>{
    const fetchData = async ()=>{
      const data = await fetch(URI);
      const words = await (await data.text()).split('\n');
      
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
