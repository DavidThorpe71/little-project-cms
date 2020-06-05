FROM node:12-stretch

COPY / /

RUN rm -rf "./node_modules" && \
  yarn install && \
  yarn build

CMD [ "node", "./dist/index.js" ]