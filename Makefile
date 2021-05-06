dev:
	docker-compose -f Docker-compose.yml -f Docker-compose.dev.yml up -d
build:
	docker-compose -f Docker-compose.yml -f Docker-compose.prod.yml up -d --build
prod:
	docker-compose -f Docker-compose.yml -f Docker-compose.prod.yml up -d
down:
	docker-compose down
scale:
	docker-compose -f Docker-compose.yml -f Docker-compose.dev.yml up -d --scale ts-app=2