# Graine NG

Ce projet sert de graine pour initialiser les développements d'une nouvelle application basée sur Angular JS.

# Installation les outils

Afin de développer une application angularJS, il est nécessaire d'installer un ensemble d'outils sur le poste de travail.

Ces outils permettent de fabriquer, tester, déboguer une application angularJS

L'installation doit se faire dans l'ordre : Node.js, npm (inclu avec Node.js), Gulp, Karma et Protactor

## Node.js

**Node.js** est une plateforme construite sur le moteur JavaScript de Chrome. 
Il est utilisé pour installer et exécuter des outils permettant de fabriquer et tester les applications angularJS.

**Node.js** doit être installé sur le poste de travail, il s’agit d’un installateur Windows classique que l’on peut télécharger à l’adresse suivante : 
[**https://nodejs.org**](https://nodejs.org)

Il faut télécharger le package _Windows Installer (.msi)_ et l'exécuter. 
L’installation demande d’accepter, la licence, de choisir un répertoire d’installation et les de choisir les packages a installer 
(par défaut il installe l’ensemble des packages, il faut laisser au moins _Node.js runtime_, _npm package manager_ et _Add to PATH_).

## npm

**npm** est le gestionnaire de paquets de _Node.js_, il permet également d'installer des applications ou des packages _Node.js_ disponibles sur le repository _npm_. 
L'installation a été faite en même temps que **Node.js**.

Dans le cadre de l’utilisation à travers un proxy, il faut le configurer.
La configuration se fait dans le fichier **.npmrc** où il faut ajouter les lignes suivantes :

    proxy=http://[URL du proxy]:[Port du proxy]
    https-proxy=http://[URL du proxy]:[Port du proxy]

Si le fichier **.npmrc** n'existe pas, il suffit de le créer ou de copier celui présent dans le répertoire d'installation de **npm**. 

La configuration de **npm** peut être faite à plusieurs niveaux et se cumule : installation, utilisateur, projet.
 
* Au niveau _installation_
    * Configuration valable pour toutes les installations des produits
    * Où : **\[Le répertoire d'installation de Node.js\]/node_modules/npm/.npmrc**
* Au niveau _utilisateur_
    * Configuration valable uniquement pour l'utilisateur
    * Où : **%USERPROFILE%/.npmrc**
* Au niveau _projet_
    * Où : **\[Le répertoire du projet\]/.npmrc**
    * Configuration valable uniquement pour le projet


## Gulp

**Gulp** est l'exécuteur de tâche utilisé pour effectuer les différents taches de construction, tests et lancement de des applications angularJS.
Il est packagé sous forme de package et s'installe via _npm_. 
Pour avoir accès à l'exécutable en ligne de commande, il faut installer le client Gulp en global sur votre système.
Dans un terminal, exécutez la commande suivante d'installation globale :

    npm install –g gulp-cli

L’option **-g** a pour effet d’installer le package au niveau global, c’est a dire au niveau de l’installation de Node.js. 

Ensuite, pour vérifier son installation sur votre système, tapez la commande :

    gulp --version

Vous devez opbtenir son numéro de version si tout est correct.

## karma-cli

**karma-cli** permet de lancer les tests Karma en mode ligne de commande. 
Pour utiliser Karma dans Eclipse il faut également installer karma-cli.

Exécutez la commande :

    npm install -g karma-cli

L'installation globale est indispensable pour ce package.
Une fois le package installé, on est capable d’exécuter des tests dans son IDE ou depuis un terminal.

## Protractor

**Protractor** permet de faire des tests de bout en bout d’une application développée sur AngularJS. 
Il exécute les tests de manière automatique directement dans le navigateur et interagit avec l’application de la même façon que le ferait un vrai utilisateur. 
Pour avoir une interaction avec le navigateur Protractor s’appuie sur **Sélénium**.

L’ensemble de la documentation de Protractor est visible à l’adresse suivante: [http://angular.github.io/protractor/#/](http://angular.github.io/protractor/#/)

Exécutez la commande :

    npm install -g protractor


# L'outillage avec Gulp

Le fichier **gulpfile.js** est le point d'entrée par défaut de l'outillage basé sur Gulp. Dans cette graine, il sert :

* A déterminer la configuration globale de l'outillage
* A importer les différentes tâches Gulp réparties dans différents fichiers
* A définir des tâches Gulp : par exemple la tâche par défaut mais il peut aussi contenir les votres 

Les tâches de la graine sont réparties par thème dans plusieurs fichiers se trouvant dans le répertoire **outillage**
du projet ou dans des modules externes sur le repository Nexus.  

Répertoire **outillage** :

* [**outillage/build.js**](#build.js) : construction et qualité de l'application 			  	
* [**outillage/serveur.js**](#serveur.js) : démarre un serveur de devs dans différent mode : simple, observation des changements de code, proxy, ... 					 
* [**outillage/unit-test.js**](#unit-test.js) : exécution des tests unitaires 		 
* [**outillage/e2e-test.js**](#e2e-test.js) : exécution des tests de bout en bout (End to end) 	

Module externe :
 
* [**Module outillage-pic**](http://slzkh8.sii24.pole-emploi.intra:8080/AITFMOWiki/pharos/doku.php?id=pnngangular:04demarrergraine:start#integration_continue)
  : tâches utilitaires pour les jobs de la PIC					 				       


## La configuration dans _gulpfile.js_

Ce fichier contient une variable nommée **options** qui contient la totalité de la configuration de l'outillage.
Cette variable est un objet JavaScript qui définit les valeurs de certains attributs utilisés par les différentes tâches.   
Par exemple :

* **src** : le répertoire source de l'application
* **dist** : le répertoire de fabrication des fichiers à distribuer
* **e2eTests** : le répertoire des tests de bout en bout
* **reports** : le répertoire des rapports : tests unitaires, couverture de code, ...
* **pkg** : la copie du contenu du fichier _package.json_
* **envs** : les environnements des serveurs 
*	**mavenDeploy** : la configuration spécifique au déploiement via Maven
* ...

### La configuration de _package.json_ utilisés par différentes tâches 

Les attributs obligatoires :

* **name** : le nom de l'application
* **version** : la version du projet

Les attributs optionnels dans le fichier _package.json_ :

* **contextRoot** : le contexte racine de l'application qui détermine le nom du répertoire d'accueil dans la distribution finale. 
Par défaut, le contexte racine de l'application est le nom de l'application (voir **name**) 
* **groupId** : l'identification du groupe Maven
* **artifact** : l'identification de l'artifact Maven

Leur utilisation est précisée au fur et à mesure dans chaque tâche.


## La tâche _default_

C'est la tâche appellée par défaut, c.a.d., sans aucun paramètre dans la ligne de commande :

	gulp   

Elle appelle simplement la tâche **quality** définie ci-dessous.

# <a name="build.js"/>Construction de l'application : outillage//build.js   

La construction de l'application s'effectue en lançant l'une des tâches principales suivantes :

* [**dist**](#dist) : fabrique les fichiers de distribution de l'application
* [**dist-maven-deploy**](#dist-maven-deploy) : fabrique les fichiers de distribution de l'application et les déploie sur le repository Maven
  
Les tâches principales utilisent d'autres tâches que le développeur peut lancer individuellement en fonction de ses besoins :  
 
* **clean** : supprime tous les répertoires de construction dont celui de distribution et des rapports de tests
* **quality** : vérifie la qualité du code en appelant la tâche **lint**
* **copy** : copie tous les fichiers de l'application, hormis les fichiers JS, du répertoire source de l'application vers le répertoire du contexte racine de l'application de la distribution
* [**lint**](#lint) : vérifie la qualité du code JavaScript
* [**maven-deploy**](#maven-deploy) : déploie les fichiers de distribution vers un repository en utilisant une commande Maven
     
## <a name="dist"/>La tâche _dist_ 

Cette tâche enchaine séquentiellement les tâches **clean**, **quality**, **test**, **copy** puis fabrique les fichiers de distribution de l'application.  
La fabrication des fichiers JavaScript enchaîne les actions suivantes :

  * Récupération des fichiers JS avec leur déclaration dans le fichier **index.html** grâce au plugin **gulp-useref** 
  * Création des fichiers sourcemaps correspondant aux fichiers JS avec le plugin **gulp-sourcemaps**
  * Minification des fichiers JS avec le plugin **gulp-uglify**
  * Calcul d'un n° de révision des fichiers JS avec le plugin **gulp-rev**
  * Remplacement du nom de fichiers avec révision dans le fichier **index.html** avec le plugin **gulp-rev-replace** 

_FIXME : Ajouter les étapes de préparation pour les fichiers HTML et CSS dans la graine_

Comme la tâche **copy**, cette tâche utilise, si elle existe, la variable **contextRoot** du _package.json_ pour déposer les différents fichiers fabriqués de la distribution.

La règle de construction est : [options.dist][/[options.pkg.contextRoot] || [options.pkg.name]] 

## <a name="maven-deploy"/>La tâche _maven-deploy_

### Pré-requis
Pour utiliser cette tâche, il est nécessaire que Maven soit installé sur la machine et configuré dans votre environnement.

**A noter** : les différents exemples d'URLs de repositories Nexus que vous trouverez ci-dessous ou dans les fichiers du projet pointent sur le repository PoleEmploi-Snapshots.
N'oubliez pas de modifier l'URL vers le bon repository.

### Principe
Cette tâche est basé sur le plugin [gulp-maven-deploy](https://www.npmjs.com/package/gulp-maven-deploy) lui-même basé 
sur le plugin [maven-deploy](https://www.npmjs.com/package/maven-deploy).  
La tâche _maven-deploy_ gère la configuration par fichier optionnelle puis appelle la fonction publique _mavenDeploy_.   
La fonction _mavenDeploy_ existe aussi pour permettre aux développeurs de définir leur propre tâche si nécessaire. 
Elle assemble l'objet de configuration final de déploiement à partir des différentes options de configuration 
avant d'appeler le plugin [gulp-maven-deploy](https://www.npmjs.com/package/gulp-maven-deploy) avec. 


### Configuration de base
Il s'agit d'un objet Javascript contenant les éléments suivant :

* groupId  : l'identifiant du groupe Maven (obligatoire)
* artifactId : l'identifiant de l'artifact Maven (par défaut {name} de _package.json_)
* buildDir : le répertoire de construction utilisé par Maven (par défaut "dist") 
* finalName : le nom du fichier final packagé (par défaut {name} de _package.json_)
* type : le type de package, "zip", "war" et "jar" sont supporté (par défaut "zip")
* fileEncoding : l'encodage des fichiers (par défaut "utf-8")
* repositories : un tableau de repositories Maven de destination (obligatoire)


Exemple d'objet :

	{
		"groupId"      : "fr.pe.projet.exemple", 
		"artifactId"   : "mon-exemple",
		"repositories" : [              
			{
				"id": "snapshots",
				"url": "http://slzk3i.sii24.pole-emploi.intra:8081/nexus/content/repositories/PoleEmploi-Snapshots/"
			}
		]
	}

**A noter**: La configuration réellement utilisée est celle du plugin [maven-deploy](https://www.npmjs.com/package/maven-deploy) avec l'attribut _config_.
Mais pour simplifier la syntaxe, les différentes configurations présentées ci-dessous n'utilisent pas l'attribut _config_, il est rajouté au dernier moment par la fonction _mavenDeploy_.

### Priorités des configurations
La configuration est assemblée au niveau de la fonction _mavenDeploy(pConfig)_ qui gère aussi les priorités en fonctions des différentes provenances.
 
1. Configuration en provenance du paramètre _pConfig_ : utilisation via un fichier ou de façon programmatique   
2. Configuration en provenance de la variable **options.mavenDeploy** dans le fichier _gulpfile.js_
3. Configuration en provenance du fichier _package.json_ 
4. Configuration par défaut
 
### Cumul des configurations
En suivant l'ordre des priorités, les différents attributs se cumulent dans l'objet de configuration final.
Par exemple : 

Si le fichier **maven-deploy-conf.json** contient l'objet :

	{
		"repositories" : [              
			{
				"id": "snapshots",
				"url": "http://slzk3i.sii24.pole-emploi.intra:8081/nexus/content/repositories/PoleEmploi-Snapshots/"
			}
		]
	}

Et si le fichier **package.json** contient l'objet :

	{
		"groupId"      : "fr.pe.projet.exemple", 
		"artifactId"   : "mon-exemple"
	}

L'objet final de configuration est :

	{
		"groupId"      : "fr.pe.projet.exemple", 
		"artifactId"   : "mon-exemple",
		"repositories" : [              
			{
				"id": "snapshots",
				"url": "http://slzk3i.sii24.pole-emploi.intra:8081/nexus/content/repositories/PoleEmploi-Snapshots/"
			}
		]
	}

### Configuration par défaut

* artifactId :{artifactId} **OU** {name} de _package.json_
* buildDir : {dist} de la variable _options_
* finalName : {name} de _package.json_
* type : zip
* fileEncoding : utf-8


### Configuration par fichiers

La tâche _maven-deploy_ charge le fichier de configuration s'il existe.  
Par défaut, le nom du le fichier est **maven-deploy-conf.json**.  
Si le paramètre **--deploy** est présent en ligne de 
commande, la valeur de ce paramètre est ajouté au nom du fichier avec la règle suivante : **maven-deploy-conf[-[Valeur du paramètre deploy]].json**

#### Exemples 

* Pour la commande **_gulp maven-deploy_**, le fichier recherché est **maven-deploy-conf.json**  
* Pour la commande **_gulp maven-deploy --deploy snap_**, le fichier recherché est **maven-deploy-conf-snap.json**  
* Pour la commande **_gulp maven-deploy --deploy alpha_**, le fichier recherché est **maven-deploy-conf-alpha.json**  

### Configuration dans la variable _options_ de _gulpfile.js_
L'attribut **mavenDeploy** peut être ajouté dans la variable _options_ du fichier _gulpfile.js_ et contenir un objet de configuration de base avec un ou plusieurs de ses attributs.  
Exemple :  

	var options = {
		src: './app',
		dist: './dist',
		e2eTests: './e2e-tests',
		reports: './reports',
		pkg: pkg,
		envs: { 
			... 
		},
		mavenDeploy:{
			artifactId: 'pe-mon-projet-test-deploy',
			buildDir: 'dist',
			type: 'zip'
		}
	};


### Utilisation programmatique
C'est l'utilisation directe de la fonction _mavenDeploy_.    
La différence par rapport à l'utilisation de la tâche **maven-deploy** est que la configuration par fichier n'est pas disponible. 

Exemple de tâche appellant la fonction _mavenDeploy_ :

	var build = require('./outillage/build.js')(options);

	gulp.task('exempleDeploiement', function () {
		var config = {
			groupId: 'fr.pe.mon.projet',
			artifactId: 'mon-exemple-projet',
			repositories: [
				{
					id: 'maven-repo',
					url: 'http://pole-emploi.intra/nexus/content/repositories/MonNexus/'
				}
			]
		};
		build.mavenDeploy(config);
	});


## <a name="dist-maven-deploy"/>La tâche _dist-maven-deploy_

### Pré-requis

Les mêmes contraintes que les tâches [**dist**](#dist) et [**maven-deploy**](#maven-deploy).

### Principe
Cette tâche séquence les tâches [**dist**](#dist) puis [**maven-deploy**](#maven-deploy).


## <a name="lint"/>La tâche _lint_

Cette tâche est basée sur le Plugin [gulp-jshint](https://github.com/spalger/gulp-jshint).
Ce plugin encapsule l'utilisation de [JSHint](http://jshint.com) qui permet d'analyser le code Javascript pour détecter des usages non
recommandés.  
Les alertes à remonter sont configurées à l'aide du fichier _.jshintrc_ situé à la racine du projet.  
Tous les détails des options possibles dans la [documentation des options de JSHint](http://jshint.com/docs/options/)

_FIXME : Ajouter la configuration .jshintrc utilisée_


# <a name="serveur.js"/>Démarrer un serveur de devs

Le fichier **outillage/serveur.js** contient les tâches permettant de tester son application en local, à partir d'un serveur HTTP lancé automatiquement.

## Tâches

* **connect** : lance un serveur distribuant l'application
* **connect:watch** : lance un serveur distribuant l'application et prend en compte à la volée les modifications des fichiers HTML, JS ou CSS
* **connect:dist** : lance un serveur distribuant l'application distribuée (contenu dans le répertoire _dist_, après avoir lancé la tache **dist**)

Le serveur écoute sur le port 8888 et supporte le rechargement automatique de la page en cas de modification de fichiers.
L'application est disponible à partir de l'url **http://localhost:8888**

## Proxies

Au démarrage du serveur, il est possible de préciser un environnement dans la ligne de commande. Sans précision, c'est l'environnement par defaut qui est démarré.
Cet environnement permet de sélectionner une configuration des proxies pour router les requêtes à destination du backend vers le bon environnement.

### Exemples

	// Environnement par défaut : "defaut"
    gulp connect

	// Environnement précisé : "tuu"
    gulp connect --env tuu

### Définition des proxies
La définition des proxies se trouve au début du fichier **gulpfile.js**. Pour définir un nouvel environnement, il suffit d'ajouter un attribut dans l'objet **envs**

	envs: {
		defaut: {},
		tuu: {
			proxy: {
				forward: {
					'/api': 'http://localhost:8082/',
					'/albums': 'http://localhost:8082/',
					'/auteurs': 'http://localhost:8082/'
				}
			}
		}
	}

## Utilisation

Pour lancer un serveur HTTP et tester l'application source, tapez la commande :

    gulp connect

Pour tester l'application source en cours de développement et observer directement les effets dans votre navigateur, il faut utiliser **connect:watch**.
Cette tâche observe chaque modification des fichiers HTML ou Javascript du projet et relance un rechargement de la page en cours dans le navigateur. 
En même temps, si un fichier Javascript est modifié, les tests unitaires sont relancés. Dans la console, tapez :

    gulp connect:watch

Pour lancer un serveur HTTP et tester l'application finale à distribuer, tapez :

    gulp connect:dist




# <a name="unit-test.js"/>Exécution des tests unitaires : _outillage/unit-test.js_  

Le script **outillage/unit-test.js** contient les tâches permettant de lancer les tests unitaires avec Karma.
Les fichiers Javascript à charger dans le navigateur pour lancer les tests sont définis dans la variable files.

## La tâche _test_

Cette tâche lance les tests unitaire sur le poste local en utilisant Karma (configuration dans le fichier karma.conf.js) et le navigateur PhantomJS (Navigateur sans interface graphique)

NB : La même tâche est utilisée lorsque les tests sont lancés dans la PIC.

Pour lancer les tests en ligne de commande, taper la commande suivante :

    gulp test



# <a name="e2e-test.js"/>Exécution des tests End-to-End : _outillage/e2e-test.js_

Le script **outillage/e2e-test.js** contient les tâches permettant de lancer les tests d'intégration (les fichiers js dans le répertoire e2e-tests) avec Protactor.

## La tâche _e2e_

Cette tâche permet de lancer les tests d'intégration en local sur le poste. La connexion avec le navigateur Firefox se fait directement depuis la tâche.

## La tâche _e2e:pic_

Cette tâche exécute les tests End-to-End à partir de la PIC en se connectant à un serveur selenium distant pour lancer le navigateur.

## Utilisation

Pour lancer les tests End-To-End, il faut d'abord lancer un serveur exécutant l'application avec la tâche **connect** :

    gulp connect

Dans une autre fenêtre, lancez ensuite l'exécution des tests avec la tâche **e2e** :

    gulp e2e

Par défaut, c'est Firefox qui est lancé en mode automatique pour exécuter les tests. 
