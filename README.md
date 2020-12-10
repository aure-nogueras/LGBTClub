# LGTBClub

Proyecto de desarrollo de un sistema de divulgación de información del colectivo LGTB :rainbow_flag:.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![Build Status](https://travis-ci.org/aure-nogueras/LGTBClub.svg?branch=main)](https://travis-ci.org/github/aure-nogueras/LGTBClub) [![CircleCI](https://circleci.com/gh/aure-nogueras/LGTBClub.svg?style=shield)](https://app.circleci.com/pipelines/github/aure-nogueras/LGTBClub?branch=main) [![GitHub Action CI](https://github.com/aure-nogueras/LGTBClub/workflows/Node.js%20CI/badge.svg)](https://github.com/aure-nogueras/LGTBClub/actions)

La descripción del problema se puede consultar [aquí](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema).

## Justificación de la integración continua

La integración continua es muy útil para asegurar la calidad del proyecto que se está desarrollando. De este modo, el uso de tests que se ejecutan de forma automática después de cada modificación que se añade al repositorio permite comprobar su correcto funcionamiento. Esto también es fundamental para el posterior despliegue de la aplicación en la nube.

El primer sistema de integración continua utilizado para este proyecto es *Travis*. De este modo, he accedido a la web a través de mi cuenta de *GitHub*.

![Perfil en Travis](./docs/imgs/travis.png "Perfil en Travis")

A continuación, he seguido los pasos indicados [aquí](https://docs.travis-ci.com/user/tutorial/?utm_source=help-page&utm_medium=travisweb). Primero he accedido a los *settings* de mi perfil en *Travis*. Una vez ahí, se despliega una lista con mis repositorios. He seleccionado el repositorio correspondiente al proyecto, [*LGTBClub*](https://github.com/aure-nogueras/LGTBClub).

![Activación de Travis en el repositorio](./docs/imgs/lgtb_club.png "Activación de Travis en el repositorio")

Por último, he creado el archivo [*.travis.yml*](https://github.com/aure-nogueras/LGTBClub/blob/main/.travis.yml) y lo he añadido al repositorio. Este es su contenido:

```
language: node_js
node_js:
- "10"
- "12"
- "14.4.0"
install:
- npm install
script:
- grunt test

```


## Configuración de un sistema de integración continua adicional

https://docs.github.com/en/free-pro-team@latest/actions/guides/about-continuous-integration

https://docs.github.com/en/free-pro-team@latest/actions/guides/setting-up-continuous-integration-using-workflow-templates

https://developer.github.com/changes/2018-05-07-new-checks-api-public-beta/

https://circleci.com/docs/2.0/enable-checks/

https://dev.to/robdwaller/how-to-add-a-github-actions-badge-to-your-project-11ci

https://docs.github.com/es/free-pro-team@latest/actions/managing-workflow-runs/adding-a-workflow-status-badge

## Uso correcto del gestor de tareas en la integración continua

## Aprovechamiento del contenedor de Docker 

## Avance del proyecto

## Documentación

La documentación se ubicará en el directorio [docs](https://github.com/aure-nogueras/ProyectoCC/tree/main/docs). 
- [Arquitectura elegida](https://aure-nogueras.github.io/LGTBClub/docs/arquitectura).
- [Planificación del proyecto](https://aure-nogueras.github.io/LGTBClub/docs/planificacion).
- [Configuración inicial del entorno para comenzar el desarrollo del proyecto](https://aure-nogueras.github.io/LGTBClub/docs/configuracion_entorno).
- [Contenedores](https://aure-nogueras.github.io/LGTBClub/docs/contenedores).
- [Elección de herramientas](https://aure-nogueras.github.io/LGTBClub/docs/eleccion_herramientas).
- [Descripción del problema](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema).
- [Creación de las primeras clases](https://aure-nogueras.github.io/LGTBClub/docs/primeras_clases).


