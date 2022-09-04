import {useState} from 'react'
import './App.css';

function App() {

  const [screenDisplay, setscreenDisplay] = useState('');

  function buttonClick(e){

    console.log('button was clicked!');

    const val = e.target.innerHTML;
    if(val === '='){
        setscreenDisplay(screenDisplay+' = '+eval(screenDisplay));

    }
    else if(val === 'clc'){
        setscreenDisplay('');

    }


    else{

      setscreenDisplay(screenDisplay + val);
    }
  }

  const keyArray = [1,2,3,4,5,6,7,8,9,0,'+','-','/','*','=', 'clc'];
  return (
    <div className="container">
      <div className="display">{screenDisplay}</div>
      
      <div className="keys">
        {
          keyArray.map(element => <div className="key" 
                                  onClick={e => buttonClick(e)}>
                                  {element}</div>)
        }
      </div>
    </div>
  );
}

export default App;
