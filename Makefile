dev:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
build:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
prod:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
down:
	docker-compose down
scale:
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --scale ts-app=2
cd:
	docker-compose -f docker-compose.yml -f docker-compose.prod.yml -d --build --no-deps ts-app
# triggers a automatic deploy when a new image is built
watch:
	docker run -d --name watchtower -e WATCHTOWER_TRACE=true -e WATCHTOWER_DEBUG=true -e WATCHTOWER_POLL_INTERVAL=50 -v /var/run/docker.sock:/var/run/docker.sock