# Documentación

## Creación de las primeras clases

Para empezar a crear la estructura del proyecto, lo primero que he hecho ha sido elegir la versión de *Node.js* con el entorno virtual.

`nvm use node`

A continuación, he creado el archivo [*package.json*](https://github.com/aure-nogueras/LGBTClub/blob/main/package.json) con `npm init`. Este es el contenido:

```
{
  "name": "lgbtclub",
  "version": "1.0.0",
  "description": "Proyecto para educar sobre la comunidad LGTB",
  "main": "index.js",
  "directories": {
    "doc": "docs"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/aure-nogueras/ProyectoCC.git"
  },
  "author": "Aure Nogueras",
  "license": "GPLv3",
  "bugs": {
    "url": "https://github.com/aure-nogueras/ProyectoCC/issues"
  },
  "homepage": "https://github.com/aure-nogueras/ProyectoCC#readme"
}
```

Después he añadido *Grunt* con `npm install grunt --save-dev`. Esto incorpora estas líneas al *package.json*:

```
"devDependencies": {
    "grunt": "^1.3.0"
  }
```

Lo siguiente ha sido crear el archivo [*Gruntfile.js*](https://github.com/aure-nogueras/LGBTClub/blob/main/Gruntfile.js). Para ello he seguido [este tutorial](https://gruntjs.com/getting-started).

```
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
```

Como aún no hay tests, configuraré las opciones del *task runner* más adelante.

Para comenzar la creación de clases he incorporado la carpeta [*src*](https://github.com/aure-nogueras/LGBTClub/blob/main/src). Dentro de ella, he añadido tres subcarpetas, una para cada microservicio. El siguiente paso ha sido crear las clases [*User.js*](https://github.com/aure-nogueras/LGBTClub/blob/main/src/UserManagement/User.js), [*HistoricalEvent.js*](https://github.com/aure-nogueras/LGBTClub/blob/main/src/HistoricalEvent/HistoricalEvent.js) y [*InfoAndExperiences.js*](https://github.com/aure-nogueras/LGBTClub/blob/main/src/InfoAndExperiences/InfoAndExperiences.js).


Por último, he comprobado que el código de la estructura es compilable [aquí](https://repl.it/languages/nodejs) y he incorporado el archivo [*cc.yaml*](https://github.com/aure-nogueras/LGBTClub/blob/main/cc.yaml).

```
entidad:
	- src/UserManagement/User.js
	- src/HistoricalEvent/HistoricalEvent.js
	- src/InfoAndExperiences/InfoAndExperiences.js
```
