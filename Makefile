FOLDER_PATH = ~/My_Projects/lab-cross

elm-reactor:
	docker run -p 0.0.0.0:8000:8000 -v $(FOLDER_PATH):/webapp -t -i --rm elm-image elm-reactor -a 0.0.0.0

app:
	docker-compose up

webapp:
	docker run -p 0.0.0.0:8000:8000 -v $(FOLDER_PATH):/webapp -t -i --rm elm-image webpack-dev-server --host 0.0.0.0 --port 8000

api:
	docker run -p 0.0.0.0:4000:4000 -v $(FOLDER_PATH):/webapp -w /webapp/src-webserver -t -i --rm elm-image node api.js

install:
	docker run -v $(FOLDER_PATH):/webapp -t -i --rm elm-image yarn install
	docker run -v $(FOLDER_PATH):/webapp -t -i -w /webapp/src-webserver --rm elm-image yarn install

elm-bash:
	docker run -v $(FOLDER_PATH):/webapp -t -i --rm elm-image /bin/bash

docker-image:
	docker build -t elm-image .
