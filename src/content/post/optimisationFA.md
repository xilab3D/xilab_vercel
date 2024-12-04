---
publishDate: 2024-11-26T00:00:00Z
title: Optimisation de formes et application en fabrication additive 
excerpt: L'optimisation de formes de structures mécaniques est de nos jours incontournable dans l’industrie mécanique (automobile, aéronautique etc.). 
image: '~/assets/images/optitopo.png'
tags:
  - Optimisation topologique
  - Simulation numérique
---

L'optimisation de formes de structures mécaniques est de nos jours incontournable dans l’industrie mécanique (automobile, aéronautique etc.). Pour rester dans la compétition mondiale, les entreprises se doivent de concevoir des structures qui, en plus de respecter des performances mécaniques précises, doivent être moins coûteuses avec des délais de plus en plus courts. Les ingénieurs doivent alors réaliser des formes pour leurs structures qui soient un meilleur compromis entre les performances mécaniques et fonctionnelles, le poids, le coût de fabrication ... 

## Intégrer l'optimisation de formes dès les phases amont

Les ingénieurs sont donc amenés à intégrer l’optimisation de formes de structures mécaniques dans leur démarche de conception dès les phases amont. Cette nouvelle démarche doit intégrer dès le début de la conception les exigences du cahier des charges comme les contraintes de fabrication, les performances thermomécaniques, les exigences de poids et de coût ... en accord avec tous les acteurs du projet. Par cette méthode de travail liée au développement des algorithmes mathématiques de résolution des problèmes d’optimisation de structures, on reproduit « de façon automatique grâce à des logiciels de modélisation numérique et d’optimisation ce qu’un concepteur réalise de manière manuelle, en y ajoutant de nombreux avantages » (Allaire & Jouve, 1999) : 
- Possibilité de balayer un espace de conception plus large. 
- Possibilité de réaliser des calculs automatiques. 
- Possibilité de mettre en place des plans d’expériences et de créer ainsi des fonctions d’approximation si besoin. 
- Possibilité d’atteindre un optimum grâce à des algorithmes de plus en plus performants
Ces méthodes dites « automatiques » permettent de trouver des solutions optimales pour les structures même si d’après (Roy & al, 2008), en réalité, l’identification d’une conception optimale pour un problème industriel est difficile en raison de la taille des problèmes et du manque de connaissance qu’on peut avoir sur les sujets.

## Typlogie d'optimisation

Dans le cas de l’optimisation de formes de structures mécaniques, les variables concernées sont les formes des structures elles-mêmes. C’est une optimisation plus compliquée que l’optimisation traditionnelle où les variables sont par exemple les propriétés des matériaux. On distingue trois grandes catégories d’optimisation de formes de structures en mécanique que sont (Allaire, 2007) : 
- « l’optimisation de formes paramétriques où les formes sont paramétrées par un nombre réduit de variables (par exemple, une épaisseur, un diamètre, des dimensions) ». Cette catégorie d’optimisation ne permet pas l’exploration d’autres formes possibles ou admissibles mais elle permet de trouver (de calculer) les dimensions optimales des formes paramétrées (formes existantes dans le modèle). 
- « l’optimisation de formes géométriques où, à partir d’une forme initiale, on varie la position des frontières de la forme ». Cette optimisation grâce à la variation des frontières permet de trouver les contours optimisés pour les structures sans changer leur topologie initiale, c’est à dire le nombre de trous en deux dimensions.
- « l’optimisation de formes topologiques où l’on cherche, sans aucune restriction explicite ou implicite, la meilleure forme possible quitte à changer de topologie ».
Cette troisième catégorie d’optimisation est une méthode appropriée pour la phase de conception d’une nouvelle pièce car elle permet d’explorer de nouveaux concepts et de trouver des solutions dans les zones difficiles d’accès pour les ingénieurs. Avoir la possibilité d’explorer des espaces de conception avant de fournir une forme spécifique permet d’obtenir des formes tout à fait innovantes tout en respectant une partie du cahier des charges. Mais cette exploitation nécessite une compréhension des algorithmes sous-jacents et une intégration de la connaissance métier afin d’orienter fonctionnellement l’optimisation. 

