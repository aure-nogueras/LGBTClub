# LGTBClub

Proyecto de desarrollo de un sistema de divulgación de información del colectivo LGTB :rainbow_flag:.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) [![Build Status](https://travis-ci.com/aure-nogueras/LGTBClub.svg?branch=main)](https://travis-ci.com/github/aure-nogueras/LGTBClub) [![CircleCI](https://circleci.com/gh/aure-nogueras/LGTBClub.svg?style=shield)](https://app.circleci.com/pipelines/github/aure-nogueras/LGTBClub?branch=main) [![GitHub Action CI](https://github.com/aure-nogueras/LGTBClub/workflows/Node.js%20CI/badge.svg)](https://github.com/aure-nogueras/LGTBClub/actions)

La descripción del problema se puede consultar [aquí](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema).

## Estructura del clúster

Se han construido cuatro contenedores:

- user: contiene el microservicio relativo a los usuarios, *UserManagement*. 
- info: contiene el microservicio relativo al módulo *InfoAndExperiences*. 
- event: contiene el microservicio de *HistoricalEvent*. 
- log: este contenedor se ha incluido para los logs usando *Logstash*. 

Los contenedores relativos a los microservicios permiten desplegarlos en diferentes puertos para que estén activos al mismo tiempo. Por otro lado, los logs son útiles para registrar qué ocurre en cada momento. Son un servicio de configuración necesario para usar junto con los microservicios.

## Configuración de cada uno de los contenedores



## Fichero de composición

## Testeo del fichero de composición

## Avance del proyecto
consul, heroku


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


