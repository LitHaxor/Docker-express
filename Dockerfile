FROM node:alpine3.13

WORKDIR /app

COPY package.json .

ARG NODE_ENV

RUN if [ "$NODE_ENV" = "dev" ]; \
        then yarn install; \
        else npm install --only=production; \
        fi

COPY . .

RUN npm run build

EXPOSE 5000

CMD [ "npm", "start" ]