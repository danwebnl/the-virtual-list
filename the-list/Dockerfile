# Declare the base image
FROM        node:alpine
LABEL       author="Dan L."
ENV         VITE_PORT=3000
RUN         mkdir /app
WORKDIR     /app
COPY        package*.json /app
RUN         npm i
# Copy the source code to /app dir
COPY        . .
ENV         NODE_ENV=production
RUN         npm run build
EXPOSE      $VITE_PORT
CMD         ["npm", "run", "dev"]
