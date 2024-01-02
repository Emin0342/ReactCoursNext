// Les component React communique entre eux avec des props
// Tous composant peut recevoir des props en paramètre
// Les props sont des objets dont l'utilisatoin est
// similaire à celle des attributs HTML

import styles from './PropExemple.module.css';
import { useState } from 'react'

function PropExemple({name, childClickHandler}) {

    const data = [
        {
            "name": "Justina Gross",
            "phone": "1-781-815-4266",
            "email": "a@aol.com",
            "address": "P.O. Box 734, 9845 Ac Ave"
        },
        {
            "name": "Stone Langley",
            "phone": "(214) 738-6487",
            "email": "augue.malesuada@yahoo.ca",
            "address": "1960 Dui. St."
        },
        {
            "name": "Idona Cervantes",
            "phone": "1-825-311-6215",
            "email": "tincidunt.orci@icloud.ca",
            "address": "1257 Purus. Rd."
        },
        {
            "name": "Joshua Watts",
            "phone": "1-107-311-4807",
            "email": "faucibus.leo@icloud.com",
            "address": "P.O. Box 574, 4834 Dui Street"
        },
        {
            "name": "Leslie Bond",
            "phone": "1-712-332-6252",
            "email": "vitae@google.net",
            "address": "941 Faucibus Street"
        }
    ];
    

    const [visible, setVisible] = useState(true); // useState est un hook qui permet de gérer l'état d'un composant
    return (
    <>
        <h1 className={styles.titre}>Component PropExemple</h1>    
        <div className="card">{name}</div>
        <button onClick={() => {
            childClickHandler("test");
            setVisible(!visible);
        }}> Click here  !</button>

        {visible && 
        // on effectue un map sur le tableau data
        // pour chaque item du tableau on retourne un élément JSX

        data.map((item) => { // ici on fait un map sur le tableau data pour afficher les données de chaque item
            return (
                <ul> 
                    <li key={item.phone}>
                        <div>{item.name}</div>
                        <div>{item.phone}</div>
                        <div>{item.email}</div>
                        <div>{item.address}</div>
                    </li>
                </ul>
            );
        })}
    </>
    );
}

export default PropExemple;