# Quick Start a Typescript Express Node Server

## Introduction

This repository can be used as a quickstart for a Node.js server using Express and TypeScript.
Linting, config and an API call are included.
However, a database connection implementation is not included.

## Getting Started

### Install
- `npm install`

### Compile Typescript
- `npm run compile`

### Lint
- `npm run lint`

### Run Server
- `npm start`

### Sample APIs
- `GET http://localhost:3000/hello`
- `GET http://localhost:3000/hello?name=<your_name>`

## Project Structure

### Server
- The main app, server and routes are in `src\server.ts`.
- Route functions are defined in controllers.

### Controllers
- Controllers handle the API routes.
- Controllers will then call services.

### Services
- Services contain the main logic.
- Services will call providers if required to.

### Providers
- Service providers handle 3rd-party API calls.

### Models
- Any models/interfaces used in the app.

## Useful Links
- Node: https://nodejs.org/en/
- Express: https://expressjs.com/
- TypeScript: https://www.typescriptlang.org/
- TSLint: https://palantir.github.io/tslint/
- Config: https://www.npmjs.com/package/config
- Getting Started with TypeScript 2 + Express + Node.js: http://brianflove.com/2016/11/08/typescript-2-express-node/
- A starter template for TypeScript and Node with a detailed README describing how to use the two together: https://github.com/Microsoft/TypeScript-Node-Starter
