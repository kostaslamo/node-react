# Dockerized NodeJS React Application

## Stack

- [Express](http://expressjs.com/) and [NodeJS](https://nodejs.org/en/) for the backend.
- [React](https://reactjs.org), [React Router](https://reacttraining.com/react-router/) and [React Hooks](https://reactjs.org/docs/hooks-intro.html) for frontend.
- [Semantic UI](https://semantic-ui.com/) css framework with [Semantic UI React Integration](https://react.semantic-ui.com/).
- [Docker](https://www.docker.com/) for building docker images and containerizing application.

## Quick Start

### Local development

- `npm install` inside server and client directories.
- To start the application, if in Mac OS or Linux execute `bash runServerClientDev.sh`. Alternatively run `npm run start-dev` inside server directory to start up the server and `npm start` inside client, to start up the client in development mode.
- Client uses `create-react-app` server with hot reload on changes and server uses `nodemon` for server reloading on code changing.
- Create `.env` files and pass environment variables in both server and client ([React's custom environment variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)).

### Production built
- Running `docker-compose up --build` will build the client and server docker images, and then run them inside a container.
- `docker-compose.yml` requires the `server-prod-variables.env` environment variables file which should be created before running `docker-compose up`.

A simple template of that file could be:
```
NODE_ENV=production
PORT=8080
```
