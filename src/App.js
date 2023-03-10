import './App.css';
import Popup from 'reactjs-popup';
import {useRef, useState} from 'react';
import 'reactjs-popup/dist/index.css';
import SignaturePad from 'react-signature-canvas';
import './sigCanvas.css' 

function App() {
  const [imageURL, setImageURL] = useState(null);
  const sigCanvas = useRef({});

  const limpiar = () => sigCanvas.current.clear();
  const guardar = () =>  setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  return (
    <div className="App">
      <h1>Necesitamos tu firma</h1> 

      <Popup modal trigger={<button>Firma aquí</button>} closeOnDocumentClick={false}>
      {close => (
          <>
          <SignaturePad
          ref={sigCanvas}
          canvasProps={{
            className: "signatureCanvas"
          }}/>
          <button onClick={close}>Cerrar</button>
          <button onClick={limpiar}>Limpiar firma</button>
          <button onClick={guardar}>Guardar</button>
          </>    
      )}
      </Popup>  

      <br/>
      <br/>
      
      {imageURL ? (
          <img
          src={imageURL}
          alt="mi firma"
          style={{
            display: 'block',
            margin: "0 auto",
            border: "1px solid black",
            width: "150px"
          }}
          />
      ) : null}

    
          
    </div>
  );
}

export default App;
