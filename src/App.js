import React, {useState} from 'react';
import './App.css';

function App() {
  let [contador, setcontador] = useState(0);

  return (
    <>
      <button onClick={() => setcontador( prevState => -- prevState )}>disminuir</button>
      <button onClick={() => setcontador( prevState => prevstate + 1 )}>aumentar</button>
      <button onClick={() => setcontador(0)}>restablecer</button>
      <h1>{contador}</h1>

    </>
  );
}

export default App;
