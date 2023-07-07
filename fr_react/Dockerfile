FROM node:18.13.0-buster

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

EXPOSE 8086

CMD ["npm", "start"]