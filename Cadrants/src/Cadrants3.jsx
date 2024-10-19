import React from 'react';
import './Cadrants3.css';
import { IoMoonSharp } from "react-icons/io5"; 
import Bouton from './bouton1';

function Cadrants3() {
    return (
        <div className='Cadrant3'>
            <h1 id='titre3'>Quadrant 3</h1>
            <p id='primary3'>Contenu Quadrant 3</p>
            <Bouton variant={3} />
            <div className='icone3'>
                <IoMoonSharp size={50}  />
            </div>
        </div>
    );
}

export default Cadrants3;
