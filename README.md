# LGTBClub

Proyecto de desarrollo de un sistema de divulgación de información del colectivo LGTB :rainbow_flag:.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![Build Status](https://travis-ci.com/aure-nogueras/LGTBClub.svg?branch=main)](https://travis-ci.com/github/aure-nogueras/LGTBClub) [![CircleCI](https://circleci.com/gh/aure-nogueras/LGTBClub.svg?style=shield)](https://app.circleci.com/pipelines/github/aure-nogueras/LGTBClub?branch=main) [![GitHub Action CI](https://github.com/aure-nogueras/LGTBClub/workflows/Node.js%20CI/badge.svg)](https://github.com/aure-nogueras/LGTBClub/actions)

La descripción del problema se puede consultar [aquí](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema).

## Justificación técnica del framework elegido

A la hora de elegir un framework para el microservicio, se han consultado posibles opciones para *Node.js*:

- [Mejores frameworks para aumentar la productividad](http://developinginspanish.com/2019/12/20/los-mejores-frameworks-de-node-js-para-aumentar-la-productividad/).
- [Los mejores 4 frameworks de *Node.js*](https://rapidapi.com/blog/best-nodejs-frameworks/).

Existen muchas posibilidades para *Node.js*. De este modo, se ha optado por comparar algunos de los frameworks comentados en los enlaces anteriores. Las alternativas que se han barajado son *Express*, *Sails*, *Meteor* y *Loopback*. Vamos a ver una tabla comparativa con los aspectos de cada uno. 

| Frameworks    | Rendimiento   | Comunidad     | Adecuado para |
| ------------- |:-------------:|:-------------:|:-------------:|
| *Express*     | Rápido        | Masiva        | Pequeños y grandes proyectos |
| *Sails*       | Medio, se enfoca en la eficiencia         | Una gran comunidad | Proyectos de tamaño medio |
| *Meteor*      | Más lento     | Más pequeña, en crecimiento| Pequeños proyectos |
| *Loopback*    | Medio         | Pequeña       | Entornos de producción |

Después de ver las características de cada framework, se ha considerado que las mejores alternativas son *Express* y *Meteor*. Esto se debe a que son adecuados para proyectos pequeños. No obstante, *Express* es más rápido en cuanto a rendimiento, con lo que ha sido la opción finalmente elegida. 

También se han comparado *Express* y *Meteor* realizando una prueba con cada framework. *Express* ya se había utilizado previamente, con lo que se ha creado un proyecto en *Meteor* para ver su funcionamiento siguiendo [este tutorial](https://www.codementor.io/@codeforgeek/rest-crud-operation-using-meteor-du10808m5). Las pruebas llevadas a cabo se encuentran [aquí](https://github.com/aure-nogueras/EjerciciosCC/tree/main/Tema5).

## Diseño del API REST

## Configuración distribuida y logs

## Tests del API REST

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

## Documentación

La documentación se ubicará en el directorio [docs](https://github.com/aure-nogueras/ProyectoCC/tree/main/docs). 
- [Arquitectura elegida](https://aure-nogueras.github.io/LGTBClub/docs/arquitectura).
- [Planificación del proyecto](https://aure-nogueras.github.io/LGTBClub/docs/planificacion).
- [Configuración inicial del entorno para comenzar el desarrollo del proyecto](https://aure-nogueras.github.io/LGTBClub/docs/configuracion_entorno).
- [Contenedores](https://aure-nogueras.github.io/LGTBClub/docs/contenedores).
- [Integración continua](https://aure-nogueras.github.io/LGTBClub/docs/integracion_continua).
- [Elección de herramientas](https://aure-nogueras.github.io/LGTBClub/docs/eleccion_herramientas).
- [Descripción del problema](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema).
- [Creación de las primeras clases](https://aure-nogueras.github.io/LGTBClub/docs/primeras_clases).


