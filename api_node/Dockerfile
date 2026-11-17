
# Utilizamos una imagen oficial de Node.js 22.
FROM node:22-slim

# Establecemos el directorio de trabajo.
WORKDIR /app

# Copiamos los archivos del proyecto.
COPY . .

# Instalamos las dependencias.
RUN npm install

# Indicamos el puerto que utiliza la aplicación.
EXPOSE 3000

# Iniciamos la aplicación con npm start.
CMD ["npm", "start"]
