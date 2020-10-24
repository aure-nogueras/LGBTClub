# LGBTClub

Proyecto de la asignatura *Cloud Computing* del Máster de Ingeniería Informática de la UGR. Curso 2020-2021.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Descripción del problema

Actualmente, aún existen muchos espacios que no son seguros para las personas LGTB. Uno de los principales motivos es la falta de educación en este ámbito. Se pretende crear un canal de mensajería para que cualquier persona pueda suscribirse y recibir información periódica de distinta índole sobre el colectivo. De este modo, se incluirán eventos históricos, fechas señaladas, relatos personales o explicaciones de algunos términos. Además, los propios usuarios podrán contribuir a la expansión de los datos almacenados.

Esto ayudará a crear una sociedad más formada en diversidad sexual, que pueda ir destruyendo tabúes y acepte con total naturalidad cualquier tipo de orientación sexual, expresión o identidad de género.


## Arquitectura del problema

Para abordar el problema se ha elegido una arquitectura basada en microservicios. De este modo, se desplegarán tres microservicios.

- **UserManagement**: se encargará de la gestión de los usuarios. Sus funciones serán:
	- Suscribirse al servicio de mensajería.
	- Desuscribirse del servicio de mensajería.
	- Añadir eventos históricos.
	- Modificar eventos históricos añadidos.
	- Eliminar eventos históricos añadidos.
	- Añadir experiencias personales o información.
	- Modificar experiencias personales o información añadida.
	- Eliminar experiencias personales o información añadida.
- **HistoricalEvents**: gestiona los eventos históricos y las fechas señaladas para el colectivo.
	- Proporcionar información sobre eventos históricos o días señalados.
- **InfoAndExperiences**: gestiona la información sobre los términos, las experiencias personales y los falsos mitos del colectivo.
	- Proporcionar información sobre terminología y experiencias personales.
	
Para comunicar los servicios se utilizará una *API-GATEWAY*.


## Documentación

La documentación se ubicará en el directorio [docs](https://github.com/aure-nogueras/ProyectoCC/tree/main/docs). Por ahora, la configuración inicial del entorno para comenzar el desarrollo del proyecto se encuentra [aquí](https://github.com/aure-nogueras/ProyectoCC/blob/main/docs/configuracion_entorno.md).

## Milestones e issues resueltos

- [Documentación](https://github.com/aure-nogueras/LGBTClub/milestone/2)
   - [Incluir documentación de configuración de GitHub](https://github.com/aure-nogueras/LGBTClub/issues/2)
- [Configuración básica del repositorio](https://github.com/aure-nogueras/LGBTClub/milestone/1)
   - [Añadir GitHub Pages](https://github.com/aure-nogueras/LGBTClub/issues/3)
   - [Terminar configuración inicial del repositorio](https://github.com/aure-nogueras/LGBTClub/issues/1)
- [Solucionar errores](https://github.com/aure-nogueras/LGBTClub/milestone/4)
   - [Arreglar errores iniciales](https://github.com/aure-nogueras/LGBTClub/issues/4)
