useEffect est un Hook de React qui permet d'effectuer des effets secondaires dans les composants fonctionnels. Les effets secondaires sont des opérations que nous voulons effectuer après le rendu du composant, comme la récupération de données, les abonnements ou le changement manuel du DOM. Dans ce cas, useEffect est utilisé pour lire une valeur du stockage local du navigateur.


- [ ] A l'aide des projets 2 a 5 et de la documentation officielle React, tentez de comprendre le fonctionnement du hook useEffect

# 02 - using the useeffect hook 

Dans App.js on vois que useEffect est utiliser 

```js
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);
```

Ici on vois que useEffect est utiliser pour lire une valeur du stockage local du navigateur (localStorage.getItem('isLoggedIn');

Les valeur local du navigateur sont trouvable en fesant F12 dans le navigateur puis dans l'onglet Application puis dans le menu de gauche Storage puis Local Storage.

Ici on vois que si la valeur de isLoggedIn est 1 alors on met à jour l'état de connexion avec setIsLoggedIn(true);

localStorage.getItem('isLoggedIn') est une méthode qui récupère une valeur du stockage local du navigateur. Le stockage local est une façon de stocker des données dans le navigateur de l'utilisateur. Dans ce cas, il est utilisé pour stocker l'information de connexion de l'utilisateur.

La chaîne de caractères 'isLoggedIn' est la clé utilisée pour stocker et récupérer l'information de connexion. Si la valeur associée à cette clé est '1', cela signifie que l'utilisateur est connecté. Si c'est le cas, la fonction setIsLoggedIn est appelée avec true comme argument pour mettre à jour l'état de connexion.

Le tableau vide [] passé en deuxième argument à useEffect signifie que l'effet doit être exécuté une seule fois après le premier rendu du composant, et non pas après chaque mise à jour. C'est ce qu'on appelle un effet de nettoyage. Dans ce cas, il n'y a pas de nettoyage à faire, donc le tableau est vide.

# 03 - using the useeffect hook with dependencies

Dans login.js on vois que useEffect est utiliser 

```js
  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
  }, [enteredEmail, enteredPassword]);
```

Ici on vois que contrairement a l'exemple précédent on a un tableau en deuxième argument de useEffect. Ce tableau contient les dépendances de useEffect. C'est à dire que useEffect ne sera exécuté que si les dépendances changent.
Dans ce cas, useEffect sera exécuté si enteredEmail ou enteredPassword changent.

A chaque fois que enteredEmail ou enteredPassword changent, on verifie si enteredEmail contient un @ et si enteredPassword a une longueur supérieur à 6. Si c'est le cas, on met à jour l'état de formIsValid avec true.

# 04 - using the useeffect with cleanup

```js
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);
```

Ici encore une fois on verifie si enteredEmail contient un @ et si enteredPassword a une longueur supérieur à 6. Si c'est le cas, on met à jour l'état de formIsValid avec true.

Mais cette fois ci on utilise setTimeout pour attendre 500ms avant de mettre à jour l'état de formIsValid. 

On utilise clearTimeout pour nettoyer le timeout si les dépendances changent avant que le timeout soit terminé.

Cela signifie que si enteredEmail ou enteredPassword change avant que les 500 millisecondes ne soient écoulées, la vérification de la validité du formulaire sera annulée pour cette exécution de l'effet. Cela est utile pour éviter des vérifications inutiles si l'utilisateur tape rapidement, car la vérification ne sera effectuée que 500 millisecondes après que l'utilisateur a arrêté de taper.

# 05 - using the useeffect summary

```js
useEffect(() => {
    console.log('EFFECT RUNNING');

    return () => {
      console.log('EFFECT CLEANUP');
    };
  }, []);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    }, 500);

    return () => {
      console.log('TIMEOUT CLEANUP');
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);
```

Ici il y a 2 useEffect 

le deuxième est le même que l'exemple précédent.

Le premier est un exemple d'effet qui ne s'exécute qu'une seule fois après le premier rendu du composant. Il n'a pas de dépendances, donc il ne sera pas exécuté à nouveau si le composant est mis à jour.


- [ ] Mettez en place un exemple d'utilisation du hook useEffect

```js
  useEffect(() => {
    console.log("Ici on est dans le useEffect");
  
    }, [name]);

    useEffect(() => {
      if (visible === true) {
        console.log("true");
      } else {
        console.log("false");
      }
  }, [visible]);
```

Dans mon composant App.js j'ai mis en place 2 useEffect 

le premier useEffect s'exécute à chaque fois que name change.

le deuxième useEffect s'exécute à chaque fois que visible change, si visible est true alors on affiche true sinon on affiche false.