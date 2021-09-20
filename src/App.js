import logo from './logo.svg';
import './App.css';
import { useEffect ,useState } from 'react';
import getGifs from './services/getGifs';
import Gif from './components/Gif';

function App() {

  const [gifs, setGifs] = useState([]);

  /**
   * Si dependencias = [] : ComponentDidMount (sólo se ejecuta una sola vez)
   * Si hay alguna dependencia, se ejecutara el efecto cuando dicha dependencia
   * haya cambiado.
   * Si no se pone el "[]" se ejecuta cada vez que se renderiza
   * @param function 
   * @param array dependencias
   */
  useEffect(async function(){

    // usamos nuestro servicio para fetchear los gifs
    const gifs = await getGifs({keyword:'morty'});
    // seteamos los nuevos gifs
    setGifs(gifs);

  },[]);

  return (
    <div className="App">
      <section className="App-content">
      {
        gifs.map(({id,title,url}) => {
          <Gif 
            title={title}
            key={id}
            url={url}
          />
        })
      }
      </section>
    </div>
  );
}

export default App;
