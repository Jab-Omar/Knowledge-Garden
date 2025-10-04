---
title: Les bases de l'algorithmique
description:
date: 2025-10-04
---
[[Index initiation Programmation|🔙Index]] -

---

## Qu’est-ce qu’un algorithme ?

### Définition simple

Un algorithme, c’est comme une **recette de cuisine**.

- On a des **ingrédients** → ce sont les **données d’entrée**.
- On suit des **étapes précises** → c’est le **traitement**.
- On obtient un **plat final** → c’est le **résultat (sortie)**.

En informatique, un algorithme est donc une **suite d’instructions** qu’on exécute dans un ordre précis pour résoudre un problème.

### Caractéristiques d’un bon algorithme

Un algorithme doit avoir trois qualités essentielles :

1. **Fini** : il doit toujours se terminer, pas de boucle infinie.
2. **Précis** : chaque étape doit être claire et compréhensible.
3. **Exécutable** : chaque instruction doit pouvoir être réalisée facilement.

### Exemple simple

Problème : calculer la somme de deux nombres.

Pseudo-code :

```abap
Lire A
Lire B
C ← A + B
Afficher C
```

Explication :

- On lit A et B → comme demander à deux personnes leurs âges.
- On additionne A et B → c’est le traitement, comme mélanger deux ingrédients.
- On affiche le résultat → on montre la somme trouvée.

### À retenir

Un algorithme se résume à : **Entrée → Traitement → Sortie**

Exemple concret :

- Entrée : "Je veux traverser la rue."
- Traitement : "Je regarde le feu tricolore."
- Sortie : "Si le feu est vert, je traverse. Sinon, j’attends."

Si tu veux, je peux maintenant faire le **point 2 : Variables et types de données** dans ce même style clair et imagé, prêt à coller dans Obsidian. Veux que je fasse ça ?


---
## Les types de données et variables

### Variables

Une **variable** est comme une **boîte** dans laquelle on peut **mettre et changer une valeur**.

- Exemple : `age` peut contenir `18` aujourd’hui et `19` demain.

### Constantes

Une **constante** est une **valeur qui ne change jamais**, comme le nombre `π = 3,14`.

- Exemple : `TAUX_TVA = 0,2`

### Types de données de base

1. **Numériques**
    - **Entiers** : nombres sans virgule (`5`, `-12`)
    - **Réels** : nombres avec virgule (`3,14`, `-0,5`)

2. **Caractères / chaînes**

    - Une seule lettre ou un texte complet.
    - Exemple : `"A"`, `"Bonjour"`

3. **Booléens**

    - Valeur **Vrai** ou **Faux**
    - Utilisé pour répondre à des questions ou tester des conditions
    - Exemple : `estMajeur = Vrai`

### Exemple concret

```abap
age ← 20
nom ← "Alice"
estInscrit ← Vrai
PI ← 3.14  // constante
```

- `age` est une variable entière
- `nom` est une chaîne de caractères
- `estInscrit` est un booléen
- `PI` est une constante


>💡 À retenir : une variable peut **changer**, une constante reste **fixe**.

### Exemple pratique

Imaginons que tu achètes plusieurs articles dans un magasin.

1. Tu sais le **prix d’un article** et la **quantité achetée**.
2. Tu veux calculer le **prix total**.

On peut utiliser des **variables** pour stocker ces informations :

```abap
prixArticle ← 5        // prix d’un article en euros
quantite ← 3           // nombre d’articles achetés
prixTotal ← prixArticle * quantite
Afficher prixTotal
```

### Explication :

- `prixArticle` est une variable qui contient le prix d’un article.
- `quantite` est une variable qui contient combien d’articles tu achètes.
- `prixTotal` est une variable qui calcule le résultat de la multiplication.

Si demain tu changes la quantité à `5` ou le prix à `6`, il suffit de modifier **les variables**, et le calcul reste correct.

>💡 **Conclusion pratique :**  
Les variables sont utiles pour **stocker des valeurs qui peuvent changer** et **réutiliser ces valeurs dans des calculs** ou pour prendre des décisions.


---

## Les opérateurs
### Affectation

L’affectation sert à **donner une valeur à une variable**.

```
x ← 5    // la variable x contient maintenant 5
```

### Opérateurs arithmétiques

Ils servent à **faire des calculs** :

- `+` addition
- `-` soustraction
- `*` multiplication
- `/` division
- `mod` reste de la division

Exemple :

```
a ← 10
b ← 3
c ← a + b    // c devient 13
d ← a mod b  // d devient 1
```

### Opérateurs relationnels

Ils servent à **comparer des valeurs** :

- `=` égal
- `≠` différent
- `<` inférieur
- `>` supérieur
- `≤` inférieur ou égal
- `≥` supérieur ou égal

Exemple :

```pseudo
age ← 20
age ≥ 18   // vrai
age < 18   // faux
```

### Opérateurs logiques

Ils servent à **combiner plusieurs conditions** :

- `ET` → toutes les conditions doivent être vraies
- `OU` → au moins une condition doit être vraie
- `NON` → inverse la valeur (vrai devient faux, faux devient vrai)

