---
title: Introduction aux principes d’analyse informatique
description: Cette note présente les bases de l’analyse informatique
---

[[Index Analyse Informatique|🔙Index]] - [[Diagramme de cas d'utilisation|➡️Diagramme de cas d'utilisation]]

---
## Introduction 

### Pourquoi un cours d’analyse informatique ?

L’informatique ne se résume pas au code : **avant de développer, il faut comprendre le besoin**.  
L’analyse informatique sert à :

- Identifier ce que l’utilisateur veut réellement.
- Traduire ces besoins en modèles clairs et exploitables.
- Servir de **pont entre les métiers** (utilisateurs, managers) et les **développeurs**.

Sans analyse, on risque de construire un logiciel **inutile, coûteux ou mal adapté**.

> 💡 **Note** : L’analyse est au logiciel ce que le plan est à l’architecte. On ne construit pas une maison sans plan.

### Objectifs du cours

L'objectif est d'être capables de :

- Comprendre le rôle de l’**analyse informatique**.
- Modéliser un système avec **UML** en respectant les bonnes pratiques (abstraction, modularité, réutilisabilité).
- Maîtriser les concepts fondamentaux de la **programmation orientée objet**.
- Découvrir la gestion de projet avec **Agile Scrum** et sa vision de l’analyse.


---

## Les métiers de l’analyse

### Analyste métier (Business Analyst)

- Comprend les besoins stratégiques de l’entreprise.
- Reformule les objectifs des utilisateurs en **exigences métier**.

