# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Environment Configuration

To connect to the backend API, you need to set the following environment variable:

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the `REACT_APP_API_BASE_URL` variable in your `.env` file to point to your deployed backend API:
   ```
   REACT_APP_API_BASE_URL=https://your-deployed-api.onrender.com
   ```

If not set, the application will default to `http://localhost:8000` for API requests.

When deploying the frontend, make sure to set this variable to your deployed backend API URL.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
