#!/bin/bash

set -e

GITHASH=${GITHASH:-`git rev-parse --short HEAD`}

docker-compose -p designsystem build --pull backend
GITHASH=${GITHASH} docker-compose -p designsystem --project-directory . -f compose/frontend.yml build --pull nginx

docker tag designsystem_backend mrako/designsystem-backend:${GITHASH}
docker tag designsystem_nginx mrako/designsystem-frontend:${GITHASH}

docker tag designsystem_backend mrako/designsystem-backend:latest
docker tag designsystem_nginx mrako/designsystem-frontend:latest

docker push mrako/designsystem-backend:${GITHASH}
docker push mrako/designsystem-frontend:${GITHASH}

docker push mrako/designsystem-backend:latest
docker push mrako/designsystem-frontend:latest

echo "Deploying new version with hash '${GITHASH}' to kube"

kubectl set image deployment/designsystem-backend designsystem-backend=mrako/designsystem-backend:${GITHASH} --record
kubectl set image deployment/designsystem-frontend designsystem-frontend=mrako/designsystem-frontend:${GITHASH} --record
