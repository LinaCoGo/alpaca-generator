import React from 'react';
import imagen from '../assets/imagen';


function Alpaca(props){

    return ( 
        <div id='alpaca'>
            <img className="background" src={imagen.background[props.design.background]} alt="background"/>
            <img className="neck" src={imagen.neck[props.design.neck]} alt="neck"/> 
            <img className="nose" src={imagen.nose[props.design.nose]} alt="nose"/>
            <img className="ears" src={imagen.ears[props.design.ears]} alt="ears"/>
            <img className="eyes" src={imagen.eyes[props.design.eyes]} alt="eyes"/>
            <img className="accessories" src={imagen.accessories[props.design.accessories]} alt="accessories"/>
            <img className="mouth" src={imagen.mouth[props.design.mouth]} alt="mouth"/>
            <img className="leg" src={imagen.leg[props.design.leg]} alt="leg"/>
            <img className="hair" src={imagen.hair[props.design.hair]} alt="default"/>
        </div>
    )
}

export default Alpaca;