FROM node:12-alpine

WORKDIR /build

COPY . .

RUN rm -rf "./node_modules" && \
  yarn install && \
  yarn build


CMD [ "node", "./dist/index.js" ]