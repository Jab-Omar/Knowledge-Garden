---
title: Introduction à l’électricité et à l’électronique
description:
date: 2025-10-04
---
## Organisation du réseau électrique


> [!Example] Organisation du réseau électrique
> ![[organisationDuRéseauElec.png]]

### Production : comment on fabrique l’électricité

L’électricité **ne se crée pas toute seule** — elle est produite dans des **centrales électriques** à partir d’une autre forme d’énergie : eau, vent, chaleur, soleil…

🧩 **Types de production :**

- **Hydraulique** → l’eau d’un barrage fait tourner une turbine
- **Thermique** → la vapeur (charbon, gaz, nucléaire) fait tourner une turbine
- **Éolienne** → le vent fait tourner les pales d’une éolienne
- **Solaire** → les panneaux transforment la lumière en courant électrique

⚙️ **Principe de base :**

1. Une **turbine** tourne (mouvement mécanique).
2. Cette rotation entraîne un **alternateur** (grande dynamo).
3. L’alternateur transforme le mouvement en **courant alternatif (AC)**.
4. Ce courant passe ensuite dans un **transformateur** pour **augmenter la tension** avant le transport.

🧠 **Pourquoi augmenter la tension ?**  
Quand on élève la tension, le courant devient plus faible.  
👉 Moins de courant = **moins de pertes d’énergie** dans les câbles.


### Transport : comment l’électricité voyage

Une fois produite, l’électricité doit parcourir **des centaines de kilomètres** jusqu’aux villes et bâtiments.  
Pour éviter les pertes, on utilise des **lignes à haute tension (HT)**.

⚡ **Tensions typiques :**

- Transport longue distance → **63 000 V à 400 000 V (HT)**
- Distribution régionale → **15 000 V à 20 000 V (MT)**
- Usage domestique → **230 V (BT)**

🧠 **Pourquoi cette différence de tension ?**  
La **puissance électrique** dépend de la **tension (U)** et du **courant (I)** :

> 💡 **Puissance = Tension × Courant (P = U × I)**

Si on **augmente la tension (U)**, on peut **diminuer le courant (I)** pour transporter la même puissance.  
👉 Résultat : moins de pertes et de chaleur dans les câbles.



### Distribution : rendre l’électricité utilisable

Une fois arrivée près des utilisateurs, la tension doit être abaissée à un niveau **sûr et utilisable**.  
C’est le rôle des **postes et cabines de distribution**.

⚙️ **Étapes :**

1. Le courant arrive en **HT ou MT** dans une cabine.
2. Un **transformateur** abaisse la tension à **230V ou 400V (BT)**.
3. Cette basse tension est ensuite distribuée dans les bâtiments via les **tableaux électriques**.

🧩 **Exemples :**

- **Maison** → 230V monophasé (prise classique).
- **Entreprise / usine** → 400V triphasé (machines, serveurs, moteurs).

🧠 **Protection :**  
Chaque circuit passe par un **disjoncteur** et un **interrupteur différentiel** pour éviter les risques d’électrocution ou de court-circuit.

### Fourniture : l’arrivée de l’électricité dans le bâtiment

La **fourniture** correspond au **point de connexion entre le réseau public et le bâtiment**.  
C’est ici que l’électricité devient “la vôtre”.

⚡ **Éléments clés :**

- **Ligne d’alimentation** (MT ou BT) → relie le réseau au bâtiment.
- **Compteur électrique** → mesure la consommation (relevée par le fournisseur).
- **Tableau principal** → distribue l’électricité dans le bâtiment.

🧩 **Exemples selon le type de bâtiment :**

- **Maison individuelle** → raccordement BT (230V) depuis la rue.
- **Immeuble / PME** → arrivée en MT, transformée sur place.
- **Usine / data center** → arrivée directe en HT, cabine de transformation interne.


🧠 **Pourquoi c’est important :**

- Le **type de fourniture** (HT, MT ou BT) détermine le matériel et les règles de sécurité.
- Toute modification électrique (ajout d’armoires, machines, baies serveurs) doit **tenir compte du type de raccordement**.
- En cas de HT sur site, **seuls des techniciens agréés** peuvent intervenir.


---

## 2. Courant alternatif vs courant continu

### 2.1 Courant alternatif (AC)

⚡ Le **courant alternatif (AC)** change de **sens et d’intensité périodiquement**.

- En Europe : **50 Hz** (50 changements de sens par seconde).
    
- Produit naturellement par les **alternateurs**.
    

**Avantages :**

- Facile à **transformer** (grâce aux transformateurs).
    
- Idéal pour le **transport et la distribution** d’énergie.
    

**Usages typiques :**

