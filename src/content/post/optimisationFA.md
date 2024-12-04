---
publishDate: 2024-11-26T00:00:00Z
title: Optimisation de formes et application en fabrication additive
excerpt: L'optimisation de formes de structures mécaniques est de nos jours incontournable dans l’industrie mécanique (automobile, aéronautique etc.).
image: /assets/images/optitopo.jpg
tags:
  - Optimisation topologique
  - Simulation numérique
---

L'optimisation de formes de structures mécaniques est de nos jours incontournable dans l’industrie mécanique (automobile, aéronautique etc.). Pour rester dans la compétition mondiale, les entreprises se doivent de concevoir des structures qui, en plus de respecter des performances mécaniques précises, doivent être moins coûteuses avec des délais de plus en plus courts. Les ingénieurs doivent alors réaliser des formes pour leurs structures qui soient un meilleur compromis entre les performances mécaniques et fonctionnelles, le poids, le coût de fabrication...

## Intégrer l'optimisation de formes dès les phases amont

Les ingénieurs sont donc amenés à intégrer l’optimisation de formes de structures mécaniques dans leur démarche de conception dès les phases amont. Cette nouvelle démarche doit intégrer dès le début de la conception les exigences du cahier des charges comme les contraintes de fabrication, les performances thermomécaniques, les exigences de poids et de coût, en accord avec tous les acteurs du projet. Par cette méthode de travail liée au développement des algorithmes mathématiques de résolution des problèmes d’optimisation de structures, on reproduit « de façon automatique grâce à des logiciels de modélisation numérique et d’optimisation ce qu’un concepteur réalise de manière manuelle, en y ajoutant de nombreux avantages » (Allaire & Jouve, 1999) : 
- Possibilité de balayer un espace de conception plus large.
- Possibilité de réaliser des calculs automatiques.
- Possibilité de mettre en place des plans d’expériences et de créer ainsi des fonctions d’approximation si besoin.
- Possibilité d’atteindre un optimum grâce à des algorithmes de plus en plus performants.

Ces méthodes dites « automatiques » permettent de trouver des solutions optimales pour les structures, même si d’après (Roy et al., 2008), en réalité, l’identification d’une conception optimale pour un problème industriel est difficile en raison de la taille des problèmes et du manque de connaissance qu’on peut avoir sur les sujets.

## Typologie d'optimisation

Dans le cas de l’optimisation de formes de structures mécaniques, les variables concernées sont les formes des structures elles-mêmes. C’est une optimisation plus compliquée que l’optimisation traditionnelle où les variables sont par exemple les propriétés des matériaux. On distingue trois grandes catégories d’optimisation de formes de structures en mécanique (Allaire, 2007) : 
- **Optimisation de formes paramétriques** : les formes sont paramétrées par un nombre réduit de variables (par exemple, une épaisseur, un diamètre, des dimensions). Cette méthode permet de trouver les dimensions optimales des formes paramétrées sans explorer de nouvelles formes admissibles.
- **Optimisation de formes géométriques** : à partir d’une forme initiale, on varie la position des frontières de la forme. Cela permet de trouver les contours optimisés pour les structures sans changer leur topologie initiale (par exemple, le nombre de trous en deux dimensions).
- **Optimisation de formes topologiques** : on cherche, sans restriction explicite ou implicite, la meilleure forme possible, quitte à changer de topologie.

Cette dernière catégorie est particulièrement adaptée à la phase de conception de nouvelles pièces car elle permet d’explorer des concepts innovants tout en respectant une partie du cahier des charges.

## Mariage avec la fabrication additive 

L’association entre la fabrication additive et l’optimisation topologique offre de nombreux avantages :
- Minimisation du volume de matière utilisé, y compris pour les supports.
- Fabrication de pièces respectant des cahiers des charges stricts, notamment en termes de tenue mécanique.
- Liberté de forme grâce au procédé de fabrication couche par couche, permettant d’imprimer directement les formes proposées par l’optimisation topologique sans réadaptation.

Un problème d’optimisation topologique peut être défini comme la recherche de la meilleure distribution de matière dans un espace de conception donné (Calvel, 2004). Le domaine de référence \( \Omega (\Omega \in \mathbb{R}^{3}) \) est défini par un espace de conception, des conditions limites et des chargements. L’objectif est de trouver la meilleure distribution de matière (déterminer le sous-domaine \( \omega \) de \( \Omega \) rempli avec de la matière). On cherche ainsi à minimiser une fonction objectif \( f \) sous contraintes afin de déterminer \( \chi \) : 

\[
\min_{\omega \subset \Omega} : [C] \to \omega \in \chi
\]

En pratique, la fonction objectif \( f \) peut représenter le poids, le volume ou l’énergie de déformation. Les variables de conception peuvent inclure les dimensions, le type de matériau, etc., tandis que les contraintes peuvent inclure le déplacement, la masse, la fréquence, etc.

## Références

- (Abramovitch et al., 2010) H. Abramovitch et al., « Smart tetrachiral and hexachiral honeycomb: Sensing and impact detection », *Compos. Sci. Technol.*, vol. 70, no 7, p. 1072‑1079, juill. 2010, doi: 10.1016/j.compscitech.2009.07.017.
- (Allaire, 2007) G. Allaire, *Conception optimale de structures*. New York: Springer, 2007.
- (Allaire & Jouve, 1999) G. Allaire et F. Jouve, « Structural Optimization by the Homogenization Method », in *IUTAM Symposium on Variations of Domain and Free-Boundary Problems in Solid Mechanics*, Springer Netherlands, 1999, p. 293‑300.
- (Calvel, 2004) S. Calvel, « Conception d’organes automobiles par optimisation topologique », Université Paul Sabatier - Toulouse III, 2004.
- (Galantucci et al., 2008) L. M. Galantucci et al., « Study of compression properties of topologically optimized FDM made structured parts », *CIRP Ann. - Manuf. Technol.*, vol. 57, no 1, p. 243‑246, 2008, doi: 10.1016/j.cirp.2008.03.009.
