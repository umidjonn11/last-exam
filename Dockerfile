FROM node:alpine

WORKDIR /app

COPY package.json .

RUN npm i 

RUN npm i -g @nestjs/cli

COPY . .

EXPOSE 3000

CMD [ "npm" ,"run" , "start" ]
