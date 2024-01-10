1 - Quel est le but du hook useState dans React ? Donnez un exemple de son utilisation dans un composant fonctionnel. 

UseState permet de gerer l'état d'un composant, pour savoir si il est ouvert ou fermé par exemple et permet de modifier cet état.

Il prend en paramètre la valeur initiale de l'état et retourne un tableau avec la valeur de l'état et une fonction qui permet de modifier la valeur de l'état.

Exemple : 

```js

import React, { useState } from 'react';

// ...

const ExpenseItem = (props) => {

  
 const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
```

export default ExpenseItem;

ici quand on clique sur le bouton change title on déclanche la fonction clickHandler qui va modifier la valeur de title et donc le composant va se re-rendre avec la nouvelle valeur de title car il utilise setTitle du hook useState pour modifier la valeur de title.






2 - Décrivez comment le hook useEffect est utilisé dans les composants fonctionnels React. Quels sont ses cas d'utilisation courants ?

useEffect est un hook qui permet d'effectuer des effets de bord dans un composant React.

useEffect prend 2 arguments :

1er argument : une fonction qui sera executer a chaque fois que le composant est rendu.

2eme argument : un tableau de dépendances qui permet de spécifier quand la fonction doit être executer.


exemple : 
```js
useEffect(() => {
    console.log('useEffect');
    document.title = 'New Title';
  });
```
ici on change le titre de la page a chaque fois que le composant est rendu et etant donner qu'il n'y a pas de 2eme argument la fonction est executer a chaque fois que le composant est rendu.

exemple avec un 2eme argument : 

```js
useEffect(() => {
    console.log('useEffect');
    document.title = 'New Title';
  }, [title]);
```
ici useEffect se lance au premier rendu du composant et ensuite a chaque fois que la variable title change. 

useState peut également faire un retour qui permet de faire un cleanup avant chaque nouveau rendu du composant, et non pas avant chaque mise à jour de l'état du composant (quand le composant est rendu à nouveau).

```js
useEffect(() => {
    console.log('useEffect');
    document.title = 'New Title';
    return () => {
      console.log('Cleanup');
    };
  }, [title]);
```

ici le cleanup retournera Cleanup dans la console avant chaque nouveau rendu du composant.

Un composant fonctionnel React contrairement a un composant de classe ne peut pas avoir de cycle de vie, useEffect permet donc de simuler un cycle de vie dans un composant fonctionnel.






3 - Expliquez l'API Contexte dans React et son cas d'utilisation principal. Comment implémenteriez-vous un contexte de thème pour les modes sombre et clair dans une application ?

L'API Contexte permet de passer des données a travers l'arbre des composants. Il est principalement utiliser pour ne pas passer les props a chaque composant.

On peut passé en paramètre le props value a un contexte et ensuite on peut utiliser ce contexte dans les composants qui sont dans le contexte du contexte.

Exemple avec une arborése de composants : 

```js
import React from 'react';

const ThemeContext = React.createContext();

const App = () => {
  return (
    <ThemeContext.Provider value={{ theme: 'dark' }}>
      <Navbar />
    </ThemeContext.Provider>
  );
};

```
ici on passe le props theme au contexte ThemeContext donc navbar aura accès a ce props et on peut l'utiliser dans le composant navbar afin de changer le theme de l'application.

Et on poura donc imaginer a un endroit de l'app un bouton qui permet de changer le theme de l'application et qui va modifier le props theme du contexte ThemeContext et donc modifier le theme de l'application et de tous les composants 'child' de ThemeContext.



4 - À quoi servent les hooks useMemo et useCallback dans React ? Donnez un exemple où leur utilisation serait bénéfique

useMemo permet de stocker une valeur dans la mémoire cache du navigateur et de ne pas la recalculer a chaque fois que le composant est rendu.

Exemple de la documentation de React :

```js
import { useMemo } from 'react';

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  // ...
}
```
useMemo prend 2 arguments : une fonction de calcul et un tableau de dépendances.

Dans l'exemple ci-dessus la fonction filterTodos est utilisée pour filtrer les todos en fonction de l'onglet sélectionné.
 
Le tableau de dépendances [todos, tab] spécifie que le calcul doit être refait uniquement si l'un de ces deux éléments change. Cela permet d'éviter de recalculer visibleTodos à chaque rendu du composant.

useCallback est un hook react qui permet de mettre en cache une fonction entre les re-rendus. 

Exemple de la documentation de React :

