# Dockerized NodeJS React Application

## Stack

- [Express](http://expressjs.com/) and [NodeJS](https://nodejs.org/en/) for the backend.
- [React](https://reactjs.org), [React Router](https://reacttraining.com/react-router/) and [React Hooks](https://reactjs.org/docs/hooks-intro.html) for frontend.
- [Semantic UI](https://semantic-ui.com/) css framework with [Semantic UI React Integration](https://react.semantic-ui.com/).
- [Docker](https://www.docker.com/) for building docker images and containerizing application.

## Quick Start

### Local development

- `npm ci` inside projects directory.
- Run `npm run develop` inside projects directory to start up the backend and react server in development mode.
- Create a copy of the "sample.env" and name it ".env".
  #### macOS / Linux
  `cp sample.env .env`
  #### Windows
  `copy sample.env .env`
- Client uses `create-react-app` server with hot reload on changes and server uses `nodemon` for server reloading on code changing.

### Production built

- Running `docker-compose up --build` will build the client and server docker images, and then run them inside a container.
- `docker-compose.yml` requires the `server-prod-variables.env` environment variables file which should be created before running `docker-compose up`.

A simple template of that file could be:

```
NODE_ENV=production
PORT=8080
```
