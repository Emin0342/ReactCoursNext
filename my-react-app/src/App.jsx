import { useState } from 'react'
import './App.css'
import Profile from './components/Profile/Profile';
import PropExemple from './components/PropsExemple/PropExemple';
import TopNavBar from './components/topNavBar/topNavBar';

// En react tous les composants sont des fonctions
// tous composant react doit retourner un élément JSX

// React nous permet de mettre a jour le DOM avec des outils appelés hooks

// Ce sont des fonctions qui commencent par use (convention)
function App() {
  const [name, setName] = useState("React"); // useState est un hook qui permet de gérer l'état d'un composant
  // useState retourne un tableau avec deux éléments
  // Le premier est la valeur de l'état
  // Le second est une fonction qui permet de mettre à jour l'état
  // useState prend en paramètre la valeur initiale de l'état

  function onClickHandler(test) {
    setName("Vite"); // On met à jour l'état

    // On peut aussi mettre à jour l'état en fonction de l'état précédent
    // Cette syntaxe est utilisée quand on met à jour un état en fonction de l'état précédent
    setName((prev) => { return prev + "Vite";}) // prev est la valeur précédente de l'état
  }

  return (
    <>
      <TopNavBar/>
      {/* <PropExemple name={name} childClickHandler={onClickHandler} /> */}
    </>
  );
}

export default App;