## Mariage avec la fabrication additive 

Le mariage entre la fabrication additive et l’optimisation topologique est prometteur sur de nombreux points :
- la possibilité de minimiser le volume matière utilisé que ce soit la matière ou le support. Le gain peut être très important par exemple sur les pièces en acier notamment pour les problèmes de masse.
- la fabrication d’une pièce respectant un cahier des charges de tenue mécanique. Dans le cas d’une non disponibilité du comportement de la pièce, l’objectif est de tester sa tenue à son propre poids tout en respectant le critère de minimisation cité précédemment.
- les libertés de forme fabricable grâce au procédé de couche par couche permettraient de directement imprimer les formes proposées par l’optimisation topologique. Une réadaptation du modèle n’est ainsi plus nécessaire.
Le caractère innovant repose sur la possibilité de marier les deux technologies que sont l’optimisation topologique (ou des optimisations dédiées à la fabrication additive) et la fabrication additive. Par ce fait la modélisation de la connaissance dédiée à la fabrication additive pour l’optimisation topologique est également une innovation. Un autre point innovant sera apporté par l’utilisation de la méthodologie développée pour alléger les pièces tout en gardant leur aspect extérieur avec également la possibilité d’optimiser l’intérieur des modèles. Cette technique d’optimisation pourra ainsi remplacer les formes répétitives non contextuelles utilisées classiquement pour l'allègement en FA (nid d’abeilles par exemple) (Abramovitch & al, 2010) (Galantucci & al, 2008).

Il existe globalement 2 façons d’intégrer l’optimisation topologique à la fabrication additive :
- toute la pièce peut être optimisée et les formes de départ sont très globales avec simplement les fonctions qui contraignent la pièce
- la peau extérieure (ou une partie) de la pièce est fonctionnelle et ne peut pas être modifiée.

Un problème d’optimisation topologique peut être défini comme la recherche de la meilleure distribution de matière dans un espace de conception donné (Calvel, 2004). Le domaine de référence $`\Omega (\Omega \in R^{3}) `$ est défini par un espace de conception, des conditions limites et des chargements. L’objectif est ainsi de trouver la meilleure distribution de matière (déterminer le sous domaine ω de Ω rempli avec de la matière). On cherche ainsi à minimiser une fonction objectif f sous contraintes afin de déterminer $`\chi `$ : 

$$\min_{\omega \subset \Omega}:[C] \to \omega \in \chi$$

En pratique la fonction objectif f peut être représentée par le poids, le volume, l’énergie de déformation ; les variables de conception par les dimensions, le type de matériau, … et les contraintes par le déplacement, la masse, la fréquence, … 

## Références

(Abramovitch & al, 2010) H. Abramovitch et al., « Smart tetrachiral and hexachiral honeycomb: Sensing and impact detection », Compos. Sci. Technol., vol. 70, no 7, p. 1072‑1079, juill. 2010, doi: 10.1016/j.compscitech.2009.07.017.

(Allaire, 2007) G. Allaire, Conception optimale de structures. New York: Springer, 2007.

(Allaire & Jouve, 1999) G. Allaire et F. Jouve, « Structural Optimization by the Homogenization Method », in IUTAM Symposium on Variations of Domain and Free-Boundary Problems in Solid Mechanics, P. Argoul, M. Frémond, et Q. S. Nguyen, Éd. Springer Netherlands, 1999, p. 293‑300.

(Calvel, 2004) S. Calvel, « Conception d’organes automobiles par optimisation topologique », Université Paul Sabatier - Toulouse III, 2004.

(Galantucci & al, 2008) L. M. Galantucci, F. Lavecchia, et G. Percoco, « Study of compression properties of topologically optimized FDM made structured parts », CIRP Ann. - Manuf. Technol., vol. 57, no 1, p. 243‑246, 2008, doi: 10.1016/j.cirp.2008.03.009.
