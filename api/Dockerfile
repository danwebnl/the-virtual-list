# Declare the base image
FROM        node:alpine
LABEL       author="Dan L."
ENV         PORT=4000
ENV         MONGODB_ADMINUSERNAME=admin
ENV         MONGODB_ADMINPASSWORD=password
ENV         MONGODB_PORT=27017
ENV         DATABASE_HOST=mongodb
RUN         mkdir /app
WORKDIR     /app
COPY        package*.json /app
RUN         npm i
# Copy the source code to /app dir
COPY        . .
ENV         NODE_ENV=production
EXPOSE      $PORT
CMD         ["npm", "run", "start"]
