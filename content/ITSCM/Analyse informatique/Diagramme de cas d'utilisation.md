---
title: Le diagramme de cas d’utilisation (Use Case Diagram)
description: Les diagrammes de cas d’utilisation modélisent le comportement d’un système du point de vue des utilisateurs et systèmes externes, en identifiant les fonctionnalités essentielles et leurs interactions.
---
## Introduction

Le **diagramme de cas d’utilisation** est un outil UML qui aide à **comprendre ce que le système doit faire pour ses utilisateurs**.  
Il montre **les fonctionnalités principales** et **qui interagit avec le système** (utilisateurs ou autres systèmes), sans détails techniques.

**À retenir :**

- Permet de parler **le même langage** entre utilisateurs, analystes et développeurs.
- Définit le **périmètre du système** et ses fonctionnalités importantes.
- Aide à **identifier les besoins réels** grâce à des entretiens avec les utilisateurs.

> 💡 Astuce : commencez toujours par écouter les utilisateurs pour créer un diagramme clair et utile.

---

## Éléments d’un diagramme de cas d’utilisation

### Les acteurs

Un **acteur** représente un rôle joué par une **personne, un processus ou un système externe** qui interagit avec le système.

**Représentation classique** : petit bonhomme avec le nom du rôle dessous.
> [!Example] Représentation classique
> ![[fig1.1.png]]

**Représentation alternative** : classeur stéréotypé << actor >>.

> [!Example] Représentation alternative
>![[fig1.2.png]]


**Types d’acteurs :**

- **Principal** : celui qui bénéficie directement d’un cas d’utilisation. Se situe a gauche du système.
- **Secondaire** : celui qui fournit des informations ou services complémentaires. Se situe à droite du système.

**Conseils pour identifier les acteurs :**

- Rechercher tous les rôles externes qui interagissent avec le système.
- Inclure les systèmes ou dispositifs externes (ex. imprimantes, API externes).
- Regrouper les utilisateurs ayant le même rôle sous un seul acteur.
- Vérifier que chaque acteur communique **directement** avec le système.

### Les cas d’utilisation

- Un **cas d’utilisation** décrit une **fonctionnalité observable par un acteur**.

- **Représentation** : ellipse contenant un verbe à l’infinitif (ex. “Retirer de l’argent”).

>![[fig1.3.png]]


- **Variante détaillée** : classeur stéréotypé << use case >> pour inclure attributs ou opérations.

>![[fig1.4.png]]

**Règles à respecter :**

- Décrire le cas **du point de vue de l’acteur**, pas du système.
- Chaque cas doit représenter un service complet, du début à la fin.
- Éviter la redondance et le découpage excessif en sous-cas.
- Ne pas intégrer de notion temporelle : le diagramme montre les interactions, pas la chronologie.

### La frontière du système

- Le système est représenté par un **cadre** :
    - **À l’intérieur** : les cas d’utilisation
    - **À l’extérieur** : les acteurs
    
- Permet de :
    - Définir le **scope du système**
    - Visualiser les **interactions principales**
    - Identifier ce qui est **inclus ou exclu** du système

>![[fig1.5.png]]


### Relations dans le diagramme

#### Relations entre Acteur et Cas d’utilisation

- **Association** : Une relation d'association est chemin de communication entre un acteur et un cas d'utilisation et est représenté un trait continu.

>![[fig1.6.png]]

#### Relations entre cas d’utilisation

Les relations permettent de **montrer les dépendances et interactions entre les cas d’utilisation**.

##### 2 types de relations entre cas d’utilisation

1. **Dépendances stéréotypées** :
    - Inclusion (<< include >>)
    - Extension (<< extend >>)

2. **Généralisation / spécialisation** : héritage entre cas d’utilisation.

- Représentation graphique :
    - Dépendances : flèche en pointillé
    - Généralisation : flèche pleine avec triangle fermé

>![[fig1.7.png]]

###### Relation d’inclusion (<< include >>)

- Un **cas A inclut B** si B est **toujours exécuté** lors du déroulement de A.
    
- Utilité :
    - Factoriser des actions communes à plusieurs cas d’utilisation.
    - Décomposer un cas complexe en sous-cas plus simples.
- Attention :
    - Ne pas abuser de la décomposition → risque de revenir à un découpage fonctionnel trop détaillé.
    - Les cas ne sont pas séquentiels : le diagramme ne représente pas l’ordre temporel.

> Exemple : “Accéder aux informations d’un compte” inclut toujours “S’authentifier”.

![[fig1.8.png]]
###### Relation d’extension (<< extend >>)

- Un **cas A étend B** si A **peut être exécuté en option** pendant B.
- Caractéristique : **optionnel et conditionnel**, souvent lié à une règle métier.
- Point d’extension : moment précis où A peut intervenir dans B.
- Représentation : flèche pointillée avec stéréotype << extend >>, conditions indiquées dans une note.

