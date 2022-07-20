FROM node:16.16.0
WORKDIR /app

COPY package.json package.json
RUN npm install

COPY lib lib
COPY tsconfig.json tsconfig.json