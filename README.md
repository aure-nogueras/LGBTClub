# LGTBClub

Proyecto de desarrollo de un sistema de divulgación de información del colectivo LGTB :rainbow_flag:.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![Build Status](https://travis-ci.org/aure-nogueras/LGTBClub.svg?branch=main)](https://travis-ci.org/github/aure-nogueras/LGTBClub)

La descripción del problema se puede consultar [aquí](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema).


## Elección correcta y justificada del contenedor base

En primer lugar, pensé en usar *node*. Sin embargo, después de leer [esta página](https://blog.webbylab.com/minimal_size_docker_image_for_your_nodejs_app/), me di cuenta de que era poco recomendable. *Node* instala un número significativo de herramientas que no se van a usar, ocupando un tamaño innecesariamente grande. 

Como la simplicidad es una de las buenas prácticas que pueden seguirse en la virtualización ligera, finalmente he optado por *alpine*. Se trata de una imagen base de tamaño bastante reducido, lo que implica que sea rápida de cargar. Además, permite disfrutar de toda la funcionalidad necesaria sin consumir más espacio del requerido por el proyecto. 


## Dockerfile

https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

https://blog.webbylab.com/minimal_size_docker_image_for_your_nodejs_app/

https://codefresh.io/docker-tutorial/not-ignore-dockerignore-2/


https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
https://medium.com/better-programming/running-a-container-with-a-non-root-user-e35830d1f42a

## Docker Hub



## GitHub Container Registry

https://docs.github.com/es/free-pro-team@latest/packages/getting-started-with-github-container-registry/about-github-container-registry

https://docs.github.com/es/free-pro-team@latest/packages/using-github-packages-with-your-projects-ecosystem/configuring-docker-for-use-with-github-packages#authenticating-to-paquetes-de-github

https://docs.github.com/es/free-pro-team@latest/packages/publishing-and-managing-packages/about-github-packages#authenticating-to-github-packages

https://docs.github.com/es/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token

https://github.com/aure-nogueras/LGTBClub/packages/512900

## Correcta relación entre avance de código y HUs

El avance de código y las HUs se han ido enlazando a partir de los [*commits*](https://github.com/aure-nogueras/LGTBClub/commits/main). Además, en las respectivas clases del proyecto se puede ver la relación de cada una de las funciones del código con una o varias HU.

## Avance del proyecto

https://github.com/containers/podman

Se hicieron modificaciones en función de los errores de las entregas 1 (#4) y 2 (#38).

De este modo, he cambiado [la descripción del proyecto](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema), [la planificación](https://aure-nogueras.github.io/LGTBClub/docs/planificacion) y [la justificación de la arquitectura elegida](https://aure-nogueras.github.io/LGTBClub/docs/arquitectura) entre otras cosas.

Con respecto al avance del proyecto, se tienen las siguientes clases y sus respectivos tests:
- [*HistoricalEvent.js*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/HistoricalEvent/HistoricalEvent.js)
- [*HistoricalEventController.js*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/HistoricalEvent/HistoricalEventController.js)
- [*InfoAndExperiences.js*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/InfoAndExperiences/InfoAndExperiences.js)
- [*InfoAndExperiencesController.js*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/InfoAndExperiences/InfoAndExperiencesController.js)
- [*User.js*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/UserManagement/User.js)
- [*UserController.js*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/UserManagement/UserController.js)

Además, se ha incorporado *Travis* como herramienta de integración continua.


## Documentación

La documentación se ubicará en el directorio [docs](https://github.com/aure-nogueras/ProyectoCC/tree/main/docs). 
- [Arquitectura elegida](https://aure-nogueras.github.io/LGTBClub/docs/arquitectura).
- [Planificación del proyecto](https://aure-nogueras.github.io/LGTBClub/docs/planificacion).
- [Configuración inicial del entorno para comenzar el desarrollo del proyecto](https://aure-nogueras.github.io/LGTBClub/docs/configuracion_entorno).
- [Elección de herramientas](https://aure-nogueras.github.io/LGTBClub/docs/eleccion_herramientas).
- [Descripción del problema](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema).
- [Creación de las primeras clases](https://aure-nogueras.github.io/LGTBClub/docs/primeras_clases).


