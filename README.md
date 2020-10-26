# LGBTClub

Proyecto de la asignatura *Cloud Computing* del Máster de Ingeniería Informática de la UGR. Curso 2020-2021.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

La descripción del problema se puede consultar [aquí](https://aure-nogueras.github.io/LGBTClub/docs/descripcion_problema).

El plan de desarrollo se puede ver [aquí](https://github.com/aure-nogueras/LGBTClub/projects/1).

## Arquitectura del problema

Para abordar el problema se ha elegido una arquitectura basada en microservicios, ya que van a desplegarse tres funcionalidades independientes. Dichos microservicios son:

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

El resto de herramientas elegidas se especifica [aquí](https://aure-nogueras.github.io/LGBTClub/docs/eleccion_herramientas) y la construcción de las primeras clases [aquí](https://aure-nogueras.github.io/LGBTClub/docs/primeras_clases).

![Arquitectura](./docs/imgs/Arquitectura.png "Arquitectura basada en microservicios")


## Documentación

La documentación se ubicará en el directorio [docs](https://github.com/aure-nogueras/ProyectoCC/tree/main/docs). 
- [Configuración inicial del entorno para comenzar el desarrollo del proyecto](https://aure-nogueras.github.io/LGBTClub/docs/configuracion_entorno).
- [Elección de herramientas](https://aure-nogueras.github.io/LGBTClub/docs/eleccion_herramientas).
- [Descripción del problema](https://aure-nogueras.github.io/LGBTClub/docs/descripcion_problema).
- [Creación de las primeras clases](https://aure-nogueras.github.io/LGBTClub/docs/primeras_clases).

## Milestones e issues resueltos

- [Documentación](https://github.com/aure-nogueras/LGBTClub/milestone/2)
   - [Incluir documentación de configuración de GitHub](https://github.com/aure-nogueras/LGBTClub/issues/2)
   - [Incluir documentación sobre herramientas elegidas](https://github.com/aure-nogueras/LGBTClub/issues/11)
   - [Mover descripción del problema del readme a docs](https://github.com/aure-nogueras/LGBTClub/issues/30)
- [Configuración básica del repositorio](https://github.com/aure-nogueras/LGBTClub/milestone/1)
   - [Añadir GitHub Pages](https://github.com/aure-nogueras/LGBTClub/issues/3)
   - [Terminar configuración inicial del repositorio](https://github.com/aure-nogueras/LGBTClub/issues/1)
- [Solucionar errores](https://github.com/aure-nogueras/LGBTClub/milestone/4)
   - [Arreglar errores iniciales](https://github.com/aure-nogueras/LGBTClub/issues/4)
   - [Modificar descripción del problema](https://github.com/aure-nogueras/LGBTClub/issues/29)
- [Integración continua](https://github.com/aure-nogueras/LGBTClub/milestone/5)
   - [Añadir travis.yml](https://github.com/aure-nogueras/LGBTClub/issues/5)
   - [Incluir repositorio en Travis](https://github.com/aure-nogueras/LGBTClub/issues/6)
   - [Arreglar error en .travis.yml](https://github.com/aure-nogueras/LGBTClub/issues/7)
- [Explicación de la arquitectura del proyecto](https://github.com/aure-nogueras/LGBTClub/milestone/3)
   - [Añadir arquitectura en readme](https://github.com/aure-nogueras/LGBTClub/issues/9)
   - [Añadir diagrama de la arquitectura de la aplicación](https://github.com/aure-nogueras/LGBTClub/issues/10) 
   
	 
	 