> Exemple : “Vérifier le solde” étend “Retirer de l’argent” seulement si le montant > 20 €.


###### Relation de généralisation

- Un **cas A est une généralisation de B** si B est un **cas particulier de A**.
- Sert à montrer une **relation hiérarchique** et facilite le réemploi des cas communs.
- Graphiquement : flèche pleine avec triangle fermé pointant vers le cas **le plus général**.

> Exemple : “Consulter un compte” → généralisation de “Consulter le solde via Internet”.

###### En résumé

- **Inclusion (`<< include >>`)** : le cas A inclut obligatoirement le comportement du cas B.
    - Exemple : “Consulter solde” inclut obligatoirement “S’authentifier”.
- **Extension (`<< extend >>`)** : le cas A peut s’exécuter **optionnellement** pendant le cas B.
    - Exemple : vérification du solde uniquement si le retrait dépasse 20 €.
- **Généralisation / spécialisation** : un cas B est une variante plus spécifique du cas A.

#### Relations entre Acteur et  Acteur

- **Généralisation** : un acteur A peut être substitué par un acteur B → B hérite de tous les cas d’A.

![[fig1.9.png]]

Dans l'example ci-dessus le directeur des ventes peut gérer le stock et en plus peux passer une commande et suivre une commande comme le préposé aux commandes.

---

## Description textuelle d’un cas d’utilisation

Pour compléter un diagramme de cas d’utilisation, chaque cas peut être décrit **en texte** afin de préciser le déroulement et les conditions. Cette description se compose généralement de **trois parties** :

### 1. Identification du cas

- **Nom** : un verbe à l’infinitif suivi d’un complément (ex. : _Retirer de l’argent_).
- **Objectif** : résumé de l’intention principale du cas.
- **Acteurs principaux** : ceux qui déclenchent le cas et bénéficient directement du résultat.
- **Acteurs secondaires** : ceux qui fournissent des informations ou reçoivent des données à la fin du cas.
- **Dates** : création et dernières mises à jour.
- **Responsable** : personne ou équipe en charge du cas.
- **Version** : numéro de version pour le suivi.
### 2. Scénarios ou déroulement

Cette partie décrit **le comportement du système et les interactions avec les acteurs** pour chaque cas d’utilisation. L’objectif est de documenter **tous les chemins possibles**, afin que les développeurs et testeurs comprennent précisément comment le système doit réagir.

#### 2.1. Scénario nominal (ou principal)

- Correspond au **déroulement standard** lorsque tout se passe comme prévu.
- Chaque étape décrit **qui fait quoi**, **dans quel ordre**.
- On se place du **point de vue de l’acteur**, pas de la technique interne du système.
- Exemple : Pour _Retirer de l’argent_, le scénario nominal peut être :
    
    1. L’utilisateur insère sa carte.
    2. Le système demande le code PIN.
    3. L’utilisateur saisit le code PIN correct.
    4. Le système affiche le menu des opérations.
    5. L’utilisateur sélectionne _Retirer de l’argent_.
    6. Le système délivre l’argent et met à jour le compte.

#### 2.2. Scénarios alternatifs (ou variantes)

- Décrivent **les chemins différents possibles** selon des choix ou des conditions.
- Ils permettent de modéliser des comportements **optionnels ou alternatifs**.
- Exemple : Dans le scénario _Retirer de l’argent_, si le compte a un solde insuffisant :
    - Le système affiche un message d’erreur et propose de saisir un autre montant.

#### 2.3. Scénarios d’exception (ou erreurs)

- Traitent les **situations imprévues ou erreurs** qui peuvent survenir.
- Ces scénarios sont essentiels pour la **robustesse** du système et la **préparation aux tests**.
- Exemple : Carte invalide ou système hors service :
    - Le système refuse la transaction et indique la raison à l’utilisateur.

#### 2.4. Préconditions

- État ou conditions **qui doivent être respectées avant que le scénario puisse démarrer**.
- Permet de savoir **quand un cas est déclenchable ou non**.

- Exemple :
    - L’utilisateur possède un compte actif.
    - Le distributeur est opérationnel et connecté au réseau bancaire.

#### 2.5. Postconditions

- État ou résultat attendu **après la fin du scénario**, que tout se soit déroulé normalement ou selon les variantes.
- Permet de vérifier que **le système a atteint l’objectif prévu**.

- Exemple :
    - Le compte de l’utilisateur est débité.
    - L’argent a été délivré.
    - Le solde du compte est mis à jour dans le système.


### 3. Informations complémentaires (optionnel)

- Spécifications non fonctionnelles : performances, sécurité, contraintes légales…
- Contraintes techniques : interfaces avec d’autres systèmes, formats de données, etc.
- Description de l’interface graphique ou des écrans impliqués.

---

