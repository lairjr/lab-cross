elm-reactor:
	docker run -p 0.0.0.0:8000:8000 -v /vagrant:/webapp -t -i --rm elm-image elm-reactor -a 0.0.0.0

api:
	docker run -p 0.0.0.0:4000:4000 -v /vagrant:/webapp -w /webapp/src-webserver -t -i --rm elm-image node api.js

elm-bash:
	docker run -v /vagrant:/webapp -t -i --rm elm-image /bin/bash