#### Exemple pratique en pseudo-code

```Pseudo
age ← 20
permis ← Vrai

Si (age ≥ 18 ET permis = Vrai) alors
    Afficher "Vous pouvez conduire"
Sinon
    Afficher "Vous ne pouvez pas conduire"
```

**Explication :**

- La condition vérifie **deux choses en même temps** : que la personne a 18 ans ou plus **et** qu’elle a un permis.
- Si les deux conditions sont vraies → message positif
- Sinon → message négatif


>💡 **À retenir :**  
Les opérateurs permettent de **faire des calculs, comparer des valeurs et prendre des décisions** dans un algorithme, en pseudo-code simple et lisible.

---
## Les structures de contrôle et leur utilisation

Les **structures de contrôle** déterminent **l’ordre d’exécution** des instructions dans un algorithme. On peut **les combiner**, mais il faut le faire de manière **claire et logique**.

### Séquence

- **Comment l’utiliser** : simplement écrire les instructions les unes après les autres.

```
Lire A
Lire B
C ← A + B
Afficher C
```

- **Règle** : les instructions s’exécutent **dans l’ordre** où elles apparaissent.
>- 💡 Comme suivre une **recette étape par étape**.

### Alternative (conditionnelle)

- **Comment l’utiliser** : on teste une condition, et selon le résultat, on choisit un chemin.

```pseudo
Si A > B alors
    Afficher "A est plus grand"
Sinon
    Afficher "B est plus grand"
```

- On peut **imbriquer des alternatives** à l’intérieur d’autres alternatives ou boucles.
- 💡 Comme **prendre un chemin selon la situation**.

### Répétition (boucle)

- **Comment l’utiliser** : on répète une ou plusieurs instructions jusqu’à ce qu’une condition change.

```pseudo
Pour i de 1 à 5 faire
    Afficher i
```

- On peut **mettre des alternatives à l’intérieur des boucles**, ou appeler des fonctions.
>- 💡 Comme **répéter une action jusqu’à réussir**.



### Appel de fonction / procédure

- **Comment l’utiliser** : on écrit le bloc de code une fois, puis on l’appelle chaque fois qu’on en a besoin.

```pseudo
Fonction Carré(x)
    Retourner x * x

Afficher Carré(4)
Afficher Carré(7)
```

- On peut **appeler une fonction dans une boucle ou une alternative**.

>💡 Comme une **mini-recette réutilisable**.

### Branchement

- **Comment l’utiliser** : sauter directement d’une instruction à une autre.

```pseudo
Si erreur alors
    Aller à fin
```

- ⚠️ On l’évite car le code devient **difficile à lire et à corriger**.

### Peut-on mélanger les structures de contrôle ?

- Oui, **on peut combiner séquence, alternative, boucle et fonctions**.
- Exemple pratique :

```pseudo
Pour i de 1 à 5 faire
    Si i mod 2 = 0 alors
        Afficher i, "est pair"
    Sinon
        Afficher i, "est impair"
```

- Ici, on **combine une boucle et une alternative**, ce qui est logique et lisible.
- ❌ On **évite de mélanger avec des branchements `goto`**, car cela rend le code confus.

>💡 **Résumé simple** :
>- **Séquence** → toujours dans l’ordre
>- **Alternative** → choisir selon une condition
>- **Boucle** → répéter une action
>- Branchement → sauter des instructions (rare, à éviter)
>- On peut **combiner séquence, alternative, boucle et fonctions**, mais toujours de manière **claire et logique**.    


---
## Les procédures et fonctions (modularité)

Les **procédures et fonctions** permettent de **réutiliser des blocs de code** sans les réécrire à chaque fois. C’est ce qu’on appelle la **modularité**.

### Pourquoi les utiliser

- Éviter de **répéter le même code**
- Rendre le programme **plus clair et organisé**
- Faciliter **la correction et la maintenance**

>💡 Imagine une **mini-recette** que tu peux utiliser plusieurs fois dans différents plats.

### Différence entre fonction et procédure

- **Procédure** : exécute des instructions **sans renvoyer de valeur**
- **Fonction** : exécute des instructions et **renvoie une valeur**

### Exemple de procédure

```pseudo
Procédure AfficherBonjour()
    Afficher "Bonjour !"

AfficherBonjour()   // Appel de la procédure
```

- À chaque appel, la procédure affiche "Bonjour !"

### Exemple de fonction

```
Fonction Carré(x)
    Retourner x * x

Afficher Carré(4)   // affiche 16
Afficher Carré(7)   // affiche 49
```

- La fonction prend une **valeur en entrée**, effectue un calcul et renvoie le résultat.

### Comment les utiliser dans un algorithme

On peut appeler une fonction ou une procédure dans :
- Une **boucle**
- Une **alternative**
- Une **autre fonction**
#### Exemple pratique

```pseudo
Fonction EstPair(x)
    Retourner x mod 2 = 0

Pour i de 1 à 5 faire
    Si EstPair(i) alors
        Afficher i, "est pair"
    Sinon
        Afficher i, "est impair"
```

