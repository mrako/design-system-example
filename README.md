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

### Start the application

Execute the following commands in terminal or command prompt window in design-system-example directory to build Application login page.

```bash
docker-compose build
docker-compose up
```

Open the application login page in your browser: [localhost:8000](http://localhost:8000).

Close the application by Ctrl-C in terminal or command prompt window

### Stop the application and remove data

```bash
docker-compose down -v
```

### Unit test (Mocha and Jest)

```bash
docker-compose --project-directory . -f compose/test.yml run mocha
docker-compose --project-directory . -f compose/test.yml run jest
```

### Acceptance test (Robot Framework)

Execute the following commands in terminal or command prompt window in design-system-example directory to build the test environment and start the acceptance tests. Stop your application before running the robot tests.

```bash
docker-compose --project-directory . -f compose/robot.yml run robot.backend ./wait-for robot.db:5432 -- npm run db:seed:all
docker-compose --project-directory . -f compose/robot.yml run robot
```

## Running the application using Node

### Setting up the local database

```bash
psql -c "CREATE ROLE example WITH CREATEDB LOGIN PASSWORD 'example'"
psql -c "CREATE DATABASE example WITH OWNER example"
psql -c "CREATE DATABASE example_test WITH OWNER example"
```

### Start

#### Backend

```bash
cd backend
npm install
npm run dev
```

#### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Test

#### Backend

```bash
cd backend
npm test
```

#### Frontend

```bash
cd frontend
npm test
```

## Ansible

### Provision EC2 with Docker

```bash
ansible-playbook provisioning/playbook.yml --private-key keys/hopefully-works-aws.pem -i provisioning/hosts.ec2 -u ubuntu
```

## Kubernetes

### Install Kubernetes

```bash
docker run -d --restart=unless-stopped -p 80:80 -p 443:443 rancher/rancher:latest --no-cacerts
```
