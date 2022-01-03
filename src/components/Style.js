import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { FaRandom } from 'react-icons/fa';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import download from 'downloadjs';
import { toPng} from 'html-to-image';


function Style(props){

    const [alpaca, setAlpaca] = useState({
        background: 'Dark Blue 70',
        neck: 'Default',
        nose: 'Nose',
        ears: 'Default',
        eyes: 'Default',
        accessories: 'Headphone',
        mouth: 'Default',
        leg: 'Default',
        hair: 'Default'
    })

    const hair = ['Bang','Curls', 'Default','Elegant','Fancy','Quiff','Short'];
    const ears = ['Default', 'Tilt Backward', 'Tilt Forward'];
    const eyes = ['Angry', 'Default', 'Naughty', 'Panda', 'Smart', 'Star'];
    const mouth = ['Astonished', 'Default', 'Eating', 'Laugh', 'Tongue'];
    const neck = ['Bend Backward', 'Bend Forward', 'Default', 'Thick'];
    const leg = ['Bubble Tea', 'Cookie', 'Default', 'Game Console', 'Tilt Backward', 'Tilt Forward'];
    const accessories = ['Earings', 'Flower', 'Glasses', 'Headphone'];
    const background = ['Blue 50','Blue 60','Blue 70','Dark Blue 30', 'Dark Blue 50', 'Dark Blue 70', 'Green 50','Green 60', 'Green 70', 'Grey 40', 'Grey 70', 'Grey 80', 'Red 50', 'Red 60', 'Red 70', 'Yellow 50', 'Yellow 60', 'Yellow 70'];

    let accessorize = hair;
    let accessory = props.sendAccessoryToStyle.toLowerCase();

   switch (accessory) {
       case 'hair':
        accessorize = hair
           break;
        case 'ears':
        accessorize = ears
           break;
        case 'eyes':
        accessorize = eyes
           break;
        case 'mouth':
        accessorize = mouth
            break;
        case 'neck':
        accessorize = neck
            break;
        case 'leg':
        accessorize = leg
            break;
        case 'accessories':
        accessorize = accessories
            break;
        case 'background':
        accessorize = background
            break;
        
   
       default:
           break;
   }

   function randomize(accessory) {
    return (accessory[Math.floor(Math.random()*accessory.length)])
    }
    
   function handleClick(e) {
       const selectedStyle = e.target.value;
       setAlpaca (prevValue => {
           return {
               ...prevValue,
               [accessory]: selectedStyle
           }
       });
   }
   props.alpacaStyle(alpaca);

   function handleRandomClick(){
       setAlpaca({
        background: randomize(background),
        neck: randomize(neck),
        nose: 'Nose',
        ears: randomize(ears),
        eyes: randomize(eyes),
        accessories: randomize(accessories),
        mouth: randomize(mouth),
        leg: randomize(leg),
        hair: randomize(hair)
       })
   }

   function downloadImage(){
       const alpacaCanvasNode = document.getElementById('alpaca');
       toPng(alpacaCanvasNode).then(dataUrl => {
        download(dataUrl, 'my-alpaca.png')
       })
   }

    return (
        <div>
            <h4>STYLE</h4>
            {accessorize.map(style =><Button onClick={handleClick} variant="outline-primary" value={style}>{style}</Button>)}
             <div className="leftButtons">
            <h4>EXTRAS</h4>
            <Button variant="outline-light" style={{color:"black"}} className="randomBtn" onClick={handleRandomClick}><FaRandom/> Random</Button>{' '}
            <Button variant="outline-light" style={{color:"black"}} className="downloadBtn" onClick={downloadImage}> <FaCloudDownloadAlt /> Download</Button>{' '}
            </div>
        </div>
    )
}

export default Style;