- La fonction `EstPair` est utilisée dans une **boucle** et une **alternative**.   
- Le code reste **clair, logique et facile à lire**.
### À retenir

- Les fonctions et procédures permettent de **réutiliser le code**
- Elles rendent le programme **plus lisible et modulable**
- Elles peuvent être combinées avec **boucles et conditions** sans problème

---
## Les tableaux 

Un **tableau** est une **rangée de cases numérotées** qui peuvent contenir des valeurs du même type.

- Chaque case a un **indice** pour retrouver sa valeur.  
    💡 Pense à une **rangée de boîtes numérotées**.

### Déclaration

```pseudo
Tableau notes[5] de Réel
```

- Crée un tableau `notes` avec 5 cases pour des nombres.

### Remplir un tableau

#### a) Manuellement

```pseudo
notes[1] ← 12
notes[2] ← 15
notes[3] ← 8
notes[4] ← 10
notes[5] ← 20
```

#### b) Avec une boucle

```pseudo
Pour i de 1 à 5 faire
    Lire notes[i]  // l'utilisateur entre les valeurs
```

#### c) Avec calcul

```pseudo
Pour i de 1 à 5 faire
    notes[i] ← i * 2
```

### Afficher toutes les valeurs

```pseudo
Pour i de 1 à 5 faire
    Afficher notes[i]
```

### Exemple pratique : calculer la moyenne

```pseudo
somme ← 0

Pour i de 1 à 5 faire
    Lire notes[i]
    somme ← somme + notes[i]

moyenne ← somme / 5
Afficher "La moyenne est : ", moyenne
```

### À retenir

- Tableau = **rangée de cases numérotées**
- Case = **boîte pour une valeur**
- Indice = **numéro de la case**
- Les valeurs peuvent être **attribuées manuellement, par lecture ou par calcul**    
- On utilise souvent des **boucles** pour parcourir toutes les cases


---

## Méthodologie pour concevoir un algorithme

Pour créer un algorithme efficace, il faut suivre **des étapes simples et logiques**.

### Comprendre le problème

- Lire attentivement l’énoncé
- S’assurer de **comprendre ce qu’on doit faire**

>💡 Astuce : reformule le problème avec tes mots.

### Identifier les données d’entrée et de sortie

- **Entrées** : ce que l’utilisateur ou le programme fournit
- **Sorties** : ce que l’algorithme doit produire

### Décomposer le problème en étapes simples

- Diviser le problème en **petites actions faciles à exécuter**
- Exemple : pour calculer la moyenne
    
    1. Lire toutes les notes
    2. Calculer la somme
    3. Diviser par le nombre de notes
    4. Afficher le résultat
### Écrire l’algorithme

- Utiliser du **pseudo-code** ou un **diagramme**
- Les instructions doivent être **claires et précises**
### Vérifier et tester

- Tester l’algorithme avec **des exemples concrets**
- Vérifier que les résultats sont **corrects**
- Corriger si nécessaire

>💡 Astuce : **un bon algorithme est simple, clair et fonctionne pour tous les cas possibles**

---
## Représentation graphique (organigrammes)

Un **organigramme** permet de **représenter un algorithme sous forme de schéma**.

- Très utile pour **visualiser le déroulement des instructions**
- Permet de **repérer facilement les erreurs**

### Symboles standards

|Symbole|Signification|Exemple d’usage|
|---|---|---|
|Ovale|Début / Fin|Début du programme, Fin du programme|
|Parallélogramme|Entrée / Sortie|Lire une valeur, Afficher un résultat|
|Rectangle|Traitement / Instruction|Calcul, affectation de variable|
|Losange|Condition / Décision|Si…Alors…Sinon|

### Exemple concret : somme de deux nombres

**Pseudo-code**

```pseudo
Début
    Lire A
    Lire B
    C ← A + B
    Afficher C
Fin
```

**Organigramme (représentation graphique)**

```
   [Ovale] Début
        |
  [Parallélogramme] Lire A
        |
  [Parallélogramme] Lire B
        |
    [Rectangle] C ← A + B
        |
  [Parallélogramme] Afficher C
        |
   [Ovale] Fin
```

### Exemple avec condition : vérifier l’âge pour conduire

**Pseudo-code**

```pseudo
Début
    Lire age
    Si age ≥ 18 alors
        Afficher "Vous pouvez conduire"
    Sinon
        Afficher "Vous ne pouvez pas conduire"
Fin
```

**Organigramme**

```
         [Ovale] Début
              |
     [Parallélogramme] Lire age
              |
        [Losange] age ≥ 18 ?
          /       \
        Oui        Non
       /            \
[Parallélogramme]  [Parallélogramme]
Afficher message    Afficher message
       \            /
        \          /
          [Ovale] Fin
```

>💡 **Astuce pédagogique :**

- Les **ovales** = début et fin
- Les **parallélogrammes** = lecture / affichage
- Les **rectangles** = calcul ou instruction
- Les **losanges** = condition / décision    


---