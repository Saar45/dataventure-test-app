# Application CRUD Utilisateurs - Dataventure

Cette application Ionic/Angular permet de gérer une liste d'utilisateurs (CRUD). Elle communique avec une API distante pour afficher, ajouter, modifier et supprimer des utilisateurs, tout en affichant des notifications toast pour informer l'utilisateur du succès ou de l'échec des opérations.

## Fonctionnalités

- Affichage de la liste des utilisateurs avec leurs informations (nom, email, téléphone, date de création)
- Ajout d'un nouvel utilisateur
- Modification d'un utilisateur existant
- Suppression d'un utilisateur (avec confirmation)
- Notifications toast pour chaque opération (succès/erreur)
- Formatage des dates en français
- Interface responsive et adaptée mobile grâce à Ionic

## Technologies utilisées

- [Ionic Framework](https://ionicframework.com/) (v8)
- [Angular JS](https://angular.io/) (v19)
- TypeScript
- SCSS

## Structure du projet

```
src/
  app/
    home/                # Page d'accueil (liste, logique CRUD)
      home.page.ts
      home.page.html
      home.page.scss
      date-fr.pipe.ts    # Pipe pour formatage de date en français
    user-form/           # Composant formulaire utilisateur (ajout/édition)
      user-form.component.ts
      user-form.component.html
      user-form.component.scss
      user-form.module.ts
    services/
      user.service.ts    # Service API pour le CRUD utilisateur
    models/
      user.model.ts      # Interface utilisateur
    app.module.ts
    app.component.ts
    app-routing.module.ts
  environments/
    environment.ts
    environment.prod.ts
  theme/
    variables.scss
  global.scss
  index.html
  main.ts
  polyfills.ts
  zone-flags.ts
  test.ts
```

## API

L'application communique avec une API REST définie dans `src/environments/environment.ts` :

```
baseUrl: 'https://siomende.fr/sarr/api-dataventure-test/api'
```

Endpoints utilisés :
- `GET /users` - Liste des utilisateurs
- `POST /user` - Ajouter un utilisateur
- `PUT /user/:id` - Modifier un utilisateur
- `DELETE /user/:id` - Supprimer un utilisateur

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants sur votre machine :

1. **Node.js**  
   Téléchargez et installez Node.js (version recommandée 18.x ou supérieure) depuis :  
   https://nodejs.org/

2. **Angular CLI**  
   Installez Angular CLI globalement avec npm :  
   ```bash
   npm install -g @angular/cli
   ```

3. **Ionic CLI**  
   Installez Ionic CLI globalement avec npm :  
   ```bash
   npm install -g @ionic/cli
   ```

## Installation & Lancement

1. **Cloner le dépôt**

   ```bash
   git clone <url-du-repo>
   cd dataventureTest
   ```

2. **Installer les dépendances**

   ```bash
   npm install
   ```

3. **Démarrer l'application**

   ```bash
   ionic serve
   ```

   L'application sera accessible sur `http://localhost:[default_port]/`.

## Utilisation

- Sur la page d'accueil, consultez la liste des utilisateurs.
- Cliquez sur "Ajouter un utilisateur" pour en créer un nouveau.
- Cliquez sur "Éditer" pour modifier un utilisateur existant.
- Cliquez sur "Supprimer" pour effacer un utilisateur (confirmation demandée).
- Les notifications toast vous informent du résultat de chaque action.


## Fichiers importants

- `home.page.ts` : Logique principale du CRUD et des notifications.
- `user-form.component.ts` : Gestion du formulaire utilisateur.
- `user.service.ts` : Gestion des requêtes API.
- `date-fr.pipe.ts` : Formatage des dates en français.

## Licence

Projet réalisé dans le cadre d'un test technique et à des fins de démonstration.

