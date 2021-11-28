#!/bin/bash

set -e

docker-compose --project-directory . -f docker-compose.yml -f compose/test.yml -f compose/robot.yml down -v

docker-compose --project-directory . -f compose/robot.yml build robot

docker-compose --project-directory . -f compose/robot.yml run robot.backend ./wait-for robot.db:5432 -- npm run db:seed:all
docker-compose --project-directory . -f compose/robot.yml run robot

docker-compose --project-directory . -f compose/robot.yml down
