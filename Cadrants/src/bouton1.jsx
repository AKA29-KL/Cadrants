/* Importe les styles pour les boutons */
import React from 'react';
import styles from './bouton1.module.css';

function Bouton({ variant }) { // Le variant est un paramètre optionnel
    const buttonClass = variant ? styles[`bouton${variant}`] : styles.bouton; // Le nom de la classe est le nom de la variante
    return <button className={`${styles.bouton} ${buttonClass}`}>Cliquez ici</button>; // Le bouton est affiché avec la classe de la variante
}

export default Bouton;
