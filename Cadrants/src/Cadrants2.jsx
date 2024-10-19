import React from 'react';
import './Cadrants2.css';
import { IoSunnySharp } from "react-icons/io5"; 
import Bouton from './bouton1';

function Cadrants2() {
    return (
        <div className='Cadrant2'>
            <h1 id='titre2'>Quadrant 2</h1>
            <p id='primary2'>Contenu Quadrant 2</p>
            <Bouton variant={2} />
            <div className='icone2'>
                <IoSunnySharp size={50} />
            </div>
        </div>
    );
}

export default Cadrants2;
