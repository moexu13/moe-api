# Personal Site API
> Resume site backend 

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Tests](#tests)
* [Routes](#routes)
* [Todos](#todos)
* [Status](#status)

## General info
This is the backend of my personal site - it selects details about individual projects so that section of my site can be dynamically created.

## Technologies
* Node
* Knex / PostgreSQL
* Jest

## Setup
Clone the repository and create an empty database. Copy .env.sample to .env and change the provided values to yours. Run `npm install` and then `npx knex migrate:latest` to set up the database. Run `npm start:dev` for development mode or just `npm start` if you don't need hot reloading.

## Testing
Tests are written in Jest - run `npm test` to run them.

## Routes
GET `/projects` returns a list of all projects.
POST `/projects` adds a new project (requires authentication)
GET `/projects/:projectId` returns the details of an individual project
PUT `/projects/:projectId` updates a project (requires authentication)
DELETE `/projects/:projectId` deletes a project (requires authentication)

## Todos
* Write tests
* Flesh out queries
* Implement authentication

## Status
Project is in progress.