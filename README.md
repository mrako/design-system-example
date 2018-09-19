# Design System Example

[Click here to read the presentation](design_system_presentation.pdf).

This is a short presentation into how design systems could be used to add *automated testing*, *deployment pipelines*, *security audits*, *linting* and *better development practices*.


## Prerequisites

* [nodejs](http://nodejs.org)
* [docker](http://docker.com)

## Database

    psql -c "CREATE ROLE example WITH CREATEDB LOGIN PASSWORD 'example'"
    psql -c "CREATE DATABASE example WITH OWNER example"
    psql -c "CREATE DATABASE example_test WITH OWNER example"

## Running the application

### Node

    cd frontend
    npm install
    npm run dev

### Docker

    docker-compose build
    docker-compose up

### Test

    cd frontend
    npm test

## Testing

### Node

    npm test

### Docker

    
