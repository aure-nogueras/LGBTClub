# LGTBClub

Proyecto de desarrollo de un sistema de divulgación de información del colectivo LGTB.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

[![Build Status](https://travis-ci.org/aure-nogueras/LGTBClub.svg?branch=main)](https://travis-ci.org/github/aure-nogueras/LGTBClub)

La descripción del problema se puede consultar [aquí](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema).

## Arquitectura del problema

Para abordar el problema se ha elegido una arquitectura basada en microservicios, ya que van a desplegarse tres funcionalidades independientes. El hecho de que cada uno de los servicios pueda funcionar por separado es muy beneficioso, y permite una gestión descentralizada de los datos.

Además, he seleccionado esta arquitectura porque es muy adecuada para el despliegue de servicios en la nube. En el caso de que uno de los microservicios fallase, el resto no dependería de este error, tal y como pasaría en una arquitectura monolítica. En definitiva, la arquitectura de microservicios tiene muchas ventajas en cuanto a la facilidad de implementación, la capacidad de recuperación, la accesibilidad o la gran capacidad de expansión.

Los tres microservicios que van a desplegarse son los siguientes: 

- **UserManagement**: se encargará de la gestión de los usuarios. 
- **HistoricalEvents**: gestiona los eventos históricos y las fechas señaladas para el colectivo.
- **InfoAndExperiences**: gestiona la información sobre los términos, las experiencias personales y los falsos mitos del colectivo.
	
En [esta página](https://www.redhat.com/es/topics/microservices/what-are-microservices) se explica con más detalle qué son los microservicios y cuáles son sus ventajas. 
	
El resto de herramientas elegidas se especifica [aquí](https://aure-nogueras.github.io/LGTBClub/docs/eleccion_herramientas) y la construcción de las primeras clases [aquí](https://aure-nogueras.github.io/LGTBClub/docs/primeras_clases).

Primeras clases:

- [User.js](https://github.com/aure-nogueras/LGTBClub/blob/main/src/UserManagement/User.js)
- [HistoricalEvent.js](https://github.com/aure-nogueras/LGTBClub/blob/main/src/HistoricalEvent/HistoricalEvent.js)
- [InfoAndExperiences.js](https://github.com/aure-nogueras/LGTBClub/blob/main/src/InfoAndExperiences/InfoAndExperiences.js) 

## Planificación del proyecto

La planificación planteada inicialmente consta seis fases. Esta organización se irá modificando en función de las necesidades del proyecto conforme se vaya avanzando en su desarrollo. Además, no se trata de un plan secuencial, sino que muchas de las actividades se realizarán en paralelo.

### Desarrollo de la gestión de usuarios

Este apartado se centrará en el microservicio **UserManagement**. Hay que tener en cuenta que existen dos tipos de usuarios: aquellos que son LGTB y aquellos que no. Dichos niveles no son excluyentes. Esto quiere decir que un usuario LGTB puede realizar también las acciones que llevan a cabo los usuarios no LGTB. Sin embargo, no ocurre al revés. Hay ciertas funciones reservadas a usuarios LGTB.

Las historias de usuario asociadas a este apartado son las siguientes:

- [[HU1] Añadir eventos históricos o días de celebración como usuario](https://github.com/aure-nogueras/LGTBClub/issues/12): cualquier tipo de usuario puede añadir eventos históricos.
- [[HU2] Añadir términos o experiencias personales como usuario LGTB](https://github.com/aure-nogueras/LGTBClub/issues/13): solo los usuarios LGTB pueden añadir experiencias personales o información sobre términos.
- [[HU3] Eliminar eventos históricos o días de celebración como usuario](https://github.com/aure-nogueras/LGTBClub/issues/14): cualquier usuario puede eliminar un evento histórico siempre que lo haya añadido.
- [[HU4] Eliminar términos o experiencias personales como usuario LGTB](https://github.com/aure-nogueras/LGTBClub/issues/15): solo los usuarios LGTB pueden eliminar experiencias personales o términos y únicamente en el caso de que los hayan añadido.
- [[HU5] Modificar eventos históricos o días de celebración como usuario](https://github.com/aure-nogueras/LGTBClub/issues/16): cualquier usuario puede modificar los eventos históricos que haya añadido. Esto se debe a que puede haber cometido un error al incluirlos o porque quizás quiere expandir la información incorporada.
- [[HU6] Modificar términos o experiencias personales como usuario LGTB](https://github.com/aure-nogueras/LGTBClub/issues/17): un usuario LGBT puede modificar una experiencia o término que haya añadido para corregir errores o cambiar la información incluida.
- [[HU7] Suscribirse al servicio de mensajes como usuario](https://github.com/aure-nogueras/LGTBClub/issues/18): cualquier tipo de usuario puede solicitar suscribirse al servicio de mensajería.
- [[HU8] Desuscribirse del servicio de mensajería como usuario](https://github.com/aure-nogueras/LGTBClub/issues/19): cualquier tipo de usuario puede desuscribirse del servicio de mensajería en cualquier momento.
- [[HU15] Dar de alta a un usuario al servicio de mensajería como administrador](https://github.com/aure-nogueras/LGTBClub/issues/26): un administrador puede dar de alta a cualquier usuario en el servicio de mensajería.
- [[HU16] Dar de baja a un usuario del servicio de mensajería como administrador](https://github.com/aure-nogueras/LGTBClub/issues/27): un administrador puede dar de baja a cualquier usuario del servicio de mensajería.
- [[HU17] Modificar los datos de un usuario suscrito al servicio de mensajería como administrador](https://github.com/aure-nogueras/LGTBClub/issues/28): un administrador puede modificar los datos de un usuario suscrito al servicio de mensajería.

### Desarrollo de la gestión de eventos históricos

Este apartado se centrará en el microservicio **HistoricalEvents**. Las historias de usuario relacionadas con este punto son las siguientes:

- [[HU9] Añadir eventos históricos o días de celebración como administrador](https://github.com/aure-nogueras/LGTBClub/issues/20): un administrador puede añadir un evento histórico o día de celebración.
- [[HU11] Eliminar eventos históricos o días de celebración como administrador](https://github.com/aure-nogueras/LGTBClub/issues/22): un administrador puede eliminar un evento histórico o día de celebración.
- [[HU13] Modificar eventos históricos o días de celebración como administrador](https://github.com/aure-nogueras/LGTBClub/issues/24): un administrador puede modificar un evento histórico o día de celebración, expandiendo la información mostrada o cambiando los datos erróneos.

### Desarrollo de la gestión de la información y las experiencias personales

Este apartado se centrará en el microservicio **InfoAndExperiences**. En esta categoría encontramos las siguientes historias de usuario:

- [[HU10] Añadir términos o experiencias personales como administrador](https://github.com/aure-nogueras/LGTBClub/issues/21): un administrador puede añadir información sobre términos o experiencias personales.
- [[HU12] Eliminar términos o experiencias personales como administrador](https://github.com/aure-nogueras/LGTBClub/issues/23): un administrador puede eliminar información asociada a términos o experiencias personales.
- [[HU14] Modificar términos o experiencias personales como administrador](https://github.com/aure-nogueras/LGTBClub/issues/25): un administrador puede modificar términos o experiencias personales en el caso de encontrar errores o desear expandir la información.

### Desarrollo de tests

A la vez que se van añadiendo funcionalidades al proyecto, se irán creando tests para comprobar su corrección.

### Conexión entre los microservicios

Este paso también será importante para comunicar los microservicios entre sí. Se llevará a cabo más adelante, cuando los servicios tengan al menos una mínima funcionalidad básica.

### Servicios de logging y configuración distribuida

Para el servicio de *logging*, he seleccionado el paquete *Winston*. En el caso de la configuración distribuida, he elegido *Consul*. Estas decisiones están explicadas [aquí](https://aure-nogueras.github.io/LGTBClub/docs/eleccion_herramientas).

## Sintaxis

La herramienta utilizada para comprobar que la sintaxis de las clases es correcta es [esta](https://repl.it/languages/nodejs).


## Documentación

La documentación se ubicará en el directorio [docs](https://github.com/aure-nogueras/ProyectoCC/tree/main/docs). 
- [Configuración inicial del entorno para comenzar el desarrollo del proyecto](https://aure-nogueras.github.io/LGTBClub/docs/configuracion_entorno).
- [Elección de herramientas](https://aure-nogueras.github.io/LGTBClub/docs/eleccion_herramientas).
- [Descripción del problema](https://aure-nogueras.github.io/LGTBClub/docs/descripcion_problema).
- [Creación de las primeras clases](https://aure-nogueras.github.io/LGTBClub/docs/primeras_clases).