[Fiche métier Business Analyst](https://www.icd-ecoles.com/metiers/business-analyst)
### Analyste fonctionnel (Functionnal analyst)

- Traduit les besoins en **spécifications techniques détaillées**.
- Fournit des documents, modèles et diagrammes aux développeurs et testeurs.

> ⚠️ **Attention** :
> 
> - L’analyste métier se concentre sur le **“quoi”** (les besoins).
> - L’analyste fonctionnel sur le **“comment”** (les solutions).

[Fiche métier Analyste fonctionnel](https://www.hellowork.com/fr-fr/metiers/analyste-fonctionnel.html)

---

## Comprendre l’analyse informatique

### 1. Pourquoi parler d’analyse ?

L’analyse informatique est une **étape préliminaire** dans tout développement logiciel.  
Elle répond à deux grandes questions :

- **Que faut-il construire ?** (les besoins)
- **Pourquoi et pour qui ?** (le contexte métier et organisationnel)

👉 Sans analyse, on risque de développer un système qui ne sert pas vraiment aux utilisateurs ou qui ne respecte pas les règles de l’entreprise.

### 2. Pourquoi parle-t-on de projet informatique ?

Parce que l’analyse ne se fait pas dans le vide : elle est toujours intégrée à un **projet informatique**.

- Un projet est **une démarche organisée** qui a :
    
    - un **début** (lancement),
    - une **fin** (livraison),
    - et des **[[ITILv4 Fundation#Livrable et Résultat|livrables]]** (documents d’analyse, logiciels, tests…). 

- Le but d’un projet est de **répondre à un besoin concret** exprimé par une entreprise ou des utilisateurs.

👉 **Exemple** : développer une application de gestion de stock pour une entreprise.  
Avant de coder, il faut analyser les flux d’informations, les règles de gestion, et les contraintes organisationnelles.

C’est là que l’analyse intervient.

### 3. Pourquoi parle-t-on de SI et de SIA ?

Un projet informatique n’existe pas tout seul : il répond à un besoin d’une **[[ITILv4 Fundation#Organisation|organisation]]** (entreprise, administration, école, etc.).  
Et pour comprendre ce besoin, il faut distinguer deux niveaux :

#### Le Système d’Information (SI)

C’est **l’ensemble de tout ce qui permet de gérer l’information dans une [[ITILv4 Fundation#Organisation|organisation]]**, que ce soit **avec ou sans ordinateur**.

Le SI comprend :

- Les **données** (clients, produits, commandes, dossiers…).
- Les **règles de gestion** (ex. : "une commande doit être validée par un responsable si elle dépasse 10 000€").
- Les **processus métiers** (ex. : "comment une facture est créée, validée, puis envoyée").
- Les **supports utilisés** (logiciels, mais aussi papiers, mails, tableaux Excel, téléphone…).

👉 Exemple : Dans un hôpital, le **SI** inclut les dossiers patients (papier ou informatisés), les règles médicales, les procédures internes, et la communication entre médecins et infirmiers.

#### Le Système d’Information Automatisé (SIA)

C’est la **partie du SI qui est informatisée** et qui fonctionne grâce aux ordinateurs.

Le SIA comprend :

- Les logiciels utilisés (ERP, CRM, application web…).
- Les bases de données.
- Les serveurs, ordinateurs et réseaux.

👉 Exemple : Dans l’hôpital, le **SIA** inclut le logiciel de gestion des patients, la base de données des rendez-vous, et les serveurs qui stockent les radios.

### 4. Mise en perspective

- **Projet** = cadre et objectifs → créer le site web.
- **SI** = comprendre l’organisation et ses informations → comment la librairie gère les ventes et les stocks aujourd’hui.
- **SIA** = solution automatisée → le site web et les bases de données qui remplacent les processus manuels.

> ⚡ **En bref** : L’analyse informatique est le **pont** qui relie le **besoin réel (SI)** à la **solution technique automatisée (SIA)**, dans le cadre d’un **projet concret**.

#### Exemple : Librairie en ligne

1. **Projet**

    - Développer un site web de vente de livres.
    - Objectif : permettre aux clients de consulter le catalogue et passer des commandes.
    - Livrables : maquettes, documentation, site web fonctionnel.

2. **Système d’Information (SI)**
    
    - Ensemble de **tout ce qui gère l’information dans la librairie** :
        - Suivi des stocks (papier ou tableurs),
        - Règles de vente (réduction, livraison),
        - Organisation interne (commandes, facturation).

3. **Système d’Information Automatisé (SIA)**
    
    - La **partie automatisée** du SI :
        - Base de données des livres et des clients,
        - Site web pour commander,
        - Logiciel de gestion des stocks.



---

## Les défis de l’analyste

- **Communication** : risque de malentendus entre client, analyste et développeurs
- **Qualité** (ISO 8402) : le produit doit répondre aux besoins exprimés **et implicites**.
- **Choix techniques** : chaque décision impacte le projet (ex. base de données, architecture).

> Exemple : si l’analyste oublie un besoin essentiel, le logiciel sera inutilisable, même s’il est “bien codé”.

---

##  Le rôle concret de l’analyste fonctionnel

L’**analyste fonctionnel** est le **pont entre le métier et le développement**. Ses missions principales :

- Traduire les besoins des utilisateurs en modèles et spécifications exploitables.
- Documenter clairement les analyses pour les développeurs et testeurs.
- Communiquer avec les parties prenantes et impliquer les utilisateurs (product owner) à chaque étape.

### Outils et méthodes courants

- **Gestion de projets / tickets** : [Jira](https://www.atlassian.com/software/jira), [Trello](https://trello.com/), [Monday.com](https://monday.com)
- **Modélisation UML** : diagrammes de classes, séquence, cas d’utilisation ([UML.org](http://www.uml.org/))
- **Bases de données** : Modèle Conceptuel de Données (MCD), diagrammes entité-relation ([Lucidchart](https://www.lucidchart.com/pages/fr/er-diagram-tool) )
- **API** : REST ([REST API Tutorial](https://restfulapi.net/)), SOAP
- **Méthodologie** : [Agile / Scrum](https://www.cprime.com/resources/what-is-agile-what-is-scrum/)

> 💡 **Astuce** : La réussite d’un projet dépend autant de la **qualité de l’analyse** que de la compétence technique des développeurs.

### Du rôle de l’analyste fonctionnel aux modèles

L’analyste fonctionnel ne se contente pas de recueillir des besoins : il doit les formaliser pour qu’ils soient compréhensibles par les développeurs, testeurs et parties prenantes.

Pour cela, il utilise des **modèles** :

- **Représentation simplifiée** de la réalité complexe de l’entreprise.
- **Respecte des conventions** pour être compréhensible par tous.
- **Se concentre sur l’essentiel**, sans inclure de détails superflus.

> 💡 **Exemple** : un schéma de base de données montre uniquement la structure des informations (tables et relations) et non toutes les données réelles.

Ces modèles servent de langage commun entre le métier et la technique. C’est ici qu’intervient **UML (Unified Modeling Language)**, le standard de modélisation utilisé pour représenter visuellement les systèmes logiciels.



---

## 📐 UML (Unified Modeling Language)

### Définition

L’**UML** est un **langage visuel standardisé** permettant de **modéliser des systèmes logiciels**.  
Il sert à créer des représentations compréhensibles par **les développeurs, analystes et parties prenantes**.

**Objectifs principaux :**

- **Spécification** : décrire ce que doit faire le système.
- **Visualisation** : représenter graphiquement les composants et interactions.
- **Documentation** : conserver un historique clair et utilisable.
- **Communication** : faciliter la collaboration entre équipes techniques et métiers.


> 💡 **Exemple concret** : un diagramme de classes UML montre les entités d’un site e-commerce (Client, Commande, Produit) et leurs relations, sans exposer toutes les données réelles.


### Points forts

- **Universel et standardisé** : reconnu dans l’industrie.
- **Polyvalent** : applicable à différents types de systèmes et méthodologies.
- **Facilite la communication** : sert de langage commun entre analystes, développeurs et utilisateurs.
- **Support à la conception orientée objet** : idéal pour les systèmes modulaires et réutilisables.

### Limites

- **Nécessite un apprentissage** : syntaxe et conventions à maîtriser.
- **Ne définit pas de processus** : UML est un langage, pas une méthodologie.
- **Certaines représentations sont limitées** : par exemple, il n’est pas toujours adapté pour modéliser les données complexes d’une base de données (préférer MCD ou ERD).

---
## Les trois points de vue UML

Pour bien modéliser un système en UML, il faut l’observer sous **trois angles complémentaires** :  
le **fonctionnel**, le **statique** et le **dynamique**.  
Chaque point de vue répond à une question différente sur le système et s’appuie sur des diagrammes spécifiques.


> [!note] Les trois points de vue classiques de modélisation
>![[fig 0.1.png]]


### 1️⃣ Le point de vue **fonctionnel**

> **Question clé :** _Qu’est-ce que le système doit faire ?_

Ce point de vue décrit les **besoins et les fonctionnalités** du système **du point de vue des utilisateurs** (ou d’autres systèmes).  
Il est utilisé lors de la phase d’**analyse** pour comprendre **les attentes métiers** avant toute conception technique.

#### 🔹 Diagrammes associés :

- **Diagramme de cas d’utilisation** → décrit les interactions entre acteurs et système.
- **Diagramme d’activités** → détaille les processus ou scénarios d’utilisation.

#### 💡 Exemple :

Dans un site e-commerce :

- Un **acteur “Client”** peut _passer une commande_, _ajouter un produit au panier_ ou _payer en ligne_.
- Le diagramme permet de visualiser toutes ces interactions à haut niveau, avant de penser au code.

### 2️⃣ Le point de vue **statique**

> **Question clé :** _De quoi le système est-il composé ?_

Ce point de vue modélise la **structure interne** du système, c’est-à-dire les **objets, classes et relations** entre eux.  
C’est la base de la **programmation orientée objet**.

#### 🔹 Diagrammes associés :

- **Diagramme de classes** → montre les classes, attributs, méthodes et relations (association, héritage).
- **Diagramme d’objets** → illustre un exemple concret du diagramme de classes avec des instances.
- **Diagramme de paquetages** → organise le système en modules ou sous-systèmes.

#### 💡 Exemple :

Une classe `Commande` contient une liste de `Produit` et une méthode `calculerTotal()`.  
Le diagramme de classes permet de comprendre cette structure sans encore parler de base de données ni d’interface.


### 3️⃣ Le point de vue **dynamique**

> **Question clé :** _Comment le système se comporte-t-il dans le temps ?_

Ce point de vue montre **le fonctionnement du système** :  
comment les objets interagissent, comment un processus se déroule, et comment un objet change d’état.

#### 🔹 Diagrammes associés :

- **Diagramme de séquence** → montre les échanges entre objets au fil du temps.
- **Diagramme d’activités** → illustre un flux de traitement ou un workflow.
- **Diagramme d’états (statechart)** → décrit les changements d’état d’un objet.
- **Diagramme de communication / interaction** → visualise les liens et messages échangés entre objets.

#### 💡 Exemple :

Dans un distributeur automatique :

1. Le client insère sa carte.
2. Le système demande le code PIN.
3. La banque vérifie le solde.
4. L’argent est distribué.  
    Ce scénario est illustré par un **diagramme de séquence**.

---

> 🔗 **Ressources utiles** :
> 
> - [UML.org](http://www.uml.org/) – définition et guide officiel
> - [PlantUML](https://plantuml.com/fr/) – créer vos diagrammes UML rapidement
> - [Lucidchart UML](https://www.lucidchart.com/pages/fr) – outil visuel en ligne
> - [Visual Paradigm](https://online.visual-paradigm.com/) – modélisation UML professionnelle


---

[[Index Analyse Informatique|🔙Index]]  - [[Diagramme de cas d'utilisation|➡️Diagramme de cas d'utilisation]]