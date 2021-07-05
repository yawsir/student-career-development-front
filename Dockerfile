FROM nginx:stable
FROM node:lts-alpine

ADD . /builder/

WORKDIR /builder

RUN yarn config set registry https://registry.npm.taobao.org \
  && yarn install \
  && yarn build
COPY student-career.conf /etc/nginx/conf.d/default.conf
COPY ./dist /usr/share/nginx/html







