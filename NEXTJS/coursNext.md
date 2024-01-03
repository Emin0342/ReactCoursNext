# Next JS

NextJS est un frameword React qui permet de creer des applications web. L'interface se compose de composants React et le framework se charge d'apporter tous les outils de bundling, compilation et bien plus...

## Principales fonctionnalités

- Système de routage : NextJS utilise un système de routage directement basé sur le système de fichiers.
- Rendu performant : NextJS permet de faire du rendu server (Server Side Rendering) et du rendu statique (Static Site Generation).
- Data Fetching : NextJS facilite l'utilisation d'async await pour faire des appels API.
- CSS : NextJS permet d'utiliser CSS, Saas, Less, Stylus, CSS Modules, Styled Components et bien plus...
- TypeScript : Next.JS permet d'utiliser TypeScript.

## Installation

- Pre requis : NodeJS 18.17 ou plus 
- Compte GitHub 
- Compte vercel

## Création d'un projet

Pour créer un projet NextJS, il suffit d'executer la commande suivante :

```bash
npx create-next-app
```
Ensuite repondre : 

Le nom de l'app
TypeScript : Oui
ESLint : Oui
Tailwind CSS : Oui
src /directory : Oui
import alias : (très utile aparamant mais ici on repond non)

## Structure d'un projet NextJS

tsconfig.json : fichier de configuration TypeScript

src/app : contient les composants de l'application

tous ce qui est destiné a être une page doit être dans le dossier app

pages.tsx / layout.tsx 

Chaque dossier correspond a une url 

![Alt text](image.png)

En gros Layout c'est le fichier qui va contenir le header et le footer de notre site par exemeple 
au lieu de faire un component header et footer on met tous dans le layout et on l'importe dans les pages

MAIS si on veut un autre header par exemple il faut faire un autre layout dans le dossier en question