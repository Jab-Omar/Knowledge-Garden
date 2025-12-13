## I. George Boole : Le Père de la Logique Moderne

- **George Boole** (1815–1864) était un mathématicien et logicien anglais.
- **Contribution Majeure :** Il est le créateur de la **logique moderne**, formalisée dans son ouvrage de 1854, _An Investigation of the Laws of Thought_.

L'objectif principal de Boole était de :

1. **Traduire** des idées, des concepts, des propositions et des raisonnements logiques en expressions mathématiques (équations).
2. **Appliquer** à ces équations des lois et des règles algébriques précises.
3. **Retraduire** le résultat mathématique en termes logiques.

Ce processus permet d'analyser et de vérifier la validité des raisonnements de manière **mécanique et rigoureuse**.

## II. L'Algèbre de Boole (Algèbre Binaire)

### Les Propriétés Fondamentales

Ces opérations satisfont à des propriétés essentielles, similaires mais adaptées à l'algèbre classique :

| **Propriété**      | **Règle du ET (Conjonction)**                 | **Règle du OU (Disjonction)***            |
| ------------------ | --------------------------------------------- | ----------------------------------------- |
| **Commutativité**  | $A \cdot B = B \cdot A$                       | $A + B = B + A$                           |
| **Associativité**  | $(A \cdot B) \cdot C = A \cdot (B \cdot C)$   | $(A + B) + C = A + (B + C)$               |
| **Distributivité** | $A \cdot (B + C) = (A \cdot B) + (A \cdot C)$ | $A + (B \cdot C) = (A + B) \cdot (A + C)$ |
| **Idempotence**    | $A \cdot A = A$                               | $A + A = A$                               |
#### 1. Commutativité

La propriété de **commutativité** affirme que l'ordre des termes n'affecte pas le résultat final, que ce soit pour l'opération ET ou pour l'opération OU.

- Pour l'opération **ET** (Conjonction) : **$A \cdot B = B \cdot A$**. Cela signifie qu'obtenir un résultat Vrai en disant "A et B" est exactement la même chose que de dire "B et A". L'ordre de vérification des conditions est sans importance.
- Pour l'opération **OU** (Disjonction) : **$A + B = B + A$**. De même, si le résultat est Vrai lorsque vous avez "A ou B", il le sera aussi si vous inversez l'ordre pour avoir "B ou A".

#### 2. Associativité

La propriété d'**associativité** s'applique lorsque vous enchaînez plusieurs fois la même opération. Elle stipule que la manière dont vous regroupez les termes n'a pas d'impact sur le résultat.

- Pour l'opération **ET** : **$(A \cdot B) \cdot C = A \cdot (B \cdot C)$**. Si vous avez trois conditions, vous pouvez évaluer la condition A ET B en premier, puis mettre ce résultat en ET avec C, ou bien évaluer B ET C en premier et mettre le résultat en ET avec A. Le résultat logique sera le même.
- Pour l'opération **OU** : **$(A + B) + C = A + (B + C)$**. Le même principe s'applique au OU : peu importe si vous mettez "A ou B" entre parenthèses pour l'évaluer en premier, ou si vous mettez "B ou C" entre parenthèses, le résultat final restera logiquement équivalent.

#### 3. Distributivité

La propriété de **distributivité** montre comment l'opération ET et l'opération OU interagissent lorsque l'une est imbriquée dans l'autre.

- **Distributivité de ET sur OU :** **$A \cdot (B + C) = (A \cdot B) + (A \cdot C)$**. C'est la forme habituelle que l'on retrouve en algèbre classique. Elle permet de "développer" l'expression en distribuant le $A$ sur les deux autres termes.
- **Distributivité de OU sur ET :** **$A + (B \cdot C) = (A + B) \cdot (A + C)$**. C'est une propriété **spécifique à l'algèbre de Boole** (et fausse dans l'arithmétique ordinaire !). Elle permet de factoriser ou de développer une expression où le OU est l'opération principale.

#### 4. Idempotence

La propriété d'**idempotence** est très simple. Elle signifie que la répétition d'une condition n'a aucune utilité logique.

- Pour l'opération **ET** : **$A \cdot A = A$**. Si vous dites "Il pleut ET il pleut", cela est logiquement équivalent à dire simplement "Il pleut". Répéter la condition n'en change pas la valeur de vérité.
- Pour l'opération **OU** : **$A + A = A$**. De même, si vous dites "Il fait jour OU il fait jour", cela est logiquement équivalent à dire simplement "Il fait jour".

## III. La Tautologie (Lois Logiques)

### Définition

La **tautologie** est l'ensemble de toutes les **lois logiques**.

En logique formelle, une tautologie est une **proposition composée** qui est **toujours Vraie (1)**, quelle que soit la valeur de vérité (0 ou 1) de ses propositions simples.

> **Exemple Classique de Tautologie :** La **Loi du Tiers Exclu** : $A + \bar{A} = 1$
> 
> - _Interprétation :_ Une proposition est soit Vraie ($A$), soit Fausse ($\bar{A}$). Il n'y a pas de troisième possibilité. Le résultat de l'affirmation ($A$ OU $\text{NON } A$) est toujours Vrai.

### Lois Logiques Célèbres (Tautologies Particulières)

Les lois les plus utilisées sont souvent elles-mêmes des tautologies :

- **Lois de De Morgan :** Elles sont cruciales pour simplifier les circuits et les expressions logiques.
    
    - $\overline{A \cdot B} = \bar{A} + \bar{B}$ (NON (A ET B) = (NON A) OU (NON B))
    - $\overline{A + B} = \bar{A} \cdot \bar{B}$ (NON (A OU B) = (NON A) ET (NON B))
- **Loi de la Double Négation :** $\overline{\bar{A}} = A$
