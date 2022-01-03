import React, {useState} from 'react';
import Header from './Header';
import Alpaca from './Alpaca';
import Accessorize from './Accessorize';

function App() {

    const [state, setState] = useState('');

    function getAlpacaStyle (alpaca){
        setState(alpaca);
    }

    return (
    <div className="outsideContainer">
        <Header />
        <div 
        className="leftSide">
          <Alpaca 
          design={state}/>
        </div>
        <div className="rightSide">
            <div>
            <Accessorize 
            alpacaStyle={getAlpacaStyle}/>
            </div>
        </div>
    </div>
    )
}

export default App;