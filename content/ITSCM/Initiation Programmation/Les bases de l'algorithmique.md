---
title: Les bases de l'algorithmique
description:
date: 2025-10-04
---
[[Index initiation Programmation|🔙Index]] -

---

## Qu’est-ce qu’un algorithme ?

Un **algorithme** est une méthode, une suite d’étapes ordonnées et précises qui permettent de résoudre un problème ou d’obtenir un résultat.

👉 On peut comparer un algorithme à une **recette de cuisine** :

- Les ingrédients = les données d’entrée
- Les étapes de la recette = les instructions
- Le plat final = le résultat (ou sortie)

**Caractéristiques d’un algorithme :**

- **Finitude** : il doit se terminer après un certain nombre d’étapes.
- **Précision** : chaque instruction doit être claire et non ambiguë.
- **Efficacité** : chaque étape doit être réalisable dans un temps fini.

---

## Les structures de contrôle

Un programme (ou algorithme) n’est pas seulement une suite linéaire d’instructions.  
Il existe des **structures de contrôle** qui permettent de :

- Choisir un chemin (conditions),
- Répéter des actions (boucles),
- Organiser le code (fonctions, procédures).

Voici les principales structures de contrôle 👇

### La séquence

C’est la structure la plus simple : **les instructions s’exécutent les unes après les autres**, dans l’ordre où elles apparaissent.

**Exemple :**

```pseudo
Lire A
Lire B
C ← A + B
Afficher C
```

➡️ On lit deux nombres, on calcule leur somme, on l’affiche.


### L’alternative (la condition)

Elle permet de **prendre une décision** en fonction d’une condition.

- **Si… alors…**
- **Si… alors… sinon…**
- **Si… alors… sinon si… sinon…**

**Exemple :**

```pseudo
Si A > B alors
    Afficher "A est plus grand"
Sinon
    Afficher "B est plus grand"
```

➡️ Le programme choisit un chemin selon la valeur des variables.

### La répétition (les boucles)

Permet de **répéter des instructions** plusieurs fois.

- **Tant que… faire…** : on répète tant qu’une condition est vraie.
- **Pour… de… à…** : on répète un nombre connu de fois.
- **Répéter… jusqu’à…** : on répète jusqu’à ce qu’une condition devienne vraie.

**Exemple (boucle Pour) :**

```pseudo
Pour i de 1 à 5 faire
    Afficher i
```

➡️ Affiche les nombres de 1 à 5.

### L’appel de procédure ou de fonction

Permet de **réutiliser un bloc d’instructions** sans le réécrire.

- Une **procédure** exécute des instructions sans renvoyer de résultat.
- Une **fonction** exécute des instructions et renvoie une valeur.

**Exemple :**

```pseudo
Fonction Carré(x)
    Retourner x * x
```

➡️ Appeler `Carré(4)` renvoie `16`.

### Le branchement

Permet de **changer brutalement le cours du programme** (aller à une autre partie du code). On évite d'utiliser le branchement car il rend le code non structuré.

Exemples :

- `break` : sortir d’une boucle.
- `continue` : passer directement à l’itération suivante.
- `goto` (rare, à éviter) : sauter vers une autre ligne du code.

>⚠️ À utiliser avec modération car cela peut rendre un algorithme difficile à lire.

### Schéma récapitulatif

👉 Les **4 grandes familles de structures de contrôle** :

1. **Séquence** → exécuter les instructions dans l’ordre.
2. **Alternative** → choisir entre plusieurs chemins.
3. **Répétition** → répéter un bloc d’instructions.
4. **Appel de procédure/fonction** → réutiliser du code.

>💡 **Astuce pédagogique** :  
>Pour bien comprendre, essaie de transformer des **situations de la vie quotidienne** en algorithmes.  
>Exemples :
>
>- **Alternative** : "S’il pleut → prendre un parapluie, sinon → sortir sans."
>- **Répétition** : "Répéter : avancer d’un pas jusqu’à atteindre la porte."
>- **Fonction** : "Préparer un café" → une procédure réutilisable à volonté.

---







---
[[Index initiation Programmation|🔙Index]] - 