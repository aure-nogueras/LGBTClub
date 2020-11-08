## Arquitectura del problema

Para abordar el problema se ha elegido una arquitectura basada en microservicios, ya que van a desplegarse tres funcionalidades independientes. El hecho de que cada uno de los servicios pueda funcionar por separado es muy beneficioso, y permite una gestión descentralizada de los datos.

Además, he seleccionado esta arquitectura porque es muy adecuada para el despliegue de servicios en la nube. En el caso de que uno de los microservicios fallase, el resto no dependería de este error, tal y como pasaría en una arquitectura monolítica. En definitiva, la arquitectura de microservicios tiene muchas ventajas en cuanto a la facilidad de implementación, la capacidad de recuperación, la accesibilidad o la gran capacidad de expansión.

Los tres microservicios que van a desplegarse son los siguientes: 

- **UserManagement**: se encargará de la gestión de los usuarios. 
- **HistoricalEvents**: gestiona los eventos históricos y las fechas señaladas para el colectivo.
- **InfoAndExperiences**: gestiona la información sobre los términos, las experiencias personales y los falsos mitos del colectivo.
	
[Esta página](https://www.redhat.com/es/topics/microservices/what-are-microservices) explica con más detalle qué son los microservicios y cuáles son sus ventajas. 
	
El resto de herramientas elegidas para el proyecto se especifica [aquí](https://aure-nogueras.github.io/LGTBClub/docs/eleccion_herramientas) y la construcción de las primeras clases [aquí](https://aure-nogueras.github.io/LGTBClub/docs/primeras_clases).

Primeras clases:

- [User.js](https://github.com/aure-nogueras/LGTBClub/blob/main/src/UserManagement/User.js)
- [HistoricalEvent.js](https://github.com/aure-nogueras/LGTBClub/blob/main/src/HistoricalEvent/HistoricalEvent.js)
- [InfoAndExperiences.js](https://github.com/aure-nogueras/LGTBClub/blob/main/src/InfoAndExperiences/InfoAndExperiences.js) 
