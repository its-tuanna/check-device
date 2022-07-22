FROM node:16.15.0

WORKDIR /app

# first . means folder that dockerfile is in, second . means current working directory (WORKDIR) 
COPY . .

RUN npm install

# when the container is started, expose port 3000 to local system (machine run container)
EXPOSE 3000

CMD [ "npm", "start" ]