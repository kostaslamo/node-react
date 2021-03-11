# build environment
FROM node:12.20-slim
RUN apt-get update && apt-get -y upgrade \
  && apt-get install nano
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . ./
RUN npm ci --silent
RUN npm install pm2 -g
EXPOSE 8080
CMD ["pm2-runtime", "start", "ecosystem.config.js"]