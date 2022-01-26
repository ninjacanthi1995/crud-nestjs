# CRUD NestJS

This is a solution to the InnovOrder technical test (https://github.com/InnovOrder/software-technical-tests/tree/master/crud-nestjs).

## Table of contents

- [Overview](#overview)
    - [Must-Have Features](#must-have-features)
    - [How to use](#how-to-use)
- [My process](#my-process)
    - [Built with](#built-with)
- [Author](#author)

## Overview

### Must-Have Features

The API must have the following functionalities:

- allow user registration via login / password
- allow authentication of a user via login / password
- on an authenticated route, allow the search for a product by its barcode on the OpenFoodFacts API

### How to use

- Git clone the source code
- npm run start:dev to run the API (!If you refresh the API, you need to do the below steps all over again)
- Go to http://localhost:3000/auth/signup for signing up a new user (request body = {username: string, password: string})
- Go to http://localhost:3000/auth/login for signing in (request body = {username: string, password: string})
- Go to http://localhost:3000/product/:id to search for the product by id
  - use the token returned from signup or login request the pass the request header ('Authorization': 'Bearer token')
- Go to http://localhost:3000/user/:id to update user by id
  - request body = {username: string, password: string}
  - use the token returned from signup or login request the pass the request header ('Authorization': 'Bearer token')

## My process

### Built with

- Javascript
- Typescript
- NestJS
- Passport
- JWT
- Caching
- Axios

## Author

- Website - HOANG Minh Chau (https://portfolio-chou.netlify.app/)
- GitHub - https://github.com/ninjacanthi1995
- LinkedIn - https://www.linkedin.com/in/minh-chau-hoang-b59602121