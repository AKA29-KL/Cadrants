import React from 'react';
import './Cadrants1.css';
import { IoFlowerSharp } from "react-icons/io5";
import Bouton from './bouton1';

function Cadrants1() {
    return (
            <div className='Cadrant1'>
                <h1 id='titre1'>Quadrant 1</h1>
                <p id='primary1'>Contenu Quadrant 1</p>
                <Bouton variant={1} />
                <div className='icone1'>
                    <IoFlowerSharp size={50} />
                </div>
            </div>
    );
}

export default Cadrants1;
