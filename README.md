    QUADRANTS
Description

Ce projet est une application React conçue pour afficher plusieurs quadrants sur une interface utilisateur. Chaque quadrant présente un contenu distinct ainsi que des boutons personnalisés, avec des styles définis dans plusieurs fichiers CSS pour une meilleure organisation.

Défis Rencontrés


1. Gestion de plusieurs fichiers CSS

Un des principaux défis était la gestion de plusieurs fichiers CSS. Cela a conduit à des conflits de styles et à des difficultés à maintenir une cohérence visuelle au sein de l'application.

2. Intégration des Props

L'intégration des props pour personnaliser les composants a également constitué un défi. Comprendre comment transmettre des données d'un composant à un autre était essentiel pour garantir la flexibilité et la réutilisabilité des composants.

Solutions Trouvées

1. Utilisation de CSS Modules

Pour résoudre les problèmes liés aux fichiers CSS multiples, j'ai opté pour l'utilisation de CSS Modules. Cette approche permet d'isoler les styles au niveau du composant, réduisant ainsi les conflits et améliorant la maintenabilité du code.

2. Classes Dynamiques avec Props

J'ai implémenté une logique de classes dynamiques en fonction des props passées aux composants. Cela permet de personnaliser l'apparence des boutons et des quadrants tout en maintenant un code propre et réutilisable.

Explication du Code

                        Composant Bouton
            
    function Bouton({ variant }) {
        const buttonClass = variant ? styles[`bouton${variant}`] : styles.bouton;
            return <button className={`${styles.bouton} ${buttonClass}`}>Cliquez ici</button>;
        }


Fonction Bouton : 

Ce composant reçoit une prop variant, qui détermine le style appliqué au bouton. Si variant est fourni, une classe CSS spécifique est utilisée.

Classe Dynamique :

 La classe du bouton est composée de styles.bouton et de buttonClass, permettant d'appliquer des styles par défaut et spécifiques en fonction de la variante.

Composant Cadrants

Chaque cadrant est défini par un composant qui inclut un titre, un sous-titre et un bouton. Par exemple :


    function Cadrants1() {
        return (
            <div className='Cadrant1'>
                <h1 id='titre'>Quadrant 1</h1>
                <p id='primary'>Contenu Quadrant 1</p>
                <Bouton variant={1} />
            </div>
        );
    }
Structure : Chaque cadrant suit une structure similaire, avec un titre, un contenu et un bouton.

Utilisation des Props : Dans cet exemple, la prop variant={1} est passée au composant Bouton, permettant l'application d'un style spécifique.

    Apprentissages Clés
        
CSS Modules : J'ai acquis une compréhension approfondie de l'utilisation des CSS Modules pour rendre les styles plus maintenables.

Gestion des Props : J'ai appris à passer des props entre les composants et à les utiliser pour influencer le rendu, ce qui améliore la flexibilité des composants.

Design Adaptatif : J'ai développé des compétences dans l'utilisation de media queries pour rendre l'application responsive.

    Améliorations Potentielles


Animations : Introduire des animations CSS pour améliorer l'interaction utilisateur.
Mode Sombre : Implémenter une option de thème sombre pour enrichir l'expérience utilisateur.


Installation

    Clonez le dépôt :

git clone https://github.com/AKA29-KL/Cadrants.git

Ouvrez le projet dans votre éditeur de code préféré.

    Accédez au répertoire du projet :

cd Cadrants

Installez les dépendances :
        
     npm install
    

Lancez l'application :

    npm start


Technologies Utilisées

React
CSS Modules
React Icons
Media Queries
importation de typographie

** 
S'assurer que les dépendances sont bien installées et que le projet est correctement configuré pour utiliser les modules CSS.(node.js)

** 
Utiliser les media queries pour rendre l'application responsive.

** 
Utiliser les composants React Icons pour afficher des icônes personnalisées.


** Note : Cette application a été créée avec React et CSS Modules. Pour plus d'informations sur React, consultez le site Web officiel de React (https://reactjs.org/). Pour plus d'informations sur CSS Modules, consultez la documentation officielle de CSS Modules (https://github.com/css-modules/css-modules). Pour plus d'informations sur React Icons, consultez la documentation officielle de React Icons (https://react-icons.github.io/react-icons/). Pour plus d'informations sur Media Queries, consultez la documentation officielle de Media Queries (https://developer.mozilla.org/fr/docs/Web/CSS/Media_Queries/Using_media_queries). Pour plus d'informations sur le typographie, consultez la documentation officielle de Google Fonts (https://fonts.google.com/). **

** S'assurer d'avoir bien installé Node.js et npm sur votre ordinateur. Pour plus d'informations sur Node.js, consultez la documentation officielle de Node.js (https://nodejs.org/en/). Pour plus d'informations sur npm, consultez la documentation officielle de npm (https://docs.npmjs.com/). **

