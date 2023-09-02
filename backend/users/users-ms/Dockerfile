FROM node:18.16.0

WORKDIR /users-ms

COPY package.json .

RUN npm install

COPY . .

EXPOSE 4007/tcp

ENTRYPOINT ["npm", "run", "start:dev"]