```js
import { useCallback } from 'react';

function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
  // ...
```

useCallback prend 2 paramètres : 

La fonction que nous voulons mettre en cache entre les re-rendus ici handleSubmit.

Une liste de dépendances comprenant chaque valeur de votre composant qui est utilisée dans votre fonction ici productId et referrer.

La liste de dépendances est utilisée pour déterminer si la fonction doit être recalculée ou non. Si l'une des valeurs de la liste de dépendances change, la fonction est recalculée. Si aucune valeur de la liste de dépendances ne change, la fonction est récupérée à partir du cache.


```js
function ProductPage({ productId, referrer, theme }) {
  // ...
  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
```
Ici on utilise la fonction handleSubmit dans le composant ShippingForm (exemple de la documentation React) et comme on a utiliser useCallback pour mettre en cache la fonction handleSubmit entre les re-rendus on ne va pas recalculer la fonction a chaque fois que le composant ShippingForm est rendu.


5 - Expliquez comment Next.js gère le routage. Quelle est la différence entre les routes statiques et dynamiques dans Next.js ?

Une route est une URL qui est associée à une page.

En next JS pour faire une nouvelle route il faut aller le dans dossier App et d'ici il faut faire un nouveau dossier avec le nom de la route et dans ce dossier il faut créer un fichier page.tsx qui contiendra le code de la page qui porte le nom du dossier.

Une route static est une route qui est créer a la compilation et qui ne change pas par exemple : 

app/users/page.tsx

ici il n'y a pas de paramètre dans l'URL.


Une route dynamique est créee en placant des crochets autour d'un segment de route. Par exemple, pour créer un route dynamique a l'adresse `/users/{id}/.../page.tsx`

Les informations des routes dynamiques sont passe en props en composant page : params

```tsx
export default function Page({ params}) : { id: string } {
  return <div> Current user : {params.id} </div>;
  }
```

On recupere l'id de l'utilisateur dans params et on l'affiche dans le composant page.



6 - .Expliquez l'objectif du composant Image dans Next.js. Pourquoi est-il préféré à la balise HTML img standard ?

Exemple de la documentation de Next.js : 

```tsx
import Image from 'next/image'
import profilePic from '../public/me.png'
 
export default function Page() {
  return (
    <Image
      src={profilePic}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
    />
  )
}
```

On vois ici que le component image de Next.js n'a pas besoin de width et height car c'est le component image qui va s'occuper contrairement a la balise HTML img standard ou il faut spécifier width et height. Cela permet de ne pas perdre trop de temps sur le responsive
 


7 - Écrivez un exemple de code pour une route API Next.js qui gère les erreurs et renvoie des réponses appropriées au client.

Exemple du tutoriel de Next.js :

```tsx
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
 
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];
 
  try {
    await sql`
      INSERT INTO invoices (customer_id, amount, status, date)
      VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create Invoice.',
    };
  }
 
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}
```

Ici cette route permet de créer une facture dans la base de données et si il y a une erreur lors de la création de la facture on renvoie un message d'erreur au client.



8 - Dans un composant Next.js, comment appliqueriez-vous des styles CSS de manière conditionnelle en fonction de l'état du composant ou de certaines props ? Donnez un exemple concret en utilisant les modules css ou tailwind.
(2 points)

Avec Tailwind : 
```tsx
import clsx from 'clsx';
 
export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
    // ...
)}

```

Ici on utilise la fonction clsx de tailwind qui permet d'appliquer des styles css de manière conditionnelle en fonction de l'état du composant ou de certaines props, ici on applique un style différent en fonction de la valeur de la props status.


9 - Comment Vercel facilite-t-il la gestion des environnements de prévisualisation (preview environments) pour les applications Next.js ? Expliquez comment vous pourriez utiliser cette fonctionnalité pour améliorer le workflow de développement et de test.

Vercel offre la posibilité d'héberger des applications Next.js et de les déployer automatiquement a chaque fois que l'on push sur github.

Pour cela il faut allez sur le site de vercel, ouvrir un compte et ensuite connecter son compte github a vercel puis connecter le repository de l'application a vercel.

Vercel donne un nom de domaine gratuit a l'application et a chaque fois que l'on push sur github l'application est déployer sur vercel et on peut accéder a l'application via le nom de domaine de vercel.

Ceci est très pratique pour le développement et le test car on peut tester l'application en ligne et voir les changements en direct et donc push le code en production quand on est sur que tout fonctionne bien.

