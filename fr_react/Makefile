.PHONY: start-up
start-up: ## App start-up for local deployment
	git fetch
	git pull
	docker-compose down --volumes
	docker-compose up --build

.PHONY: reload
reload:
	docker-compose down --volumes
	docker-compose up --build