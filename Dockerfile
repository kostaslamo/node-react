# build environment
FROM node:10
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
COPY . ./
RUN npm install pm2 -g
EXPOSE 8080
CMD ["pm2-runtime", "start", "ecosystem.config.js"]