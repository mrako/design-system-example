# Design System Example

[Click here to read the presentation](design_system_presentation.pdf).

This is a short presentation into how design systems could be used to add *automated testing*, *deployment pipelines*, *security audits*, *linting* and *better development practices*.


## Prerequisites

### Using Docker

* [docker](https://docker.com)

### Using Node

* [nodejs](https://nodejs.org)
* [postgresql](https://www.postgresql.org/)

## Running the application using Docker

### Application example

  Give next commands in Terminal or Command Prompt window in design-system-example directory 
  to build Application login page.
    
    docker-compose build
    docker-compose up
    
  Open Application login page with browser:  0.0.0.0.8000

  Close application by giving CTR-C in Terminal or Command Prompt window

### Unit test (Mocha and Jest)

    docker-compose --project-directory . -f compose/test.yml run mocha
    docker-compose --project-directory . -f compose/test.yml run jest

### Acceptance test (Robot Framework)

  Give next commands in Terminal or Command Prompt window in design-system-example directory 
  to build test environment and start tests   
  And give 'docker-compose build' command if needed

    docker-compose --project-directory . -f compose/robot.yml run robot.backend ./wait-for robot.db:5432 -- npm run db:seed:all
    docker-compose --project-directory . -f compose/robot.yml run robot

## Running the application using Node

### Setting up local database

    psql -c "CREATE ROLE example WITH CREATEDB LOGIN PASSWORD 'example'"
    psql -c "CREATE DATABASE example WITH OWNER example"
    psql -c "CREATE DATABASE example_test WITH OWNER example"

### Start

#### Backend

    cd backend
    npm install
    npm run dev

#### Frontend

    cd frontend
    npm install
    npm run dev

### Test

#### Backend

    cd backend
    npm test

#### Frontend

    cd frontend
    npm test
