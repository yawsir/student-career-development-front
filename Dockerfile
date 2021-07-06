FROM node:lts-alpine as builder

ADD . /code
WORKDIR /code

RUN yarn config set registry https://registry.npm.taobao.org \
  && yarn install \
  && yarn build

FROM nginx:stable-alpine
COPY student-career.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /code/dist /usr/share/nginx/html/

EXPOSE 10002
