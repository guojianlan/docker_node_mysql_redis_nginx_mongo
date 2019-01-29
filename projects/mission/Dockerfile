ARG NODE_IMAGE
FROM node:${NODE_IMAGE}
USER root
ARG NODE_WORK_DIR
RUN apk add --no-cache openssh \
&& apk add --no-cache git \
&& mkdir -p /root/.ssh/
WORKDIR $NODE_WORK_DIR/mission
COPY ./start.sh $NODE_WORK_DIR/mission
COPY ./package.json $NODE_WORK_DIR/mission
COPY ./known_hosts /root/.ssh/
COPY ./id_rsa /root/.ssh/
COPY ./id_rsa.pub /root/.ssh/
RUN chmod +x ./start.sh \
&& npm install nodemon -g \
&& npm install
EXPOSE 8080