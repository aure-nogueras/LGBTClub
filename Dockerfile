# Descarga la última versión de alpine
FROM alpine:latest

# Crea un directorio donde se almacenará el código de la aplicación
WORKDIR /app

# Copia del package.json y el package-lock.json
COPY package*.json ./

# Se instalan las dependencias
RUN apk add --update nodejs nodejs-npm && npm install && npm install -g grunt-cli

# Se copia el resto
COPY src ./src/ 
COPY Gruntfile.js ./

# Ejecutamos grunt para los tests
CMD grunt
