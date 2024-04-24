#!/bin/sh

# Fail script if we are not in correct location
if ! [ -d ./cprog ] || ! [ -d ./webapp ]
then
  echo "Please navigate to the root directory of the project."
  exit 1
fi

# Navigate to webapp to start it up
# Build webapp container 
# Run webapp container
cd ./webapp
docker build -t aaatipamula/eclab2_docker:webapp .
docker run -d -p 8080:80 --name webapp_container aaatipamula/eclab2_docker:webapp
cd ..

# If build and run was successful push the image to Docker Hub
if [ $? -eq 0 ]
then
  docker push aaatipamula/eclab2_docker:webapp
fi

# Navigate to cprog to start it up
# Build cprog container
# Run cprog container
cd ./cprog
docker build -t aaatipamula/eclab2_docker_cprog:latest .
docker run -it --name cprog_container aaatipamula/eclab2_docker_cprog:latest
cd ..

# If build and run was successful push the image to Docker Hub
if [ $? -eq 0 ]
then
  docker push aaatipamula/eclab2_docker_cprog:latest
fi

