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
- Client uses `create-react-app` server with hot reload on changes and server uses `nodemon` for server reloading on code changing.

### Production built

- Create `server-prod-variables.env` environment variables file which should be created before running `docker-compose up` and is required by `docker-compose.yml`
  `server-prod-variables.env`:

  ```
  NODE_ENV=production
  PORT=8080
  ```

- Running `docker-compose up --build --detach` will build the client and server docker images, and then run them inside two different containers and under one container stack.
