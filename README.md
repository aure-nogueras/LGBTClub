# LGTBClub

Proyecto de desarrollo de un sistema de divulgación de información del colectivo LGTB :rainbow_flag:.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![Build Status](https://travis-ci.com/aure-nogueras/LGTBClub.svg?branch=main)](https://travis-ci.com/github/aure-nogueras/LGTBClub) [![CircleCI](https://circleci.com/gh/aure-nogueras/LGTBClub.svg?style=shield)](https://app.circleci.com/pipelines/github/aure-nogueras/LGTBClub?branch=main) [![GitHub Action CI](https://github.com/aure-nogueras/LGTBClub/workflows/Node.js%20CI/badge.svg)](https://github.com/aure-nogueras/LGTBClub/actions)

La descripción del problema se puede consultar [aquí](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema).

## Estructura del clúster

Se han construido cuatro contenedores:

- **user**: contiene el microservicio relativo a los usuarios, *UserManagement*. 
- **info**: contiene el microservicio relativo al módulo *InfoAndExperiences*. 
- **event**: contiene el microservicio de *HistoricalEvent*. 
- **log**: este contenedor se ha incluido para los logs usando *Logstash*. 

Los contenedores relativos a los microservicios permiten desplegarlos en diferentes puertos para que estén activos al mismo tiempo. Este ha sido el criterio a la hora de separarlos. Por otro lado, los logs son útiles para registrar qué ocurre en cada momento. Son un servicio de configuración necesario para usar junto con los microservicios.

## Configuración de cada uno de los contenedores

Vamos a ver la configuración de cada contenedor por separado:

- **user**: se basa en el archivo [*user.Dockerfile*](https://github.com/aure-nogueras/LGTBClub/blob/main/user.Dockerfile). Dicho archivo construye un contenedor sobre el que utiliza el comando `grunt user`, que despliega el microservicio de los usuarios en el puerto `8081`.
- **info**: se basa en el archivo [*info.Dockerfile*](https://github.com/aure-nogueras/LGTBClub/blob/main/info.Dockerfile). De igual manera que en el caso anterior, construye un contenedor sobre el que desplegar el microservicio. En este caso, alude al microservicio relativo a información sobre términos y experiencias. Se utiliza el puerto `8080` y se ejecuta `grunt info`.
- **event**: este contenedor se construye con el archivo [*event.Dockerfile*](https://github.com/aure-nogueras/LGTBClub/blob/main/event.Dockerfile). Se lanza el microservicio relacionado con los eventos históricos sobre el puerto `8082`, usando el comando `grunt event`.
- **log**: se construye a partir de [esta imagen](https://hub.docker.com/r/bitnami/logstash/). Además, incluye un archivo de configuración llamado [*log.env*](https://github.com/aure-nogueras/LGTBClub/blob/main/log.env).

La configuración de los *Dockerfile* es muy similar al *Dockerfile* inicial. Esto se debe a que la funcionalidad es muy parecida. Principalmente cambia el hecho de que estos archivos ejecutan el servidor de cada microservicio, mientras que el [*Dockerfile*](https://github.com/aure-nogueras/LGTBClub/blob/main/Dockerfile) inicial lanza los tests. Además, dado que se siguieron las mejores prácticas en la construcción del primer *Dockerfile*, se ha procedido del mismo modo en este caso.

Con respecto a los microservicios de *InfoAndExperiences* y *HistoricalEvent*, solo se han copiado sus respectivas carpetas en los contenedores, evitando incluir contenido innecesario. En el caso de *UserManagement*, el *Dockerfile* sí descarga la carpeta *src* completa, ya que algunas funciones utilizan los módulos de *InfoAndExperiences* y *HistoricalEvent*.

## Fichero de composición

Para elaborar el fichero de composición, se ha consultado la documentación oficial de [*Docker*](https://docs.docker.com/compose/gettingstarted/). 

## Testeo del fichero de composición

## Avance del proyecto
consul, heroku

https://medium.com/@uesteibar/env%C3%ADa-emails-desde-node-js-con-nodemailer-178cacf5cf6b
https://medium.com/@gbuszmicz/cron-jobs-in-node-js-with-heroku-5f3c808b4d57
https://nodemailer.com/smtp/
https://devcenter.heroku.com/articles/getting-started-with-nodejs
https://devcenter.heroku.com/articles/procfile
http://www.modeo.co/blog/2015/1/8/heroku-scheduler-with-nodejs-tutorial


## Documentación

La documentación se ubicará en el directorio [docs](https://github.com/aure-nogueras/ProyectoCC/tree/main/docs). 
- [Arquitectura elegida](https://aure-nogueras.github.io/LGTBClub/docs/arquitectura).
- [Planificación del proyecto](https://aure-nogueras.github.io/LGTBClub/docs/planificacion).
- [API REST](https://aure-nogueras.github.io/LGTBClub/docs/rest).
- [Configuración inicial del entorno para comenzar el desarrollo del proyecto](https://aure-nogueras.github.io/LGTBClub/docs/configuracion_entorno).
- [Contenedores](https://aure-nogueras.github.io/LGTBClub/docs/contenedores).
- [Integración continua](https://aure-nogueras.github.io/LGTBClub/docs/integracion_continua).
- [Elección de herramientas](https://aure-nogueras.github.io/LGTBClub/docs/eleccion_herramientas).
- [Descripción del problema](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema).
- [Creación de las primeras clases](https://aure-nogueras.github.io/LGTBClub/docs/primeras_clases).


