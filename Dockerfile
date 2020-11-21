# Descarga la última versión de node.js
FROM alpine:latest

# Crea un directorio donde se almacenará el código de la aplicación
WORKDIR /usr/src/app

# Copia del package.json y el package-lock.json
COPY package*.json ./

# Se instalan las dependencias
RUN apk add --update nodejs nodejs-npm && npm install && npm install -g grunt-cli

# Se copia el resto
COPY . .

# Ejecutamos grunt para los tests
RUN grunt
