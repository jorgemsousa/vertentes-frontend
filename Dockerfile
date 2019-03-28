FROM node:alpine

WORKDIR /usr/frontend

COPY package.json ./
RUN yarn

COPY . .

EXPOSE 3001

CMD ["yarn", "start"]