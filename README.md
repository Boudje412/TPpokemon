# TPpokemon
1. Le diagramme respecte-t-il le principe de responsabilité unique ? (1 point)

    Non

2. Pourquoi ? (1 point)

    L'interface Pokemon dispose du soin d'un pokemon ou du renomage de celui-ci en plus de toutes ses autres méthodes ce qui ne respecte pas la responsabilité unique 

3. Le diagramme respecte-t-il le principe Open/Closed ? (1 point)

    Non

4. Pourquoi ? (1 point)

    Si on ajoute le TypeVol, L'interface Type doit être modifié afin d'y ajouter calculerDegatsContreVol()

5. Le diagramme respecte-t-il le principe de substitution de Liskov ? (1 point)

    Non

6. Pourquoi ? (1 point)

    Car en ajoutant TypeVol on ne peut pas extend depuis l'interface Type

7. Le diagramme respecte-t-il le principe de ségrégation des interfaces ? (1 point)

    Non

8. Pourquoi ? (1 point)

    Car l'interface Pokemon gere le systeme de combat, le nommage et une partie de la captivité

9. Le diagramme respecte-t-il le principe d'inversion des dépendences ? (1 point)

    Non

10. Pourquoi ? (1 point)

    L'interface Pokemon dépend des classes TypeEau, TypeFeu et TypePlante 

11. Proposez un diagramme alternatif (2 point)


