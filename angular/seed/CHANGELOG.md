# 0.2.0

* Ajout des tests sur les fichiers de distributions
* Introduction des modules serveur.js et pic.js

# 0.1.7

## Evolutions
* Gestion du séquencement des tâches dépendantes de **dist**
    * Création de la tâche **dist:prepare** pour séquencer : **clean**, **quality**, **test**, **copy** 
* Ajout des tâches
    * **maven-deploy** 
    * **dist-maven-deploy**
    * **quality**
        * Dépendante de **lint**
* Mise à jour de la tâche par défaut vers **quality**
* Gestion du contexte de l'application
    * Configuration optionnelle avec l'attribut **contextRoot** dans le fichier _package.json_
    * Priorisation entre **contextRoot** et **name**
    * Prise en compte dans les tâches **copy** et **dist**
* Mise à jour du README
* Création du CHANGELOG 

## Corrections

* Tâche **lint**
    * Passage de JsLint sur l'ensemble des fichiers JS de la hiérarchie des répertoires à partir de _options.src_
* Contournement du bug Gulp pour faire suivre les erreurs de Karma
    * Arrête le processus si les tests unitaires ne passent pas
