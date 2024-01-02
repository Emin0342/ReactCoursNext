# REACTJS / NEXTJS

## Introduction

React est une bibliothèque JS qui permet de creer facilement des interfaces utilisateurs. Elle est maintenue par Facebook et une communauté de développeurs indépendants.

## Installation

```
npm crearte vite@latest my-react-app --template react
```

Pour lancez le serveur de dev

```

cd my-react-app

npm install -g

npm run dev

```

`Vite est un outil de build qui permet de faire du hot reload, il est plus rapide que webpack.`

 `Eslint est un outil qui permet de vérifier la syntaxe du code.`

Quand on charge un projet React on execute une fois le code JS et ensuite on ne fait que modifier le DOM. C'est ce qu'on appelle le `client side rendering` contrairement au `server side rendering` qui consiste à executer le code JS à chaque fois qu'on charge une page par exemple avec PHP.

Dossier src : contient le code source de l'application.

Main.jsx est le point d'entrée de l'application.

DOM : Document Object Model : c'est une interface de programmation qui permet de manipuler le contenu d'une page HTML.

JSX : Javascript XML : c'est une extension de la syntaxe JS qui permet d'écrire du HTML dans du JS.

Fonction render : est une fonction qui permet de rendre un composant React dans le DOM.

Chaque balise HTML est un composant React par exemple 
```html
<App>
``` 
est un composant React.
