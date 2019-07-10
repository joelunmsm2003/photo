Docker
======

# Lista de contenedores no activos (NO LEVANTADOS)

docker ps -a

# Lista de contenedores activos (LEVANTADOS o STARTED)

docker ps

# Listar imagenes

docker images

# Crear imagen en Docker a partir del Dockerfile

docker build -t <nombre_imagen> <url_dockerfile>

docker build -t imagen_docker /usr/local/docker-proyect

# Dentro de docker-proyect se encuentra nuestro archivo Dockerfile.

# Crear un contenedor a partir de una imagen

docker run -it -p <puerto_local:puerto_del_contenedor> <nombre_imagen>

docker start <ID_CONTENEDOR>

docker stop <ID_CONTENEDOR>

docker exec -i -t <ID_CONTENEDOR> /bin/bash

