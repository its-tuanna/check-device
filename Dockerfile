FROM node:16.15.0

WORKDIR /app

COPY ./package.json .

COPY ./package-lock.json .

RUN npm install

# first . means folder that dockerfile is in, second . means current working directory (WORKDIR) 
COPY . .

# when the container is started, expose port 3000 to local system (machine run container)
# in fact, this command is added for documentation purposes, it doesn't work, you have to configure the port when running the container
EXPOSE 3000

CMD [ "npm", "start" ]