- Réseau domestique 230V AC
    
- Appareils électroménagers, moteurs, éclairage
    

### 2.2 Courant continu (DC)

⚡ Le **courant continu (DC)** circule **dans un seul sens**, avec une **tension constante**.

**Produits par :**

- Piles, batteries, alimentations stabilisées.
    

**Usages typiques :**

- Circuits électroniques et informatiques (5V, 12V DC)
    
- Chargeurs d’appareils, ordinateurs, LED, etc.
    

🧠 **Différence clé :**  
L’AC est utilisé pour **transporter l’énergie**, le DC pour **alimenter les composants électroniques**.

---

## 3. Transformateurs et alimentation

### 3.1 Rôle du transformateur

Un **transformateur** permet de **modifier la tension** d’un courant **alternatif** sans perte majeure d’énergie.

🧩 Exemple :

- HT → BT : 20 000 V → 230 V AC
    
- Principe : **induction électromagnétique** entre deux bobines.
    

### 3.2 Alimentation en courant continu

Les équipements électroniques nécessitent du **courant continu (DC)**.  
Une **alimentation** convertit donc le **230V AC** du secteur en **DC stable** :

⚙️ Étapes :

1. **Transformation** : abaisse la tension AC (ex. 230V → 12V)
2. **Redressement** : transforme AC en DC
3. **Filtrage et régulation** : stabilise la tension

🧠 **Exemple concret :**

- Un chargeur d’ordinateur transforme 230V AC → 19V DC.

---

## 4. Distribution et sécurité

### 4.1 Cabine haute tension (HT)

Les **cabinets HT** permettent de **recevoir, transformer et redistribuer** la tension provenant du réseau électrique.  
Elles sont utilisées dans les **bâtiments industriels, hôpitaux, data centers**, etc.

⚡ Une cabine HT contient :

- Transformateur HT/BT
    
- Cellules de protection et de coupure
    
- Dispositifs de mesure et de sécurité
    

### 4.2 Distribution à 230V AC

Dans les bâtiments, la tension standard est :

- **230V AC** entre phase et neutre (monophasé)
    
- **400V AC** entre phases (triphasé, utilisé pour les machines industrielles)
    

### 4.3 Sécurité et contrôle

🧠 **Règles essentielles :**

- Toujours **couper l’alimentation** avant toute intervention.
    
- Utiliser des **disjoncteurs différentiels** pour protéger les personnes.
    
- Respecter les **normes d’installation** selon le lieu (habitat, bureau, industrie).
    

⚡ Les normes (comme la NF C 15-100 en France) définissent :

- La **section des câbles**
    
- Les **protections électriques**
    
- Les **conditions d’installation** (humidité, température, etc.)
    

---

## 5. Choix du matériel (câbles, éclairage, etc.)

### 5.1 Types de câbles

Le choix d’un câble dépend de la **tension**, de la **puissance** et de l’**environnement**.

🧩 Exemples :

- **XVB** : câble rigide, utilisé en installation fixe (habitation, bâtiment)
    
- **XGB** : câble armé, plus résistant, pour milieux industriels ou souterrains
    

### 5.2 Taille (section) des câbles

La **section (mm²)** dépend de l’**intensité du courant** et de la **distance** :

|Usage typique|Section (mm²)|Exemple|
|---|---|---|
|Éclairage|1,5 mm²|Circuits d’ampoules|
|Prises standard|2,5 mm²|Prises domestiques|
|Appareil puissant (four, machine)|4 à 6 mm²|Cuisinière, radiateur|

🧠 Un câble trop fin → échauffement → risque d’incendie.

---

## Résumé / Points à retenir

⚡ **L’électricité** est produite par conversion d’énergie mécanique → électrique.  
⚡ **Le courant alternatif (AC)** est utilisé pour le transport et la distribution.  
⚡ **Le courant continu (DC)** est utilisé pour les circuits électroniques.  
⚡ **Les transformateurs** permettent d’adapter la tension AC.  
⚡ **Les alimentations** convertissent AC → DC pour les appareils.  
⚡ **La sécurité** repose sur la coupure, la protection différentielle et le respect des normes.  
⚡ **Le choix du câble** dépend du type d’installation et de l’intensité du courant.

🧠 **En résumé :**  
L’électricité suit une chaîne complète — _production → transport → transformation → distribution → utilisation_ — qu’il faut comprendre pour concevoir des systèmes fiables et sûrs.

---

Souhaites-tu que je te crée aussi une **version avec liens Obsidian internes** (ex. `[[Courant alternatif]]`, `[[Transformateur]]`, etc.) pour mieux relier tes futures notes du cours ?