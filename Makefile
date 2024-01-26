build:
	docker build -t actions-ui .

run:
	docker run --rm -it -p 3000:3000 -p 4000:4000 -v $(shell pwd)/content:/usr/src/nuxt-app/content/ actions-ui