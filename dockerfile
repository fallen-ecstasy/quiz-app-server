FROM node:20

RUN mkdir -p /home/app

WORKDIR /home/app

COPY dist ./dist
COPY package.json .

RUN npm install

CMD ["npm","run","start"]