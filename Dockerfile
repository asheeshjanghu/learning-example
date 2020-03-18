FROM node:10-alpine
WORKDIR /usr/learning-example/src
ENV USER_NAME "ASHEESH"
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]