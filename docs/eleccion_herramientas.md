# Documentación

## Elección de las herramientas usadas para el proyecto

### Lenguaje

Como lenguaje estuve barajando muchas posibilidades: *Go*, *Scala*, *C#*... Finalmente, he escogido *Node.js*. Esta decisión se basa en que tengo algo de experiencia en *javascript*, pero me gustaría aprender más y conocerlo mejor, así como las posibilidades que puede ofrecer. Además, al tratarse de un lenguaje popular, existe mucha documentación al respecto y una gran comunidad de desarrolladores. Esto es un punto importante para poder avanzar rápidamente en el aprendizaje.

### Entorno virtual de desarrollo

El entorno virtual que he elegido es *nvm*. Hay bastantes similitudes entre este entorno y otros, así que he optado por esta opción al tenerlo instalado y haberlo usado con anterioridad con buenos resultados.

### Compilador online

Para comprobar que el código escrito es compilable, he usado [esta herramienta](https://repl.it/languages/nodejs).

### Gestor de tareas

En la elección del gestor de tareas he comparado *Grunt* y *Gulp*. Dado que no he encontrado diferencias muy significativas que me hagan decantarme por uno o por otro, he decidido elegir *Grunt* por la gran comunidad de usuarios que hay detrás. 

- [*Gulp vs Grunt*](https://deliciousbrains.com/grunt-vs-gulp-battle-build-tools/).
- [*Grunt o Gulp*](https://blog.koalite.com/2015/06/grunt-o-gulp-que-uso/).
- [Diferencias entre *Grunt* y *Gulp*](https://svcministry.org/es/dictionary/what-are-the-differences-between-grunt-and-gulp-js/).

### Configuración remota

Con respecto a la configuración remota, tras leer una [comparativa](https://stackshare.io/stackups/consul-vs-etcd-vs-zookeeper) entre *etcd*, *Zookeeper* y *Consul*, he optado por *Consul*. Esto se debe a que se trata de un servicio que dispone de un repositorio público en *GitHub* (al contrario que *ZooKeeper*) y cuenta con numerosas ventajas: monitorización, alta disponibilidad, integración con *Docker*... Muchas de estas características no están disponibles en las otras alternativas.

### Logging

Al buscar información sobre las alternativas de servicios de *logging* en *Node.js* he encontrado [este artículo](https://stackify.com/node-js-logging/). A partir de él, he seleccionado el paquete *Winston* como servicio de *logging*. Se trata de una de las alternativas más populares, además de ser altamente configurable.

### Bases de datos

He decidido usar bases de datos no relacionales. Esto se debe a que son más rápidas y permiten escalar horizontalmente de forma sencilla. Además, la aplicación no requiere de estructuras complejas que hagan uso de un esquema de almacenamiento estático.

La base de datos utilizada para todos los microservicios será *MongoDB*. Se trata de una buena alternativa para trabajar en la nube. 

Para documentarme a la hora de tomar una decisión, he leído una comparativa entre *MySQL* y *MongoDB* [aquí](https://guiadev.com/mysql-vs-mongodb/).

### Integración continua

Para la integración continua he elegido *Travis*. Esta herramienta es muy fácil de utilizar con *GitHub*. Primero he accedido a mi cuenta de *GitHub* desde la página de *Travis*.

![Perfil en Travis](./imgs/travis.png "Perfil en Travis")

Después he seguido los pasos indicados [aquí](https://docs.travis-ci.com/user/tutorial/?utm_source=help-page&utm_medium=travisweb). Primero he accedido a los *settings* de mi perfil de *Travis*. Una vez ahí, se despliega una lista con mis repositorios. Selecciono el repositorio correspondiente al proyecto, [*LGBTClub*](https://github.com/aure-nogueras/LGBTClub).

![Activación de Travis en el repositorio](./imgs/lgbt_club.png "Activación de Travis en el repositorio")

Por último, he creado el archivo [*.travis.yml*](https://github.com/aure-nogueras/LGBTClub/blob/main/.travis.yml) y lo he añadido al repositorio. Este es su contenido:

```
language: node_js
node_js:
- "8"
- "10"
- "12"

```
