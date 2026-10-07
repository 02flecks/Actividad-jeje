FROM node:18-alpine

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# SOLUCIÓN ERROR 3: Añadir --ignore-scripts para evitar código malicioso en la instalación
RUN npm ci --only=production --ignore-scripts

# Copiar código de la aplicación
COPY src/ ./src/
COPY sql/ ./sql/
COPY uploads/ ./uploads/

# Crear directorio para uploads si no existe y dar permisos al usuario node
RUN mkdir -p uploads/contracts && chown -R node:node /app

# SOLUCIÓN EXTRA (Prioridad Baja): Cambiar al usuario "node" para no correr como ROOT
USER node

# Exponer puerto
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "src/app.js"]