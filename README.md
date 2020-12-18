# LGTBClub

Proyecto de desarrollo de un sistema de divulgación de información del colectivo LGTB :rainbow_flag:.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![Build Status](https://travis-ci.com/aure-nogueras/LGTBClub.svg?branch=main)](https://travis-ci.com/github/aure-nogueras/LGTBClub) [![CircleCI](https://circleci.com/gh/aure-nogueras/LGTBClub.svg?style=shield)](https://app.circleci.com/pipelines/github/aure-nogueras/LGTBClub?branch=main) [![GitHub Action CI](https://github.com/aure-nogueras/LGTBClub/workflows/Node.js%20CI/badge.svg)](https://github.com/aure-nogueras/LGTBClub/actions)

La descripción del problema se puede consultar [aquí](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema).

## Justificación de la integración continua

La integración continua es muy útil para asegurar la calidad del proyecto que se está desarrollando. De este modo, el uso de tests que se ejecutan de forma automática después de cada modificación que se añade al repositorio permite comprobar su correcto funcionamiento. Esto también es fundamental para el posterior despliegue de la aplicación en la nube.

El primer sistema de integración continua utilizado para este proyecto es *Travis*. De este modo, he accedido a la web a través de mi cuenta de *GitHub*.

![Perfil en Travis](./docs/imgs/travis.png "Perfil en Travis")

A continuación, he seguido los pasos indicados [aquí](https://docs.travis-ci.com/user/tutorial/?utm_source=help-page&utm_medium=travisweb). Primero he accedido a los *settings* de mi perfil en *Travis*. Una vez ahí, se despliega una lista con mis repositorios. He seleccionado el repositorio correspondiente al proyecto, [*LGTBClub*](https://github.com/aure-nogueras/LGTBClub).

![Activación de Travis en el repositorio](./docs/imgs/travis_lgtb.png "Activación de Travis en el repositorio")

Por último, he creado el archivo [*.travis.yml*](https://github.com/aure-nogueras/LGTBClub/blob/main/.travis.yml) y lo he añadido al repositorio. Este es su contenido:

```
language: node_js
node_js:
- "node"
- "lts/*"
install:
- npm ci
script:
- grunt test

```

En este archivo compruebo las versiones `node` y `lts` de *Node.js*. La versión `node` es la estable actual, mientras que la `lts` es la versión más reciente de LTS (Long Term Support). Además, tenemos que utilizar `npm ci` para poder instalar el gestor de tareas, desde el que se ejecutarán los tests. No se utilizan versiones anteriores porque no soportan `npm ci`.

A la hora de gestionar la caché en *Travis*, he consultado varias fuentes:
- [Travis cache node_modules](https://stackoverflow.com/questions/42521884/should-i-have-travis-cache-node-modules-or-home-npm).
- [Comando `npm ci`](https://docs.npmjs.com/cli/v6/commands/npm-ci).
- [Caching node dependencies when using `npm ci`](https://medium.com/@mdsky1986/caching-node-dependencies-when-using-npm-ci-89fe3f46404a).

Después de leer sobre cómo gestionar la caché con `npm ci` en *Travis*, he optado por modificar el fichero de configuración:

```
language: node_js
node_js:
- "node"
- "lts/*"
install:
- npm ci
cache:
  directories:
  - "$HOME/.npm"
script:
- grunt test

```

Esto acelerará la instalación manteniendo la caché de `npm`.

## Configuración de un sistema de integración continua adicional

El segundo sistema que he elegido para realizar la integración continua ha sido [*CircleCI*](https://circleci.com/). Esto se debe a varios motivos. En primer lugar, se trata de un sistema en la nube en el que se puede utilizar la propia cuenta de *GitHub* para conectar los repositorios deseados. Además, al igual que con *Travis*, permite activar el *checks API*. Esto implica que se puede consultar desde el repositorio de *GitHub* el estado de la integración y el funcionamiento de los tests. De este modo, se puede consultar el *build* en cualquier momento sin tener que acceder a *CircleCI* directamente. Para añadir esto a mi repositorio he consultado [esta página](https://circleci.com/docs/2.0/enable-checks/).

Para configurar *CircleCI*, se han seguido unos pasos muy similares a los llevados a cabo en *Travis*. En primer lugar, he accedido a la página conectándome con mi perfil de *GitHub*. 

![Acceso a CircleCI](./docs/imgs/circle-github.png "Acceso a CircleCI")

En los ajustes puede comprobarse que, efectivamente, el perfil está conectado a *GitHub*.

![Perfil en CircleCI](./docs/imgs/settings-github.png "Perfil en CircleCI")

A continuación, he activado el repositorio del proyecto en el que voy a aplicar la integración continua. En este caso, he accedido a todos mis repositorios desde la pestaña *Projects* y he seleccionado el correspondiente a [*LGTBClub*](https://github.com/aure-nogueras/LGTBClub) integración continua con *CircleCI*.

![Proyecto activado en CircleCI](./docs/imgs/circle-project.png "Proyecto activado en CircleCI")

Por último, he creado una carpeta [*.circleci*](https://github.com/aure-nogueras/LGTBClub/tree/main/.circleci) en mi proyecto, donde he guardado el archivo de configuración [*config.yml*](https://github.com/aure-nogueras/LGTBClub/blob/main/.circleci/config.yml). Este es el contenido de dicho archivo:

```
--- 
jobs: 
  build_and_test: 
    docker: 
      - image: anogueras/lgtbclub:latest
        auth:
          username: $DOCKER_HUB_USERNAME
          password: $DOCKER_HUB_PASSWORD
    working_directory: /app
    steps:
      - run: 
          name: Run tests
          command: grunt test
     
version: 2.1
workflows: 
  build_and_test: 
    jobs: 
      - build_and_test

```

Con este archivo de configuración, uso la imagen creada en *DockerHub* para ejecutar los tests de la aplicación. Cada vez que hago un nuevo *push* en el repositorio, puedo ver los resultados en *CircleCI*.

![Resultados de los tests en CircleCI](./docs/imgs/circle-test.png "Resultados de los tests en CircleCI")

También he añadido el *badge* a este README.md y he activado el *checks API* como se puede ver en la imagen.

![Activación de Checks API](./docs/imgs/checks-api.png "Activación de Checks API")

**Nota:** el *badge* de *CircleCI* muestra últimamente un estado incorrecto (indica que falla aunque realmente pasa los tests). He configurado el *Checks API* tal y como explico aquí, y todo funciona correctamente, así que no sé a qué puede deberse este fallo.


## Aprovechamiento del contenedor de Docker 

Como se ha indicado en el punto anterior, he utilizado *Docker* en *CircleCI*. De este modo, aprovecho la imagen creada para automatizar la ejecución de los tests del proyecto. Para ello, el archivo de configuración indica las claves de acceso para acceder *DockerHub* y descargar la última versión. 

```
docker: 
  - image: anogueras/lgtbclub:latest
    auth:
      username: $DOCKER_HUB_USERNAME
      password: $DOCKER_HUB_PASSWORD
```

A continuación, se establece el directorio de trabajo en `/app`. 

```
 working_directory: /app
```

Desde ahí se ejecutan los tests.

```
steps:
    - run: 
        name: Run tests
        command: grunt test
```

## Uso correcto del gestor de tareas en la integración continua

En los tres sistemas de integración continua utilizados (*Travis*, *CircleCI* y *GitHub Actions*), se ejecutan los tests del proyecto haciendo uso del gestor de tareas. En este caso, el comando utilizado es `grunt test`. Esto activa la ejecución de los tests y permite comprobar si funcionan adecuadamente, tal y como puede verse en los *badges*.

## Avance del proyecto

Además de esto, he avanzado el proyecto en dos puntos:

- He incorporado nuevas funciones y tests al código, relativas a comprobar si un usuario está suscrito al servicio de mensajería. Para ello, he creado la HU18 y un nuevo issue.
	- [HU18 Saber si estoy suscrito como usuario](https://github.com/aure-nogueras/LGTBClub/issues/56).
	- [Como desarrollador, quiero comprobar que cualquier modificación es realizada por un usuario suscrito](https://github.com/aure-nogueras/LGTBClub/issues/55).
  
  Esto ha introducido cambios en las siguientes clases:
  
  	- [User.js](https://github.com/aure-nogueras/LGTBClub/blob/main/src/UserManagement/User.js).
  	- [UserController.js](https://github.com/aure-nogueras/LGTBClub/blob/main/src/UserManagement/UserController.js).
  	- [testUser.js](https://github.com/aure-nogueras/LGTBClub/blob/main/src/UserManagement/testUser.js).
  	- [testUserController.js](https://github.com/aure-nogueras/LGTBClub/blob/main/src/UserManagement/testUserController.js).
  	- [testUserControllerMocha.js](https://github.com/aure-nogueras/LGTBClub/blob/main/src/UserManagement/testUserControllerMocha.js).
  	- [testUserMocha.js](https://github.com/aure-nogueras/LGTBClub/blob/main/src/UserManagement/testUserMocha.js).

  Los cambios pueden consultarse en los commits.

- He añadido un tercer sistema de integración continua mediante las *GitHub Actions*. Para ello, he consultado los siguientes enlaces:

	- [Integración continua con *GitHub Actions*](https://docs.github.com/en/free-pro-team@latest/actions/guides/about-continuous-integration).
	- [*Workflow* para CI con *GitHub Actions*](https://docs.github.com/en/free-pro-team@latest/actions/guides/setting-up-continuous-integration-using-workflow-templates).
	- [Añadir un *badge* para una *GitHub Action*](https://dev.to/robdwaller/how-to-add-a-github-actions-badge-to-your-project-11ci).
	- [Incluir el estado de una *GitHub Actions* en el repositorio](https://docs.github.com/es/free-pro-team@latest/actions/managing-workflow-runs/adding-a-workflow-status-badge).
	
  He tomado como plantilla el *workflow* de CI para *Node.js*. De este modo, solo he tenido que llevar a cabo unas pequeñas modificaciones para que todo funcionara correctamente. Este es el contenido de [**node.js.yml**](https://github.com/aure-nogueras/LGTBClub/blob/main/.github/workflows/node.js.yml):
  
```
  name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [14.x, 15.x]

    steps:
    - uses: actions/checkout@v2
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}
    - run: npm ci
    - run: grunt test
```

  Pasa los tests para las versiones 14 y 15 de *Node.js*. Esto se debe a que versiones previas no soportan `npm ci`. Para ello, toma la rama *main*, copia el repositorio e indica la versión de *node*. A continuación, instala lo necesario con `npm ci` (como por ejemplo el gestor de tareas *grunt*). Y, por último, ejecuta los tests con `grunt test`.

## Documentación

La documentación se ubicará en el directorio [docs](https://github.com/aure-nogueras/ProyectoCC/tree/main/docs). 
- [Arquitectura elegida](https://aure-nogueras.github.io/LGTBClub/docs/arquitectura).
- [Planificación del proyecto](https://aure-nogueras.github.io/LGTBClub/docs/planificacion).
- [Configuración inicial del entorno para comenzar el desarrollo del proyecto](https://aure-nogueras.github.io/LGTBClub/docs/configuracion_entorno).
- [Contenedores](https://aure-nogueras.github.io/LGTBClub/docs/contenedores).
- [Elección de herramientas](https://aure-nogueras.github.io/LGTBClub/docs/eleccion_herramientas).
- [Descripción del problema](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema).
- [Creación de las primeras clases](https://aure-nogueras.github.io/LGTBClub/docs/primeras_clases).


