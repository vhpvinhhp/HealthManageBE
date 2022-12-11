# API for Health Management Site

## Table of contents:

- [Pre-requirement](#pre-requirement)
- [Installtion](#installation)
- [Starting server](#starting-server)
- [Features](#Features)

# Pre-requirements

To build and run this app locally you will need a few things:
- Node v14.17.5
- Npm 9.1.3
- Mongdb
- Git
- VSCode

# Installation

- Clone the repository

```
git clone --depth=1 <link-repo> <project_name>
```

- Install dependencies

```
$ cd <project_name>
$ npm install
```

- Create file `.env` in your project's directory root. Your Nodejs Application will get ENV from this file.
  After that. change content in this file with value coresponding above step.

```bash
$ cp .env.example .env
```

# Starting server

## Environment Local.

- Run your application

```bash
$ npm run start
```

- Check from your browser. Default port is 3000

```sh
http://localhost:3000/api
```

## Environment Local with data demo.

- Run your application

```bash
$ npm run demo
```

- Check from your browser. Default port is 3000

```sh
http://localhost:3000/api
```

## Features

1. Nodejs
2. Express
3. Mongoose
