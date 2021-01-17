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

Para diseñar el API REST se han consultado muchos enlaces, con el objetivo de seguir las mejores prácticas y aprender sobre el desarrollo con *Express*.

- [Mejores prácticas para desarrollar una api restful](https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9).
- [Buen uso de las peticiones](https://stackoverflow.com/questions/25385559/rest-api-best-practices-args-in-query-string-vs-in-request-body).
- [Ejemplo de uso de *Express* visto en clase](https://github.com/JJ/node-app-cc/blob/master/lib/Rutas.js).
- [API sencilla con *Node.js* y *Express*](https://asfo.medium.com/desarrollando-una-sencilla-api-rest-con-nodejs-y-express-cab0813f7e4b).
- [Construcción de una API REST en *Node.js*](https://www.oscarblancarteblog.com/2018/01/15/construir-api-rest-nodejs-tercera-parte/).

Se han añadido tres archivos con rutas, uno para cada microservicio. Cada función añadida se relaciona con una historia de usuario. Los commits pueden verse [aquí](https://github.com/aure-nogueras/LGTBClub/commits/main).

- [*HistoricalEventRutas.js*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/HistoricalEvent/recurso/HistoricalEventRutas.js).
	- [HU8](https://github.com/aure-nogueras/LGTBClub/issues/20) al crear un evento con POST.
	- [HU10](https://github.com/aure-nogueras/LGTBClub/issues/22) al borrar un evento con DELETE.
- [*InfoAndExperiencesRutas.js*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/InfoAndExperiences/recurso/InfoAndExperiencesRutas.js).
	- [HU9](https://github.com/aure-nogueras/LGTBClub/issues/21) al crear una experiencia o término con POST.
	- [HU11](https://github.com/aure-nogueras/LGTBClub/issues/23) al borrar un término o experiencia con DELETE.
	- [HU12](https://github.com/aure-nogueras/LGTBClub/issues/25) al modificar un término o experiencia con PUT.
- [*UserRutas.js*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/UserManagement/recurso/UserRutas.js).
	- [HU13](https://github.com/aure-nogueras/LGTBClub/issues/26) al crear un usuario con POST.
	- [HU14](https://github.com/aure-nogueras/LGTBClub/issues/27) al borrar un usuario con DELETE.
	- [HU15](https://github.com/aure-nogueras/LGTBClub/issues/28) al modificar los datos de un usuario con PUT.

Cada uno de estos archivos tiene su propia configuración, como se verá en el apartado siguiente. También se han utilizado logs para documentarlo.

Se han usado los cuatro principales comandos `HTTP` siguiendo las recomendaciones:
- GET: para recuperar contenido.
- PUT: para modificar parte de un recurso ya creado.
- POST: para crear nuevo contenido.
- DELETE: para borrar un recurso.

Con respecto a las peticiones, se han usado los *URIs* para GET y DELETE y el cuerpo de la petición para POST y PUT, al tratarse de datos de mayor longitud.

Por último, los códigos de estado usados han sido el 200, para indicar la corrección de una petición, y el 404 para indicar que el recurso consultado no existe.


## Configuración distribuida y logs

Con respecto a la configuración remota, tras leer una [comparativa](https://stackshare.io/stackups/consul-vs-etcd-vs-zookeeper) entre *etcd*, *Zookeeper* y *Consul*, he optado por *etcd*. Esto se debe a que se trata de un servicio que dispone de un repositorio público en *GitHub* (al contrario que *ZooKeeper*) y cuenta con numerosas ventajas: tolerancia a fallos, código abierto, una gran comunidad... 

He usado *etcd* para conocer el valor de la dirección IP y el puerto en el que se despliega el servidor de la API REST. Para ello, he seguido el mismo esquema que el visto en clase. Primero se intentan obtener los datos mediante *etcd*. En el caso de que los resultados sigan siendo nulos, se asocian los valores recogidos en un archivo de configuración de variables de entorno o un valor por defecto. Se han consultado varios enlaces para realizar esta tarea:

- [Documentación oficial de *etcd*](https://etcd.io/docs/v3.4.0/).
- [Repositorio con biblioteca de *etcd* para *Node.js*](https://github.com/microsoft/etcd3).

Cada uno de los microservicios tiene su propio archivo del que obtiene el puerto y la dirección IP, ya que se trata de unidades de funcionalidad diferentes:

- [*HistoricalEventPortConfig*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/HistoricalEvent/recurso/HistoricalEventPortConfig.js).
- [*InfoAndExperiencesPortConfig*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/InfoAndExperiences/recurso/InfoAndExperiencesPortConfig.js).
- [*UserRutasPortConfig*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/UserManagement/recurso/UserRutasPortConfig.js).

Al buscar información sobre las alternativas de servicios de *logging* en *Node.js* he encontrado [este artículo](https://stackify.com/node-js-logging/). A partir de él, he seleccionado el paquete *Winston* como servicio de *logging*. Se trata de una de las alternativas más populares, además de ser altamente configurable. Se ha seguido [este tutorial](https://stackify.com/winston-logging-tutorial/).

## Tests del API REST

Para los tests se han utilizado *Mocha* y la biblioteca [*supertest*](https://www.npmjs.com/package/supertest). Se han ido desarrollando de forma conjunta con el API REST. De este modo, se han añadido en un mismo commit las partes del código que se relacionan con las mismas historias de usuario. Esto puede verse [aquí](https://github.com/aure-nogueras/LGTBClub/commits/main).

Vamos a ver con qué historias de usuario se relaciona cada test:

- [Test de las rutas de *HistoricalEvent*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/HistoricalEvent/test/testHistoricalEventRutas.js).
	- [HU8](https://github.com/aure-nogueras/LGTBClub/issues/20) al crear un evento con POST.
	- [HU10](https://github.com/aure-nogueras/LGTBClub/issues/22) al borrar un evento con DELETE.
- [Test de las rutas de *InfoAndExperiences*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/InfoAndExperiences/test/testInfoAndExperiencesRutas.js).
	- [HU9](https://github.com/aure-nogueras/LGTBClub/issues/21) al crear una experiencia o término con POST.
	- [HU11](https://github.com/aure-nogueras/LGTBClub/issues/23) al borrar un término o experiencia con DELETE.
	- [HU12](https://github.com/aure-nogueras/LGTBClub/issues/25) al modificar un término o experiencia con PUT.
- [Test de las rutas de *UserManagement*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/UserManagement/test/testUserRutas.js).
	- [HU13](https://github.com/aure-nogueras/LGTBClub/issues/26) al crear un usuario con POST.
	- [HU14](https://github.com/aure-nogueras/LGTBClub/issues/27) al borrar un usuario con DELETE.
	- [HU15](https://github.com/aure-nogueras/LGTBClub/issues/28) al modificar los datos de un usuario con PUT.

La ejecución de los tests se lleva a cabo con el comando `grunt test`, que ejecuta todos los tests del proyecto. 

## Avance del proyecto

Además de esto, he avanzado el proyecto en dos puntos:

- He reestructurado el código, tal y como se indica en [este issue](https://github.com/aure-nogueras/LGTBClub/issues/64). De este modo, cada uno de los módulos principales (*HistoricalEvent*, *UserManagement* y *InfoAndExperiences*) contienen ahora tres subdirectorios.
	- *modelo*: contiene la entidad y el controlador para cada caso.
	- *recurso*: incluye el archivo de configuración y el de las rutas.
	- *test*: incorpora todos los tests asociados a dicho módulo.

- He arreglado algunos errores relativos al borrado de elementos, incorporando nuevas funciones. Los issues referenciados son [este](https://github.com/aure-nogueras/LGTBClub/issues/59) y [este](https://github.com/aure-nogueras/LGTBClub/issues/65). Los archivos modificados son principalmente los controladores de cada uno de los módulos. 
	- [*HistoricalEventController*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/HistoricalEvent/modelo/HistoricalEventController.js).
	- [*InfoAndExperiencesController*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/InfoAndExperiences/modelo/InfoAndExperiencesController.js).
	- [*UserController*](https://github.com/aure-nogueras/LGTBClub/blob/main/src/UserManagement/modelo/UserController.js).
	

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


