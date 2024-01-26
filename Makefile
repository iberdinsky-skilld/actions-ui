build:
	docker build -t iberdinsky/actions-ui .

run:
	docker run --rm -it -p 3000:3000 -p 4000:4000 -v $(shell pwd)/content:/usr/src/nuxt-app/content/ iberdinsky/actions-ui


# git clone https://github.com/iberdinsky-skilld/launchr.git
#	cd launchr
# git co ui-schemes
# cd example/ui-schemes
# docker run --rm -it -p 3000:3000  -v $(pwd)/:/usr/src/nuxt-app/content/ iberdinsky/actions-ui