FROM node:latest
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json

RUN npm install
RUN npm install -g @angular/cli@12.1.1

COPY . /app

CMD ng serve --host 0.0.0.0