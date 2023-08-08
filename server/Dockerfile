FROM node:20-alpine

WORKDIR /app

COPY package* .

RUN npm ci

RUN npm install -g nodemon

COPY . .

CMD [ "nodemon", "app.js" ]
