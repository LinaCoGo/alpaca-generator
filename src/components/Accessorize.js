import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Style from './Style';


function Accessorize(props){

   const [clickedItem, setClickedItem] =useState('');
  
   function handleClick(e){
    setClickedItem(e.target.value);
   }

    return (
        <div>
        <div>
            <h4>ACCESSORIZE THE ALPACA'S</h4>
            <Button onClick={handleClick} variant="outline-primary" value="Hair">Hair</Button>{' '}
            <Button onClick={handleClick} variant="outline-primary" value="Ears">Ears</Button>{' '}
            <Button onClick={handleClick} variant="outline-primary" value="Eyes">Eyes</Button>{' '}
            <Button onClick={handleClick} variant="outline-primary" value="Mouth">Mouth</Button>{' '}
            <Button onClick={handleClick} variant="outline-primary" value="Neck">Neck</Button>{' '}
            <Button onClick={handleClick} variant="outline-primary" value="Leg">Leg</Button>{' '}
            <Button onClick={handleClick} variant="outline-primary" value="Accessories">Accessories</Button>{' '}
            <Button onClick={handleClick} variant="outline-primary" value="Background">Background</Button>{' '}
        </div>
            <div className="style"><Style sendAccessoryToStyle ={clickedItem} alpacaStyle={props.alpacaStyle}/></div>
        </div>
    )
}

export default Accessorize;