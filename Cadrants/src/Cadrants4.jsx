import React from 'react';
import './Cadrants4.css';
import { IoStarSharp } from "react-icons/io5"; 
import Bouton from './bouton1';

function Cadrants4() {
    return (
        <div className='Cadrant4'>
            <h1 id='titre4'>Quadrant 4</h1>
            <p id='primary4'>Contenu Quadrant 4</p>
            <Bouton variant={4} />
            <div className='icone4'>
                <IoStarSharp size={50} />
            </div>
        </div>
    );
}

export default Cadrants4;
