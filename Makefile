build:
	docker build -t iberdinsky/actions-ui .

run:
	docker run --rm -it -p 3000:3000 -p 1080:1080 -v $(shell pwd)/content/actions:/usr/src/nuxt-app/public/actions/ iberdinsky/actions-ui


# git clone https://github.com/iberdinsky-skilld/launchr.git
#	cd launchr
# git co ui-schemes
# cd example/ui-schemes
# docker run --rm -it -p 3000:3000  -v $(pwd)/:/usr/src/nuxt-app/.output/public/actions iberdinsky/actions-ui
# you will see something like https://silly-cat-5303aa.netlify.app/